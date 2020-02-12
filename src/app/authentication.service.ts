import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host2: string="http://localhost:8080";
  public jwt: string;
  username: string;
  roles: Array<string>;

  constructor(private http: HttpClient) { }

  public login(data){
    return this.http.post(this.host2+"/login", data, {observe:'response'});
  }

  public saveToken(jwt){
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  private parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles=objJWT.roles;
  }

  public isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  public isUser(){
    return this.roles.indexOf('USER')>=0;
  }

  public isAuthenticated(){
    return this.roles;
  }

  public loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }
  public logout(){
    localStorage.removeItem('token');
    this.initParams();
  }
  public initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }

}
