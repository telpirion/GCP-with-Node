import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

export interface Language {
    value: string;
    displayName: string;
}


@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  languages: Language[] = [
    { value: 'en-US', displayName: 'English (US)' },
    { value: 'fr-FR', displayName: 'French (France)' }
  ];
  result: string = 'No result';
  sourceLang: string = '';
  targetLang: string = '';
  translationForm: FormGroup;
  translationText: string = '';

  constructor() { }

  ngOnInit() {
    this.translationForm = new FormGroup({
        sourceLang: new FormControl(''),
        targetLang: new FormControl(''),
        translationText: new FormControl(''),
      });
  }

  updateOutput() {
    console.log(this.translationForm.value);
    const translationFormValue: any = this.translationForm.value;
    this.result = `Source language: ${translationFormValue.sourceLang};`;
    this.result += `Target language: ${translationFormValue.targetLang};`;
    this.result += `Text to translate: "${translationFormValue.translationText}";`;
  }

}
