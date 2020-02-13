import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  mode: string="list";
  categories: any;
  currentProduit: any;
  products: any;

  constructor(private catalogueService:CatalogueService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.catalogueService.getAllProducts()
      .subscribe(data=>{
        this.products = data;
      }, error => {
        console.log(error);
      })
  }
  loadCategories(){
    this.catalogueService.getAllProducts()
      .subscribe(data=>{
        this.categories = data;
      }, error => {
        console.log(error);
      })
  }
  onNewProd() {
    this.mode = 'new-prod';
    this.loadCategories();
  }

  onSaveProd(data) {
    let url = this.catalogueService.host+'/products';
    this.catalogueService.addRessource(url, data)
      .subscribe(data=>{
        this.mode='list';
        this.loadProducts();
      }, error => {
        console.log(error);
      })
  }

  onUpdateProd(data) {
    let url = this.currentProduit._links.self.href;
    this.catalogueService.updateRessource(url, data)
      .subscribe(data=>{
        this.mode='list';
        this.loadProducts();
      },error => {
        console.log(error);
      })
  }

  onDeleteProduct(prod) {
    let c = confirm('Êtes vous sure?');
    if (!c) return;
    this.catalogueService.deleteRessource(prod._links.self.href)
      .subscribe(data=>{
        this.mode = 'list';
        this.loadProducts();
      }, error => {
        console.log(error);
      })
  }


  onEditProduct(prod) {
    this.catalogueService.getRessource(prod._links.self.href)
      .subscribe(data=>{
        this.currentProduit = data;
        this.mode = 'edit-prod';
      }, error => {
        console.log(error);
      })
  }

}
