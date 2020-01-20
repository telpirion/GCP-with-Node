import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface TranslationRequest {
    sourceLang: string;
    targetLang: string;
    text: string;
}

export interface TranslationResult {
    text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  translationApiUrl: string = 'api/translation';

  constructor(private http: HttpClient) { }

  getTranslation(request: TranslationRequest): Observable<TranslationResult> {
    return this.http.post<TranslationResult>(this.translationApiUrl, request);
  }
}
