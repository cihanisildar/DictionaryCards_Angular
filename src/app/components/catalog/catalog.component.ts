import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  constructor(private router: Router,private dictionaryService: DictionaryService) {}

  toDictionary() {
    this.router.navigate(['dictionary'])
    this.dictionaryService.refresh()
  }

  toMyWords() {
    this.router.navigate(['my-words'])
  }
}
