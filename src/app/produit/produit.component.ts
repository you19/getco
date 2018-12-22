import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/model.produit';
import { MatDialog } from '@angular/material';
import { CarouselConfig } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]

})
export class ProduitComponent implements OnInit {
  
  pageProduit:any;
  page:number=0;
  size:number=3;
  nom:string="";
  erreur:boolean=false;
  pages:Array<number>;
  

  constructor(config: CarouselConfig,public http:HttpClient,public produitservice:ProduitService,public router:Router,public dialo:MatDialog) {
    config.interval = 5000;
   
   }

  ngOnInit() {
    this.produitservice.getProduits(this.nom,this.size,this.page).subscribe(data=>{
      this.pageProduit=data;
      this.pages=new Array(this.pageProduit.totalPages);
    },err=>{console.log(err);
    })
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
  goToPage(i:number){
    this.page=i;
    this.chercher();
  }
  onEdit(id:number){
    // this.produitservice.getProduit(id);
    this.router.navigate(['home/produitModifier',id]);
   // this.dialo.open(ProduitModifierComponent);
    

  }
  onCreate1(){
     
  this.dialo.open(ProduitAjouterComponent);
    
  }
  supprimer(id:number){
    let confirm=window.confirm('est vou sure d ajouter le client');
      if(confirm==true){
        this.produitservice.deleteProduit(id).subscribe(data=>{
          this.ngOnInit();
  
        }),err=>{console.log(err);
      }
      }
    }
}





@Component({
  selector: 'app-produit',
  templateUrl: './produit-ajouter.component.html',
 // styleUrls: ['./produit-ajouter.component.css']
})
export class ProduitAjouterComponent implements OnInit {
  
  produit:Produit=new Produit();

  constructor(public http:HttpClient,public produitservice:ProduitService,public router:Router,public dialog: MatDialog) { }

  ngOnInit() {

  }
  saveClient(){
    let confirm=window.confirm('est vou sure de modifier le produit');
    if(confirm==true){
    this.produitservice.saveProduit(this.produit).subscribe(data=>{
   
     console.log(data)},err=>{console.log(err);})
     this.dialog.closeAll();}
    // this.router.navigate(['home/produit']);
   
 }
 handleFileSelect(evt) {
  var files = evt.target.files;
  var file = files[0];

  if (files && file) {
    var reader = new FileReader();

    reader.onload = this
      .handleReaderLoaded
      .bind(this);

    reader.readAsBinaryString(file);
  }
}
handleReaderLoaded(readerEvt) {
  var binaryString = readerEvt.target.result;
  this.produit.photo = btoa(binaryString);
  console.log(btoa(binaryString));
}
}
@Component({
  selector: 'app-produit',
  templateUrl: './produit-modifier.component.html',
  styleUrls: ['./produit-modifier.component.css']
})
export class ProduitModifierComponent implements OnInit {
  
  produit:any=new Produit();
  id:number;
  constructor(public http:HttpClient,public produitservice:ProduitService,private route:ActivatedRoute) { 
    this.id=route.snapshot.params['id'];
  
  }

  ngOnInit() {
   
    this.produitservice.getProduit(this.id).subscribe(data=>{

     this.produit=data;
    },err=>{console.log(err);
    })
   

  }
  modifierProduit(){

    let confirm=window.confirm('est vou sure de modifier le produit');
    if(confirm==true){
    
    this.produitservice.modifierProduit(this.produit,this.id).subscribe(data=>{
      
   
     console.log(data)},err=>{console.log(err);})
    }
   
 }
 handleFileSelect(evt) {
  var files = evt.target.files;
  var file = files[0];

  if (files && file) {
    var reader = new FileReader();

    reader.onload = this
      .handleReaderLoaded
      .bind(this);

    reader.readAsBinaryString(file);
  }
}
handleReaderLoaded(readerEvt) {
  var binaryString = readerEvt.target.result;
  this.produit.photo = btoa(binaryString);
  console.log(btoa(binaryString));
}
}