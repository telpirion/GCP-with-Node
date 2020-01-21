import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { TranslationRequest, TranslationResult, TranslationService } from '../translation.service'

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
    { value: 'fr-FR', displayName: 'French (France)' },
    { value: 'es-ES', displayName: 'Spanish (Spain)'},
    { value: 'de-DE', displayName: 'German'}
  ];
  result: string = 'No result';
  sourceLang: string = '';
  targetLang: string = '';
  translationForm: FormGroup;
  translationText: string = '';

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationForm = new FormGroup({
        sourceLang: new FormControl(''),
        targetLang: new FormControl(''),
        translationText: new FormControl(''),
      });
  }

  updateOutput() {
    // FormGroup.value property allows access to values of the fields
    // in the form.
    const translationFormValue: any = this.translationForm.value;

    // Create the request.
    const request = {
      sourceLang: translationFormValue.sourceLang,
      targetLang: translationFormValue.targetLang,
      text: translationFormValue.translationText
    };

    // Send the request and read the result
    this.translationService.getTranslation(request)
      .subscribe((translation: TranslationResult) => {
        this.result = translation.text;
      });
  }

}
