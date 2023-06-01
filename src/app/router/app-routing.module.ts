import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from '../components/catalog/catalog.component';
import { HomeComponent } from '../components/home/home.component';
import { DictionaryComponent } from '../components/dictionary/dictionary.component';
import { MyWordsComponent } from '../components/my-words/my-words.component';
import { HomePageComponent } from '../components/home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'my-words', component: MyWordsComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: '', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
