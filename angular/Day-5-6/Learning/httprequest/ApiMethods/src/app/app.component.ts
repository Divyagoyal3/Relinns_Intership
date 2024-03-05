import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './model/Products';
import { subscribe } from 'diagnostics_channel';
import { identifierName } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Value } from 'sass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApiMethods';
  allProducts :Product [] = [];
  isFetching :boolean  =  false;
  @ViewChild('productsForm')
  form!: NgForm;

  editMode :boolean = false;
  cuurentProductId :string ='';
  selectedProduct = {};

 constructor(private http:HttpClient){}
 ngOnInit(){
  this.fetchProducts();
 }
 onProductsFetch(){
  this.fetchProducts();
 }
  

  onProductCreate(products:{pname:string,desc:string,price:string})
  {
    if(!this.editMode){
    const headers = new HttpHeaders({'myHeader':'divya goyal'});
    console.log('product', products);
    this.http.post<{name:string}>('https://angular-project-http-fbe41-default-rtdb.firebaseio.com/products.json',products,{headers: headers})
    .subscribe((res:any)=>{
      console.log('response', res.data);
    });
  }else{
  
    this.updateProduct(this.cuurentProductId, products);
  }
  }
    
  private fetchProducts(){
   this.isFetching = true;
    return this.http.get<{ [Key: string]: Product }>('https://angular-project-http-fbe41-default-rtdb.firebaseio.com/products.json')
    .pipe(
      map(res => {
        const products = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            products.push({ ...res[key], id: key });
          }
        }
        return products;
      })
    )
    .subscribe(products => {
      console.log(products);
      this.allProducts =products;
      this.isFetching = false;
    });
   } 



   onDeleteProduct(id: string ='' ){
    this.http.delete('https://angular-project-http-fbe41-default-rtdb.firebaseio.com/products/' +id+ '.json')
    .subscribe();
  }

  onDeleteAllProducts(){
    this.http.delete('https://angular-project-http-fbe41-default-rtdb.firebaseio.com/products.json')
    .subscribe();
  }
  
  onEditClicked(product: any){
    this.cuurentProductId = product.id;
  //  Populate the form with the product
    this.form.setValue({
      pName :product.pName,
      desc :product.desc,
      price: product.price
    })
     this.selectedProduct = {
      pName :product.pName,
      desc :product.desc,
      price: product.price
    }
    // change the button value to update product
    this.editMode = true;
  }

  // update data
  updateProduct(id:string , value :any){
    this.http.put('https://angular-project-http-fbe41-default-rtdb.firebaseio.com/products/' +id+ ' .json' , value)
    .subscribe();
  }
}


