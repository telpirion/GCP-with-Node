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

