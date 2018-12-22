import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { LivraisonService } from '../services/livraison.service';
import { Livraison } from '../model/model.livraison';
import { Produit } from '../model/model.produit';
;
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  pageLivraison:any;
  constructor(public http:HttpClient,public livraisonservice:LivraisonService,public router:Router,public dialo:MatDialog) { }

  ngOnInit() {
    this.livraisonservice.getLivraisons().subscribe(data=>{
      this.pageLivraison=data;
     
    },err=>{console.log(err);
    })
  }
  onEdit(id:number){
     
this.router.navigate(['home/livraisonModifier',id]);
   
    

  }
  onCreate1(){
     
   this.dialo.open(LivraisonAjouterComponent);
      
    }
    lister(id:number){
     
      this.router.navigate(['home/AfficherLivraison',id]);
         
          
      
        }
    supprimer(id:number){
      let confirm=window.confirm('est vou sure d ajouter le client');
        if(confirm==true){
          this.livraisonservice.deleteLivraison(id).subscribe(data=>{
            this.ngOnInit();
    
          }),err=>{console.log(err);
        }
        }
      }
      
  

}
@Component({
  selector: 'app-livraison',
  templateUrl: './livraison-ajouter.component.html',
 // styleUrls: ['./produit-ajouter.component.css']
})
export class LivraisonAjouterComponent implements OnInit {
  
  livraison:Livraison=new Livraison();
  pageCommande:any;

  constructor(public http:HttpClient,public livraisonservice:LivraisonService,public router:Router,public dialog: MatDialog) { }

  ngOnInit() {
     this.livraisonservice.getCommande().subscribe(data=>{
      this.pageCommande=data;
     
    },err=>{console.log(err);
    })
  }
  saveFacture(){
    let confirm=window.confirm('est vou sure d ajouter cette facture');
    if(confirm==true){
      
    this.livraisonservice.saveLivraison(this.livraison).subscribe(data=>{
   
     console.log(data)},err=>{console.log(err);})
     this.dialog.closeAll();}
    // this.router.navigate(['home/produit']);
   
 }

}
@Component({
  selector: 'app-livraison',
  templateUrl: './livraison-modifier.component.html',
 
})
export class LivraisonModifierComponent implements OnInit {
  
  livraison:any=new Livraison();
  id:number;
  constructor(public http:HttpClient,public livraisonservice:LivraisonService,private route:ActivatedRoute) { 
    this.id=route.snapshot.params['id'];
  
  }

  ngOnInit() {
   
    this.livraisonservice.getLivraison(this.id).subscribe(data=>{

     this.livraison=data;
    },err=>{console.log(err);
    })
   

  }
  modifierLivraison(){

    let confirm=window.confirm('est vou sure de modifier le produit');
    if(confirm==true){
    
    this.livraisonservice.modifierLivraison(this.livraison,this.id).subscribe(data=>{
      
   
     console.log(data)},err=>{console.log(err);})
    }
   
 }
}
 @Component({
  selector: 'app-livraison',
  templateUrl: './livraison-affcher.component.html',
 
})
export class LivraisonAficherComponent implements OnInit {
  pageLivraison:any;
  liv:any;
  id:number;
  page:any;
   

  constructor(public http:HttpClient,public livraisonservice:LivraisonService,public router:Router,private route:ActivatedRoute) { 
    this.id=route.snapshot.params['id'];
  }

  ngOnInit() {
    this.livraisonservice.getLivraison(this.id).subscribe(data=>{
      this.pageLivraison=data;
    
   
    },err=>{console.log(err);
    })
    
  
    
  }
  @ViewChild('content') content:ElementRef;
  downloadPDF(){
   
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element,renderer){
        return true;
      }
    };
    
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test1.pdf');


  }
  

}
  

