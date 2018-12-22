import { Commande } from "./model.commande";


export class Facture{
    
    dateaFacture:Date;
   montant:number;
   commande:Commande=new Commande();

}