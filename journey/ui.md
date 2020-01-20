# Designing the user interface

Over time, I plan to build a multi-part web application that interacts with
different parts of GCP.

For the first part of my web app, I want to create a simple translation app,
something that integrates Google Cloud Translate. I just want to
create a simple UI. The UI will allow users to specify a source and target
language, provide simple text, and send a request to my app. My app responds
by sending the translation back.

To build this, I'll create a `TranslationModule` that encapsulates this
part of my app.

## Defining routes

With the routing module added to my app, I can define my routes as I build
out my app. I'm going to start by creating a '/translation' route.

In my [app-routing.module.ts]() file, I add the following code:

```
// ...

import { TranslationComponent } from './translation/translation.component';

const routes: Routes = [
  { path: 'translation', component : TranslationComponent },
];

// ...

```

## Creating the TranslationComponent

Thankfully, the [Angular CLI](https://angular.io/cli/generate) makes the next
step really easy. I run the following command to create the component:

```
ng generate component
```

The tool asks me what I want to name my component during the building process--I
give it the name "Translate." In just a few moments, the tool finishes building
the [Translation module](../project/ng-src/src/app/translation/),
including adding the correct `import` statements to my
[`app.module.ts`](../project/ng-src/src/app/app.module.ts) file.

At this point, I can run my app locally to verify that it works. Since I
haven't made any server-side changes, I can run the app using `ng serve`.

## Adding material to my app

Angular works really well with Material design components. I can import
the components into my app and they look really nice out-of-the-box.

For my translation app design, I really only need the following components:

  * Two drop-downs for the language selectors
  * A textbox for the input
  * A button to send the request to my app
  * A label to display the output

I can probably use a plain old `div` for the label, so I don't need to worry
about that. I do need to import the Material components for a drop-down,
a textbox, and a button.

### Importing Angular Material

From the root of my Angular app, I run `ng add @angular/material`. The
Angular CLI then asks me some configuration questions and then updates my app
I decide on the Purple/Amber theme.

Note: The CLI will ask you if you want HammerJS and animations in your app. Unless you know what you’re doing, yes, you want these in your app. Not including them will cause some of the material components to not work correctly.

## Building the user interface

As mentioned earlier, I'm going to include two drop-downs, a text fields, and
a button in my user interface. Thus, I'm going to import the `MatButtonModule`
`MatInputModule`, and `MatSelectModule` modules into my app.

Of course, I want to be able to access the data in the form fields of my user
interface. To do this, I used
[Angular reactive forms](https://angular.io/guide/reactive-forms). For my
UI, I needed to use the `FormGroup` and `FormControl` classes from the
`ReactiveFormsModule`.

### Adding imports to the app module

I updated the [`app.module.ts`](../project/ng-src/src/app/app.module.ts)
file with the following code to import the modules I need:

```
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  ...,
  imports: [
    ...
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  ...
})

```

### Defining the HTML interface

I created a rather simple UI with a `form` tag that includes the other
form fields. This helps me to access the data from the fields in the form
from a reference to the form itself.

You can see the final version of the HTML interface
[here](../project/ng-src/src/app/translation/translation.component.html).

### Adding the behavior of the interface

In the TypeScript code file for my Translation module, I create a new
instance of the `FormGroup` class and assign it to a variable. The
variable must match the value that I provided for the `[formGroup]`
attribute of the form in `translation.component.html`.

Each of the child controls is created as an instance of the `FormControl`
class. The field name of each control must match the `formControlName`
attribute of each field in the HTML.

Because of how I defined the individual child controls in my form, I can
access their values elsewhere in my `TranslationComponent` class.

```
  languages: Language[] = [
    { value: 'en-US', displayName: 'English (US)' },
    { value: 'fr-FR', displayName: 'French (France)' }
  ];

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
    const translationFormValue: any = this.translationForm.value;
    this.result = `Source language: ${translationFormValue.sourceLang};`;
    this.result += `Target language: ${translationFormValue.targetLang};`;
    this.result += `Text to translate: "${translationFormValue.translationText}";`;
  }
```

## Next

With the UI put together, I can build the
[Angular service that calls my server's REST API method](ng-service.md).