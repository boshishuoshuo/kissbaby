import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SalesComponent } from './sales/sales.component';
import { KidsComponent } from './sales/kids/kids.component';
import { EachKidComponent } from './sales/kids/each-kid/each-kid.component';
import { SaleDetailComponent } from './sales/sale-detail/sale-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ProfileComponent,
    SalesComponent,
    KidsComponent,
    EachKidComponent,
    SaleDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
