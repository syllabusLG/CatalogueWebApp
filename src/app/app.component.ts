import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CatalogueWebApp';

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.loadToken();
  }
  public isAuthenticated(){
    return this.authService.isAuthenticated();
  }
  public isAdmin(){
    return this.authService.isAdmin();
  }
  public isUser(){
    return this.authService.isUser();
  }

  public logOut(){
    this.authService.logout();
  }
}
