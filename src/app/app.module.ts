import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as alertify from 'alertifyjs'
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { MyWordsComponent } from './components/my-words/my-words.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { AlertifyService } from './services/alertify.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    MyWordsComponent,
    DictionaryComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
