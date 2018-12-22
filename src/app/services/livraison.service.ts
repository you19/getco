import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livraison } from '../model/model.livraison';

@Injectable()
export class LivraisonService{

    constructor(private http: HttpClient) { }
  
   getLivraisons(){

    return  this.http.get("http://localhost:8079/Livraisons");
}
   saveLivraison(livraison:Livraison){
    return this.http.post("http://localhost:8079/Livraisons",livraison);
  }
  modifierLivraison(livraison:Livraison,id:number){
    return this.http.put("http://localhost:8079/Livraisons/"+id,livraison);
  }
  getLivraison(id:number){
    return  this.http.get("http://localhost:8079/Livraisons/"+id);
}
deleteLivraison(id:number){
    return  this.http.delete("http://localhost:8079/Livraisons/"+id);
}

getCommande(){
    return  this.http.get("http://localhost:8079/Commandes");
}

}