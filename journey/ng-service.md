# Creating an Angular service

I ran `ng generate service` to create the code for the service. When
prompted, I gave it the name "Translation".

The Angular CLI created a new file for me,
[`translation.service.ts`](../project/ng-src/src/app/translation.service.ts),
and automatically adds it to my
[`app.module.ts`](../project/ng-src/src/app/app.module.ts)
script.

## Adding HttpClient module

The `TranslationService` is pretty bare. I needed to add a reference to the
[`HttpClient`](https://angular.io/guide/http) module before it can communicate
to the server. I then injected an instance of `HttpClient` in the constructor
for the service.

```
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

...

export class TranslationService {

  constructor(private http: HttpClient) { }

}
```

## Defining request and response types

To make sure that my code benefits from the typing in TypeScript,
I defined an interface for both the request that I'm sending to the server
and the response that I get back. The `translation.service.ts` file contains
the definition for both.

```
export interface TranslationRequest {
    sourceLang: string;
    targetLang: string;
    text: string;
}

export interface TranslationResult {
    text: string;
}
```

## Sending the POST request to the server

With both the response and the request types defined, I can write the
code that sends the response to the server. I create a new method,
`getTranslation()`, that sends the `POST` request to my server.


```
export class TranslationService {

  translationApiUrl: string = 'api/translation';

  ...

  getTranslation(request: TranslationRequest): Observable<TranslationResult> {
    return this.http.post<TranslationResult>(this.translationApiUrl, request);
  }
}
```

## Update TranslationComponent to use TranslationService

Once the `TranslationService` is created, I can add it to my
`TranslationComponent` in
[translation.component.ts](../project/ng-src/src/app/translation/translation.component.ts). First I need to import the `TranslationService` module and
its exposed types.


```
import { TranslationRequest, TranslationResult, TranslationService } from '../translation.service'
```

Next I change the `TranslationComponent` constructor so that it injects
`TranslationService`.

```
constructor(private translationService: TranslationService) { }
```

I then update the `TranslationComponent.updateOutput()` method so that
it calls the `TranslationService` and prints the results.

```
  updateOutput() {
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
```