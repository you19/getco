import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProduitComponent, ProduitAjouterComponent, ProduitModifierComponent } from "./app/produit/produit.component";
import { HomeComponent } from './app/home/home.component';

import { ClientComponent, ClientModifierComponent, ClientAjouterComponent } from './app/client/client.component';
import { FactureComponent, FactureAjouterComponent, FactureModifierComponent } from './app/facture/facture.component';
import { LivraisonComponent, LivraisonAjouterComponent, LivraisonModifierComponent, LivraisonAficherComponent } from './app/livraison/livraison.component';
import { CommandeComponent, CommandeModifierComponent, CommandeAjouterComponent } from './app/commande/commande.component';
import { ComProduitComponent, CommandeProduitComponent } from './app/com-produit/com-produit.component';
import { LoginComponent } from './app/login/login.component';






export const appRoutes: Routes = [
    
      {
        path: 'login',
        component: LoginComponent,
      },
      {
         
        path: 'home',
        component: HomeComponent,
        children: [ {
          path: 'produit',
          component: ProduitComponent,
         
        },
        {
          path: 'produitAjouter',
          component: ProduitAjouterComponent,
         
        },
        {
          path: 'produitModifier/:id',
          component:  ProduitModifierComponent,
         
        },
   
        {
          path: 'client',
          component: ClientComponent,
         
        },
        {
          path: 'clientAjouter',
          component: ClientAjouterComponent,
         
        },
        {
          path: 'clientModifier/:id',
          component:  ClientModifierComponent,
         
        },
        {
          path: 'facture',
          component: FactureComponent,
         
        },
        {
          path: 'factureAjouter',
          component: FactureAjouterComponent,
         
        },
        {
          path: 'factureModifier/:id',
          component:  FactureModifierComponent,
         
        },
        {
          path: 'livraison',
          component:LivraisonComponent,
         
        },
        {
          path: 'livraisonAjouter',
          component:LivraisonAjouterComponent,
         
        },
        {
          path: 'livraisonModifier/:id',
          component:  LivraisonModifierComponent,
         
        },
        {
          path: 'commande',
          component: CommandeComponent,
         
        },
        {
          path: 'commandeModifier/:id',
          component:  CommandeModifierComponent,
         
        },
        {
          path: 'commandeAjouter',
          component:CommandeAjouterComponent,
         
        },
        {
          path: 'CommmanderProduit',
          component:ComProduitComponent,
         
        },
        {
          path: 'CommmandProduit',
          component:CommandeProduitComponent,
         
        },
        {
          path: 'AfficherLivraison/:id',
          component:LivraisonAficherComponent,
         
        },

]
    },
    {
      path:'', redirectTo:'/login',pathMatch:'full'
    }
   
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {enableTracing: false}
      )
    ],
    exports: [RouterModule],
    
  })


export class AppRoutingModule{

}