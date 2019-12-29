# Expanding the app with Angular

As I mentioned previously, I love working with TypeScript and Angular.
The two technologies together have transformed the process for building]
SPA-style apps.

## Create the Angular app

Angular has [fantastatic tooling](https://angular.io/cli), including a simple
command that creates a very basic Angular app. From the [`project`](../project)
folder, I ran the following command:

```
ng new ng-src

```

During the setup process, the CLI tool asks me whether I want to add
Angular routing (yes, please!) and which type of style sheets I prefer
(CSS because I'm old school like that).

This creates a new folder in my `project` folder named
[`ng-src`](../project/ng-src). In an ideal world, I'd like to have the Angular
project share a package.json file with my server-side code. (Doing so would
also reduce the amount of duplicate libraries between my two `node_modules` folders.) Oh well, we can still work with this.

Note: Most of the MEAN (MongoDB, Express.js, Angular, Node.js) tutorials that
I've read do one of two things:

  * Start by creating the Angular app first, using `ng new`, and then
    add the server-side code.
  * Add a new Angular sub-project within the larger Node.js project.

However, itt looks like you're supposed to use an empty directory when you
create a new Angular app, according to this
[GitHub issue](https://github.com/angular/angular-cli/issues/15440).

