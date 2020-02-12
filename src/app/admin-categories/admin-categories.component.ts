import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  categories;
  currentCategorie;
  mode:string='list';
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.loadCategories();
  }

  public loadCategories(){
    this.catalogueService.getAllCategories()
      .subscribe(data=>{
        this.categories = data;
      }, error => {
        console.log(error);
      })
  }
  public onDeleteCategorie(category) {
    let c = confirm("Etes vous sûre?");
    if (!c) return;
    this.catalogueService.deleteRessource(category._links.self.href)
      .subscribe(data=>{
        this.mode = 'list';
        this.loadCategories();
      },error => {
        console.log(error);
      })
  }

  public onNewCat() {
    this.mode = 'new-cat';
  }

  public onSaveCat(data) {
    let url = this.catalogueService.host+'/categories';
    this.catalogueService.addRessource(url, data)
      .subscribe(data =>{
        this.mode = 'list';
        this.loadCategories();
      }, error => {
        console.log(error);
      })
  }

  public onEditCategorie(cat) {
    this.catalogueService.getRessource(cat._links.self.href)
      .subscribe(data =>{
        this.currentCategorie = data;
        this.mode = 'edit-cat';
      }, error => {
        console.log(error);
      })
  }

  public onUpdateCat(data) {
    let url = this.currentCategorie._links.self.href;
    this.catalogueService.updateRessource(url, data)
      .subscribe(data => {
        this.mode = 'list';
        this.loadCategories();
      }, error => {
        console.log(error);
      })

  }
}
