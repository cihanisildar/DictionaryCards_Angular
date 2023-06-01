import { Injectable } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyWordsService {

  constructor(public dictionaryService : DictionaryService, private router: Router) { }
  array = this.dictionaryService.array
  arrayiki: any[] = [];
  isArrayCreated: boolean = false
  nounDef = this.dictionaryService.theNounDefinition1
  nounDef2 = this.dictionaryService.theNounDefinition2

  remove() {
    localStorage.clear()
    JSON.parse(localStorage.getItem('array'))
    this.isArrayCreated = false
    alert('Words Cleared!')
    this.router.navigate([''])
}
}