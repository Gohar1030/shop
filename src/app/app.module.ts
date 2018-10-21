import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavInfoComponent } from './nav-info/nav-info.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { SliderComponent } from './slider/slider.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavInfoComponent,
    MainComponent,
    SliderComponent,
    ItemDetailComponent,
    FooterComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,

    RouterModule.forRoot(
      [
        {path: '', pathMatch:'full', redirectTo:'home'},
        {path:'home', component:MainComponent},
        {path:'item/:id', component:ItemDetailComponent}
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
