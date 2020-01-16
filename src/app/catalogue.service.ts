import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private host: string="http://localhost:8087";

  constructor(private http: HttpClient) { }

  public getAllCategories(){
    return this.http.get(this.host+"/categories");
  }
}
