import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PresentationComponent } from './presentation/components/presentation/presentation.component';
import { AriasComponent } from './presentation/components/arias/arias.component';
import { MainComponent } from './presentation/components/main/main.component';
import { CategoryComponent } from './presentation/components/category/category.component';
import { CategoryTitleComponent } from './presentation/components/category/category-title/category-title.component';
import { CategoryTrainersComponent } from './presentation/components/category/category-trainers/category-trainers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    AriasComponent,
    MainComponent,
    CategoryComponent,
    CategoryTitleComponent,
    CategoryTrainersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
