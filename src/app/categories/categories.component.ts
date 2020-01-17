import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  currentCategory;
  constructor(private catalogueService: CatalogueService,
              private router: Router) { }

  ngOnInit() {
    this.catalogueService.getAllCategories()
      .subscribe(data=>{
        this.categories = data;
      }, error => {
        console.log(error);
      })
  }
  onGetProducts(category){
    this.currentCategory = category;
    let url = category._links.products.href;
    this.router.navigateByUrl("/products/"+btoa(url));
  }

}
