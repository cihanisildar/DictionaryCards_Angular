import { Component, ElementRef, ViewChild, OnInit, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { MyWords } from 'src/app/interface/model';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { MyWordsService } from 'src/app/services/my-words.service';

@Component({
  selector: 'app-my-words',
  templateUrl: './my-words.component.html',
  styleUrls: ['./my-words.component.scss']
})
export class MyWordsComponent {

  myWords: MyWords = this.dictionaryService.myWords
  array = this.dictionaryService.array
  isArrayCreated = this.myWordService.isArrayCreated
  arrayiki = this.myWordService.arrayiki

  @ViewChild('word') word: ElementRef | undefined;


  constructor(public myWordService: MyWordsService, private dictionaryService: DictionaryService,
    private router: Router) {
    if (JSON.parse(localStorage.getItem('array')) !== null)
      this.isArrayCreated = true
      if (this.array.length === 0||null)
      this.isArrayCreated = false
      console.log(this.isArrayCreated)
  }

  ngOnInit() {

  }

  toDictionary() {
    this.router.navigate(['dictionary'])
  }

  remove() {
    this.myWordService.remove();

  }

  removeItem(item) {
    JSON.parse(localStorage.getItem('array'))
    console.log(this.array)

    let reset = JSON.parse(localStorage.getItem('myWords'))
    reset = []
    localStorage.setItem('myWords', JSON.stringify(reset))

    const index: number = this.array.indexOf(item);
    if (index !== -1) {
      this.array.splice(index, 1)
    }

    this.arrayiki = this.array
    if (this.array.length === 0||null)
      this.isArrayCreated = false

      console.log(this.isArrayCreated)
    localStorage.setItem('array', JSON.stringify(this.arrayiki))

  }

}

