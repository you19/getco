import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Facture } from '../model/model.facture';

@Injectable()
export class FactureService{

    constructor(private http: HttpClient) { }
  
   getFactures(){

    return  this.http.get("http://localhost:8079/Factures");
}
   saveFacture(facture:Facture){
    return this.http.post("http://localhost:8079/Factures",facture);
  }
  modifierFacture(facture:Facture,id:number){
    return this.http.put("http://localhost:8079/Factures/"+id,facture);
  }
  getFacture(id:number){
    return  this.http.get("http://localhost:8079/Factures/"+id);
}

getCommande(){
    return  this.http.get("http://localhost:8079/Commandes");
}
deleteFacture(id:number){
    return  this.http.delete("http://localhost:8079/Factures/"+id);
}

}