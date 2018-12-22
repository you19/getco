import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../model/model.commande';
import { ClientService } from '../services/client.service';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/model.produit';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  pageCommande:any;
  constructor(public http:HttpClient,public commandeservice:CommandeService,public router:Router,public dialo:MatDialog) { }

  ngOnInit() {
    this.commandeservice.getCommandes().subscribe(data=>{
      this.pageCommande=data;
     
    },err=>{console.log(err);
    })
  }
  onEdit(id:number){
     
 this.router.navigate(['home/commandeModifier',id]);
   
    

  }
  onCreate1(){
     
   this.dialo.open(CommandeAjouterComponent);  
    }
    ajouter(){
      this.router.navigate(['home/CommmanderProduit']);
    }
    supprimer(id:number){
      let confirm=window.confirm('est vou sure d ajouter le client');
        if(confirm==true){
          this.commandeservice.deleteCommandes(id).subscribe(data=>{
            this.ngOnInit();
    
          }),err=>{console.log(err);
        }
        }
      }
      
      
  
}

@Component({
  selector: 'app-commande',
  templateUrl: './commande-ajouter.component.html',
 // styleUrls: ['./produit-ajouter.component.css']
})
export class CommandeAjouterComponent implements OnInit {

 produit1:Produit;
 produit2:Produit;
  commande:Commande=new Commande();
  pageClient:any;
  pageProduit:any;
 

  constructor(public http:HttpClient,public commandeservice:CommandeService,public router:Router,public dialog: MatDialog,public clientservice:ClientService,public produitservice:ProduitService) { }

  ngOnInit() {
     this.clientservice.getClients().subscribe(data=>{
      this.pageClient=data;
     
    },err=>{console.log(err);
    });
    this.produitservice.Produits().subscribe(data=>{
      this.pageProduit=data;
     
    },err=>{console.log(err);
    })
  }
  saveCommande(){
    let confirm=window.confirm('est vou sure d ajouter cette facture');
    
    if(confirm==true){
     
      this.commande.produits.push(this.produit1);
      this.commande.produits.push(this.produit2);

      this.commandeservice.saveCommande(this.commande).subscribe(data=>{
       
   
     console.log(data)},err=>{console.log(err);})
     this.dialog.closeAll();}
    // this.router.navigate(['home/produit']);
   
 }

}


@Component({
  selector: 'app-commande',
  templateUrl: './commande-modifier.component.html',
 
})
export class CommandeModifierComponent implements OnInit {
  
  commande:any=new Commande();


  id:number;
  constructor(public http:HttpClient,public commandeservice:CommandeService,private route:ActivatedRoute) { 
    this.id=route.snapshot.params['id'];
  
  }

  ngOnInit() {

   
    this.commandeservice.getCommande(this.id).subscribe(data=>{

     this.commande=data;
    },err=>{console.log(err);
    })
   

  }
  modifierCommande(){

    let confirm=window.confirm('est vou sure de modifier le produit');
    if(confirm==true){
    
    this.commandeservice.modifierCommande(this.commande,this.id).subscribe(data=>{
      
   
     console.log(data)},err=>{console.log(err);})
    }
   
 }
}