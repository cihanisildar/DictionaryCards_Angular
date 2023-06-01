import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { MyWords, Words } from '../interface/model';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from './alertify.service';
import { Resolve } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  addedWords = []
  addedMeanings = []
  data: any = [];
  definition: any = [];
  words: Words[];
  myWords: MyWords = {

    name: '',
    meaning: ''

  };
  array: any[] = [];
  theNounDefinition1: string
  theNounDefinition2: string

  theVerbDefinition1: string
  theVerbDefinition2: string

  err: HttpErrorResponse
  isError: boolean;
  isAddable: boolean = false
  isInput: boolean = false
  noun: string
  verb: string

  isEmpty: boolean

  value1: string


  isAdded: boolean = false

  constructor(private http: HttpClient, private alertify: AlertifyService) {

  }

  @ViewChild('word') word: ElementRef | undefined;

  getWord(word: string): Observable<Words> {
    return this.http.get<Words>(this.apiUrl + word);
  }

  onGetWord() {

     this.getWord(this.value1)
      .subscribe({
        next: (data) => {

          this.data = data;
          this.words = this.data;
          this.definition = this.words[0].meanings

          console.log(this.words)

          this.isError=false;
          if (this.words[0]) {
            if (this.words[0].meanings[0]) {
              if (this.words[0].meanings[0].partOfSpeech === 'noun') {
                this.noun = this.words[0].meanings[0].partOfSpeech
                if (this.definition[0]) {
                  if (this.definition[0].definitions[0])
                    this.theNounDefinition1 = this.definition[0].definitions[0].definition
                  if (this.definition[0].definitions[1])
                    this.theNounDefinition2 = this.definition[0].definitions[1].definition
                }
              }

              else if (this.words[0].meanings[0].partOfSpeech === 'verb') {
                this.verb = this.words[0].meanings[0].partOfSpeech
                if (this.definition[0]) {
                  if (this.definition[0].definitions[0])
                    this.theVerbDefinition1 = this.definition[0].definitions[0].definition
                  if (this.definition[0].definitions[1])
                    this.theVerbDefinition2 = this.definition[0].definitions[1].definition
                }
              }

            }
          }

          if (this.words[0]) {
            if (this.words[0].meanings[1]) {
              if (this.words[0].meanings[1].partOfSpeech === 'noun') {
                this.noun = this.words[0].meanings[1].partOfSpeech
                if (this.definition[1]) {
                  if (this.definition[1].definitions[0])
                    this.theNounDefinition1 = this.definition[1].definitions[0].definition
                  if (this.definition[1].definitions[1])
                    this.theNounDefinition2 = this.definition[1].definitions[1].definition
                }
              }

              else if (this.words[0].meanings[1].partOfSpeech === 'verb') {
                this.verb = this.words[0].meanings[1].partOfSpeech
                if (this.definition[1]) {
                  if (this.definition[1].definitions[0])
                    this.theVerbDefinition1 = this.definition[1].definitions[0].definition
                  if (this.definition[1].definitions[1])
                    this.theVerbDefinition2 = this.definition[1].definitions[1].definition
                }
              }

            }
          }


          if (this.words[1]) {
            if (this.words[1].meanings[0]) {
              if (this.words[1].meanings[0].partOfSpeech === 'noun') {
                this.noun = this.words[1].meanings[0].partOfSpeech
                if (this.definition[2]) {
                  if (this.definition[2].definitions[0])
                    this.theNounDefinition1 = this.definition[2].definitions[0].definition
                  if (this.definition[2].definitions[1])
                    this.theNounDefinition2 = this.definition[2].definitions[1].definition
                }
              }

              else if (this.words[1].meanings[0].partOfSpeech === 'verb') {
                this.verb = this.words[1].meanings[0].partOfSpeech
                if (this.definition[2]) {
                  if (this.definition[2].definitions[0])
                    this.theVerbDefinition1 = this.definition[2].definitions[0].definition
                  if (this.definition[2].definitions[1])
                    this.theVerbDefinition2 = this.definition[2].definitions[1].definition
                }
              }

            }
          }

          if (this.words[1]) {
            if (this.words[1].meanings[1]) {
              if (this.words[1].meanings[1].partOfSpeech === 'noun') {
                this.noun = this.words[1].meanings[1].partOfSpeech
                if (this.definition[3]) {
                  if (this.definition[3].definitions[0])
                    this.theNounDefinition1 = this.definition[3].definitions[0].definition
                  if (this.definition[3].definitions[1])
                    this.theNounDefinition2 = this.definition[3].definitions[1].definition
                }
              }

              else if (this.words[1].meanings[1].partOfSpeech === 'verb') {
                this.verb = this.words[1].meanings[1].partOfSpeech
                if (this.definition[3]) {
                  if (this.definition[3].definitions[0])
                    this.theVerbDefinition1 = this.definition[3].definitions[0].definition
                  if (this.definition[3].definitions[1])
                    this.theVerbDefinition2 = this.definition[3].definitions[1].definition
                }
              }

            }
          }
          this.isAddable = true
          this.isError = false
        },
        error: (err) => {
          
          this.alertify.error('We could not found the word you are looking for!');
          this.isError=true;

          console.log(err)
        },
        //works if there is no error
        complete: () => {
          
        }

      })

  }

  refresh() {

    this.noun = ''
    this.verb = ''
    this.theNounDefinition1 = ''
    this.theNounDefinition2 = ''
    this.theVerbDefinition1 = ''
    this.theVerbDefinition2 = ''

  }

  ngOnInit(){

  }

}
