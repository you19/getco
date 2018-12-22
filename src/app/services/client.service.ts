import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/model.client';

@Injectable()
export class ClientService{

    constructor(private http: HttpClient) { }
   getProduita(motCle:string,size:number,page:number){
       return  this.http.get("http://localhost:8079/chercher?mc="+motCle+"&size="+size+"&page="+page+"");
   }
   getClients(){
    const httpoptions={
        'headers':new HttpHeaders().set(
            'Authorisation','Bearer fc0fda4a-c883-469b-a73d-2fe8975e32e7')
    }
    
    return  this.http.get("http://localhost:8079/clients");
}
   saveClient(client:Client){
    return this.http.post("http://localhost:8079/clients",client);
  }
  modifierClient(client:Client,id:number){
    return this.http.put("http://localhost:8079/clients/"+id,client);
  }
  getClient(id:number){
    return  this.http.get("http://localhost:8079/clients/"+id);
}
deleteClient(id:number){
    return  this.http.delete("http://localhost:8079/clients/"+id);
}

}