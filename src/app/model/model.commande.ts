import { Client } from "./model.client";
import { Produit } from "./model.produit";

export class Commande{
    numeroCommande:number;
    dateCommande:Date;
    client:Client=new Client();
    prix:number;
    produits=new Array<Produit>();
    
}