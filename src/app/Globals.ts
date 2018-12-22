import { Injectable } from '@angular/core';
import { Produit } from './model/model.produit';

@Injectable()
export class Globals {
 produits=new Array<Produit>();
}