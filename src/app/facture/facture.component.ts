import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { FactureService } from '../services/facture.service';
import { Facture } from '../model/model.facture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  pageFacture:any;
  constructor(public http:HttpClient,public factureservice:FactureService,public router:Router,public dialo:MatDialog) { }

  ngOnInit() {
    this.factureservice.getFactures().subscribe(data=>{
      this.pageFacture=data;
     
    },err=>{console.log(err);
    })
  }
  onEdit(id:number){
     
 this.router.navigate(['home/factureModifier',id]);
   
    

  }
  onCreate1(){
     
   this.dialo.open(FactureAjouterComponent);
      
    }
    supprimer(id:number){
      let confirm=window.confirm('est vou sure d ajouter le client');
      if(confirm==true){
        this.factureservice.deleteFacture(id).subscribe(data=>{
          this.ngOnInit();
  
        }),err=>{console.log(err);
      }
      }
    }
  
  
}
@Component({
  selector: 'app-facture',
  templateUrl: './facture-ajouter.component.html',
 // styleUrls: ['./produit-ajouter.component.css']
})
export class FactureAjouterComponent implements OnInit {
  
  facture:Facture=new Facture();
  pageCommande:any;

  constructor(public http:HttpClient,public factureservice:FactureService,public router:Router,public dialog: MatDialog) { }

  ngOnInit() {
     this.factureservice.getCommande().subscribe(data=>{
      this.pageCommande=data;
     
    },err=>{console.log(err);
    })
  }
  saveFacture(){
    let confirm=window.confirm('est vou sure d ajouter cette facture');
    if(confirm==true){
    
    this.factureservice.saveFacture(this.facture).subscribe(data=>{
   
     console.log(data)},err=>{console.log(err);})    
     
    
    }
    
   
   
 }

}

@Component({
  selector: 'app-facture',
  templateUrl: './facture-modifier.component.html',
 
})
export class FactureModifierComponent implements OnInit {
  
  facture:any=new Facture();
  id:number;
  constructor(public http:HttpClient,public factureservice:FactureService,private route:ActivatedRoute) { 
    this.id=route.snapshot.params['id'];
  
  }

  ngOnInit() {
   
    this.factureservice.getFacture(this.id).subscribe(data=>{

     this.facture=data;
    },err=>{console.log(err);
    })
   

  }
  modifierFacture(){

    let confirm=window.confirm('est vou sure de modifier le produit');
    if(confirm==true){
    
    this.factureservice.modifierFacture(this.facture,this.id).subscribe(data=>{
      
   
     console.log(data)},err=>{console.log(err);})
    }
   
 }
}