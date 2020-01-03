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
[`ng-src`](../project/ng-src).

### Client and server code in same folder

Naively, I'd like to have the Angular project share a package.json
file with my server-side code. That would reduce the number of places
where I need track dependencies, to say nothing of the amount of duplicate
libraries between my two `node_modules` folders.

Most of the MEAN (MongoDB, Express.js, Angular, Node.js) tutorials
that I've read do one of two things to address this:

  * Start by creating the Angular app first, using `ng new`, and then
    add the server-side code.
  * Add a new Angular sub-project within the larger Node.js project.

However, it looks like you're supposed to use an empty directory when you
create a new Angular app, according to this
[GitHub issue](https://github.com/angular/angular-cli/issues/15440).

It sounds like the intended best practice is to keep the Angular code
separate from the rest of my Node.js project. Thus, I'll just have to live with
the Angular project within my project.

## Run the Angular app

Now that I have my simple Angular app, I can fire it up!

I run the following command from the root of the Angular project to see what
I've got.

```
ng serve
```

I then navigate in my browser to `http://localhost:4200` and see the boilerplate
code that my Angular project starts with.

## Connect the Angular app to the server-side code

Now that I have the Angular app started, I need to configure where Angular
builds the app so that my Express.js code can serve it. To do this, I need to
do a couple of things:

 1. Change the build output to a folder within the structure of my Express.js
    project.
 1. Switch the app listener code so that it sends the Angular app when the
    user navigates to '/'.

### Change the build output folder

The first part is pretty easy. I changed the `outputPath` field in my
[`angular.json` file](../project/ng-src/angular.json) so that it builds my app
into a folder in my larger project.

```
{
  ...
  "projects": {
    "ng-src": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            "outputPath": "../public",
            ...
          }
        }
      }
    }
  }
}
```

Just to make sure that this does what I think it does, I built the Angular app
using `ng build`. Note that this action needs to happen from the root of the
Angular project.

Lo and behold, a `public/` folder appears in my project.

### Serve the Angular app

This next step requires a couple of different changes to my
[`app.js` file](project/app.js).

First, I import the `path` library to my app.js file:

```
const path = require('path');
```

Next, I set the `public/` folder as a group of statically-served files.

```
app.use(express.static(path.join(__dirname, 'public')));
```

Finally, I change the method that responds to requests to '/' so that it
returns the `index.html` file for my Angular app.

```
app.get('/', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public/index.html'))
    .end();
});
```

To save myself a little bit of trouble, I also modify the `npm start`
build script in my [package.json](project/package.json) file.

```
{
  ...
  "scripts": {
    "local": "cd ng-src; ng build; cd ..; node app.js",
    ...
  },
}
```

There's probably a cleaner way to do this, but this suffices for now. I run the
project, navigate to `http://localhost:8080`, and see the Angular app being
being served.

Note: You might be tempted to change the `start` build rule here, but
*don't do it*. App Engine uses the `start` build rule to create the deployed
version of your app.

## Re-deploy the app

First, I add the Angular source directory to my
[`.gcloudignore`](project/.gcloudignore) file. The `gcloud` tool skips over all
of the files listed in the .gcloudignore file during deployment.

Now, with the Angular app building as I want it to, it's time to deploy the
app to App Engine. I run the following command to redeploy the app to
App Engine:

```
gcloud app deploy
```

After deployed the app, I run `gcloud app browse` and see the Angular version
of my app deployed.

