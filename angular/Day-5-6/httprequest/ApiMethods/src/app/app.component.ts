import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApiMethods';

 constructor(private http:HttpClient){}

  onProductCreate(products:{pname:string,desc:string,price:string})
  {
    const headers = new HttpHeaders({'myHeader':'divya goyal'});
    console.log('prodct', products);
    this.http.post('https://angular-project-http-fbe41-default-rtdb.firebaseio.com/products.json',products,{headers: headers})
    .subscribe((res:any)=>{
      console.log('respose', res.data);
    });
    
  }

}
