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

### Building the user interface

TODO: Mention Reactive forms
TODO: Show updates to app.module.ts
TODO: Show updates to translation.component.html
TODO: Show updates to translation.component.ts
