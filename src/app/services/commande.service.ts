import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/model.commande';

@Injectable()
export class CommandeService{

    constructor(private http: HttpClient) { }
   getCommandes(){
       return  this.http.get("http://localhost:8079/Commandes");
   }
   saveCommande(commande:Commande){
    return this.http.post("http://localhost:8079/Commandes",commande);
  }
  modifierCommande(commande:Commande,id:number){
    return this.http.put("http://localhost:8079/Commandes/"+id,commande);
  }
  getCommande(id:number){
    return  this.http.get("http://localhost:8079/Commande/"+id);
}
deleteCommandes(id:number){
  return  this.http.delete("http://localhost:8079/Commandes/"+id);
}
}