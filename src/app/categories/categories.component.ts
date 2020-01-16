import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  categories;
  ngOnInit() {
    this.catalogueService.getAllCategories()
      .subscribe(data=>{
        this.categories = data;
      }, error => {
        console.log(error);
      })
  }

}
