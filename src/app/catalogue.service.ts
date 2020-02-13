import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host: string="http://localhost:8087";

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public getAllCategories(){
    return this.http.get(this.host+"/categories");
  }

  public getAllProducts(){
    return this.http.get(this.host+"/products")
  }

  public getRessource(url){
    return this.http.get(url);
  }

  public deleteRessource(url){
    let headers=new HttpHeaders({'authorization':'Bearer '+this.authService.jwt})
    return this.http.delete(url, {headers:headers});
  }

  public addRessource(url, data){
    let headers=new HttpHeaders({'authorization':'Bearer '+this.authService.jwt})
    return this.http.post(url, data, {headers:headers});
  }

  public updateRessource(url, data){
    let headers=new HttpHeaders({'authorization':'Bearer '+this.authService.jwt})
    return this.http.patch(url, data, {headers:headers});
  }
}
