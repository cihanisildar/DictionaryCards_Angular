import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { faL, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { MyWords, Words } from 'src/app/interface/model';
import { Meaning } from 'src/app/interface/model';
import { BehaviorSubject, Observable, empty, throwError } from 'rxjs';
import { Definition } from 'src/app/interface/model';
import { style } from '@angular/animations';
import { NgClass } from '@angular/common';
import { MyWordsService } from 'src/app/services/my-words.service';
import { MyWordsComponent } from '../my-words/my-words.component';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';



@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent {

  @ViewChild('word') word: ElementRef | undefined;

  shuffleIcon = faShuffle
  searchIcon = faSearchengin
  arrowIcon = faArrowAltCircleRight

  theNounDefinition1: string = this.dictionaryService.theNounDefinition1
  theNounDefinition2: string = this.dictionaryService.theNounDefinition2

  theVerbDefinition1: string = this.dictionaryService.theVerbDefinition1
  theVerbDefinition2: string = this.dictionaryService.theVerbDefinition2

  noun: string = this.dictionaryService.noun
  verb: string = this.dictionaryService.verb
  isError: boolean = this.dictionaryService.isError
  isEmpty: boolean = this.dictionaryService.isEmpty
  isAdded: boolean = this.dictionaryService.isAdded
  isInput: boolean = this.dictionaryService.isInput
  isAddable = this.dictionaryService.isAddable
  isLoaded: boolean;

  data: any[] = this.dictionaryService.data
  definition: any[] = this.dictionaryService.definition
  myWords: MyWords = this.dictionaryService.myWords
  array: any[] = this.dictionaryService.array
  arrayiki = this.myWordsService.arrayiki

  @ViewChild(MyWordsComponent) div: MyWordsComponent;
  constructor(private http: HttpClient, public dictionaryService: DictionaryService,
    private myWordsService: MyWordsService, private renderer: Renderer2, private router: Router,
    private alertify: AlertifyService) {

  }

  ngOnInit() {

  }

  //getting input value for api 
  getValue() {

    let value = this.word?.nativeElement.value
    this.dictionaryService.value1 = value


  }

  onGetWord() {

    this.dictionaryService.onGetWord()
    this.dictionaryService.words
    console.log(this.isError)
    setTimeout(() => {
      this.isLoaded = true
    }, 200);

    console.log(this.isLoaded)
  }

  refresh() {
    this.dictionaryService.refresh()

  }

  addItem() {
    console.log(this.isError)
    JSON.parse(localStorage.getItem('array'))
    console.log(this.array)
    console.log(this.arrayiki)

    let reset = JSON.parse(localStorage.getItem('myWords'))
    reset = []
    localStorage.setItem('myWords', JSON.stringify(reset))

    this.myWords.name = (this.word?.nativeElement.value)

    if (this.dictionaryService.theNounDefinition1 === null || 0 || undefined || []) {
      this.myWords.meaning = this.dictionaryService.theVerbDefinition1
    }
    else {
      this.myWords.meaning = this.dictionaryService.theNounDefinition1
    }
    console.log(this.myWords.meaning)
    localStorage.setItem("myWords", JSON.stringify(this.myWords))
    let result: [] = JSON.parse(localStorage.getItem('myWords'))


    if (this.array.length !== 0 || null) {
      this.array.every((item) => {
        if (item.name === this.myWords.name) {
          this.alertify.warning('You have already added this word into your collection');
          let x = this.array.indexOf(item)
          this.array.splice(x, 1)
        }
      })

    }
    else this.alertify.success('Word succesfully added');

    this.array.push(result);
    this.arrayiki = this.array
    localStorage.setItem('array', JSON.stringify(this.array))

  }

  inputAdded() {
    console.log(this.isError)
    this.isInput = true
  }
}

