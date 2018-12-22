import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../model/model.produit';

@Injectable()
export class ProduitService{

    constructor(private http: HttpClient) { }
   getProduits(motCle:string,size:number,page:number){
       return  this.http.get("http://localhost:8079/chercher?mc="+motCle+"&size="+size+"&page="+page+"");
   }
   saveProduit(produit:Produit){
    return this.http.post("http://localhost:8079/Produits",produit);
  }
  modifierProduit(produit:Produit,id:number){
    return this.http.put("http://localhost:8079/Produits/"+id,produit);
  }
  getProduit(id:number){
    return  this.http.get("http://localhost:8079/produit/"+id);
}
Produits(){
  return  this.http.get("http://localhost:8079/Produits");
}
deleteProduit(id:number){
  return  this.http.delete("http://localhost:8079/Produits/"+id);
}

}