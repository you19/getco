import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProduitComponent, ProduitAjouterComponent, ProduitModifierComponent } from './produit/produit.component';
import { AppRoutingModule } from '../app.routine.module';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProduitService } from './services/produit.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { CarouselModule } from 'ngx-bootstrap';

import { ClientComponent, ClientModifierComponent, ClientAjouterComponent } from './client/client.component'
import { ClientService } from './services/client.service';
import { FactureComponent, FactureAjouterComponent, FactureModifierComponent } from './facture/facture.component';
import { FactureService } from './services/facture.service';
import { LivraisonComponent, LivraisonAjouterComponent, LivraisonModifierComponent, LivraisonAficherComponent } from './livraison/livraison.component';
import { LivraisonService } from './services/livraison.service';
import { CommandeComponent, CommandeModifierComponent, CommandeAjouterComponent } from './commande/commande.component';
import { CommandeService } from './services/commande.service';
import { ComProduitComponent, CommandeProduitComponent } from './com-produit/com-produit.component';
import { Globals } from './Globals';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ContentComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    ProduitAjouterComponent,
    ProduitModifierComponent,
    ClientComponent,
    ClientAjouterComponent,
    ClientModifierComponent,
    FactureComponent,
    FactureAjouterComponent,
    FactureModifierComponent,
    LivraisonComponent,
    LivraisonAjouterComponent,
    LivraisonModifierComponent,
    CommandeComponent,
    CommandeModifierComponent,
    CommandeAjouterComponent,
    ComProduitComponent,
    CommandeProduitComponent,
    LivraisonAficherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,HttpClientModule,FormsModule,BrowserAnimationsModule,MatDialogModule,MatButtonModule, CarouselModule.forRoot()
  ],
  providers: [ProduitService,ClientService,FactureService,LivraisonService,CommandeService,AppService,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
