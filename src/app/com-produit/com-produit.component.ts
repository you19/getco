import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandeService } from '../services/commande.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/model.produit';
import { Globals } from '../Globals';
import { ClientService } from '../services/client.service';
import { Commande } from '../model/model.commande';

@Component({
  selector: 'app-com-produit',
  templateUrl: './com-produit.component.html',
  styleUrls: ['./com-produit.component.css']
})
export class ComProduitComponent implements OnInit {

  pageProduit:any;
 page:number=0;

  size:number=3;
  nom:string="";
  erreur:boolean=false;
  pages:Array<number>;
 produit=new Array<Produit>();
  
 

  constructor(public http:HttpClient,public produitservice:ProduitService,public router:Router,public global:Globals) {
   
   
   }

  ngOnInit() {
    this.produitservice.getProduits(this.nom,this.size,this.page).subscribe(data=>{
      this.pageProduit=data;
      this.pages=new Array(this.pageProduit.totalPages);
    },err=>{console.log(err);
    })
  }
  goToPage(i:number){
    this.page=i;
    this.chercher();
  }
  chercher(){
   
    this.produitservice.getProduits(this.nom,this.size,this.page).subscribe(data=>{
      this.pageProduit=data;
      this.pages=new Array(this.pageProduit.totalPages);
    },err=>{console.log(err);
    })
   // if(this.pageProduit.equal("")){
    //  this.erreur=true;
      //    }
  }
  commander(P:Produit){
   this.produit.push(P);
  }
  envoyer(){
   this.global.produits=this.produit;
   this.router.navigate(['home/CommmandProduit']);

  }

}

@Component({
  selector: 'app-com-produit',
  templateUrl: './commande-produit.component.html'
 
})
export class CommandeProduitComponent implements OnInit{

  i:number=0;
  commande:Commande=new Commande();
  pageClient:any;
  pageProduit:any;
  prix:number=0;
  produits=new Array<Produit>();
  constructor(public global:Globals,public commandeservice:CommandeService,public router:Router,public clientservice:ClientService,public produitservice:ProduitService){

  }
  ngOnInit() {
   this.produits=this.global.produits;
   this.clientservice.getClients().subscribe(data=>{
    this.pageClient=data;
   
  },err=>{console.log(err);
  });
  this.produitservice.Produits().subscribe(data=>{
    this.pageProduit=data;
   
  },err=>{console.log(err);
  })
  for (let i = 0; i < this.produits.length; i++) {
    this.prix=this.produits[i].prix+this.prix;
   }

  }
  saveCommande(){
    let confirm=window.confirm('est vou sure d ajouter cette facture');
    
    if(confirm==true){
      for (let i = 0; i < this.produits.length; i++) {
        this.commande.produits.push(this.produits[i]);
      }
      this.commande.dateCommande=new Date();
      this.commande.prix=this.prix;
      
      this.commandeservice.saveCommande(this.commande).subscribe(data=>{
       
   
     console.log(data)},err=>{console.log(err);});
     this.router.navigate(['home/commande']);

    }
    // this.router.navigate(['home/produit']);
   
 }
 delete(index:number){
  this.prix=this.prix-this.produits[index].prix;
   this.produits.splice(index,1);
  
 }


}