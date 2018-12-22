import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../services/client.service';
import { Client } from '../model/model.client';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  pageClient:any;
  constructor(public http:HttpClient,public clientservice:ClientService,public router:Router,public dialo:MatDialog) { }

  ngOnInit() {
    this.clientservice.getClients().subscribe(data=>{
      this.pageClient=data;
     
    },err=>{console.log(err);
    })
  }
  onEdit(id:number){
    // this.produitservice.getProduit(id);
    this.router.navigate(['home/clientModifier',id]);
   // this.dialo.open(ProduitModifierComponent);
    

  }
  onCreate1(){

     
    this.dialo.open(ClientAjouterComponent);
      
    }
    supprimer(id:number){
  let confirm=window.confirm('est vou sure d ajouter le client');
    if(confirm==true){
      this.clientservice.deleteClient(id).subscribe(data=>{
        this.ngOnInit();

      }),err=>{console.log(err);
    }
    }
  }
  
  

}
@Component({
  selector: 'app-client',
  templateUrl: './client-ajouter.component.html',
 // styleUrls: ['./produit-ajouter.component.css']
})
export class ClientAjouterComponent implements OnInit {
  
  client:Client=new Client();

  constructor(public http:HttpClient,public clientservice:ClientService,public router:Router,public dialog: MatDialog) { }

  ngOnInit() {

  }
  saveClient(){
    let confirm=window.confirm('est vou sure d ajouter le client');
    if(confirm==true){
    this.clientservice.saveClient(this.client).subscribe(data=>{
   
     console.log(data)},err=>{console.log(err);})
     this.dialog.closeAll();}
    // this.router.navigate(['home/produit']);
   
 }
}
@Component({
  selector: 'app-client',
  templateUrl: './client-modifier.component.html',
 
})
export class ClientModifierComponent implements OnInit {
  
  client:any=new Client();
  id:number;
  constructor(public http:HttpClient,public clientservice:ClientService,private route:ActivatedRoute) { 
    this.id=route.snapshot.params['id'];
  
  }

  ngOnInit() {
   
    this.clientservice.getClient(this.id).subscribe(data=>{

     this.client=data;
    },err=>{console.log(err);
    })
   

  }
  modifierClient(){

    let confirm=window.confirm('est vou sure de modifier le produit');
    if(confirm==true){
    
    this.clientservice.modifierClient(this.client,this.id).subscribe(data=>{
      
   
     console.log(data)},err=>{console.log(err);})
    }
   
 }
}