# Building an App Engine with Node.js

Looking at the [product marketing page](https://cloud.google.com/appengine/),
App Engine is a "fully managed serverless platform."

Which means what, exactly?

I'd like to equate App Engine to a VM instance, but that's probably not
quite correct. Rather, I think that App Engine is more like an environment
running in the cloud. (Obviously, this environment runs on a Google Compute Engine instance, aka a VM.) This environment has a slew of services that I can
connect to from my app *without having to do all the integration work myself*.

That last bit is the key part, so it's worth repeating: the App Engine
environment comes with a bunch of APIs built-in so that I don't have to build
them myself. I can connect to databases, use storage, authenticate my users,
and so much more.

## Pick an App Engine Environment

Of course, there are some steps that I must complete before I can write code.

First, I needed to decide between the
[Standard or Flexible version of App Engine](https://cloud.google.com/appengine/docs/flexible/go/flexible-for-standard-users#similarities_and_key_differences).
As I understand it, the Standard environment is available on an "Always Free
Tier" of usage, which is the right price for me.

## Set the active GCP project

One step that can trip new GCP developers up: before I can begin development,
I must set my GCP project as active in my development environment. In
other words, to make use of the Cloud SDK in my environment, I have to
make sure that the SDK targets my current GCP project.

To do this, I run the following command:

```
gcloud config set project MY_PROJECT_ID
```

(If you're doing this yourself, you'll want to replace `MY_PROJECT_ID` with
your GCP project ID.)

With all this done, I'm now ready to rock!

## Initialize my App Engine app

With all the decisions made and environment set, I can begin building the
App Engine app. (I'm using
[this quickstart](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart)
as a reference.)

To create my App Engine app, I run this command:

```
gcloud app create --project=MY_PROJECT_ID
```

When I run this command, the gcloud tool asks me to select a region. I believe
this is the geographic region where the Google Compute Engine instance that
hosts my app actually resides. Since I'm located on the West Coast, I decide
to use `us-west2`.

## Write the code

The
[quickstart](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart#download_the_sample_code)
recommends that I download a GitHub repo for the next couple of steps, but
I'd prefer to do these steps myself.

(You can see my code in the [project](../project) folder.)

My app needs to have three files to work: an `app.yaml` file, an `app.js`
file, and a `package.json` file.

First, I created the [`app.yaml`](../project/app.yaml) file. This configures
the App Engine environment.

Next, I added the code for the app itself, in the
[`app.js` file](../project/app.js). I should note that this project uses
[Express](https://expressjs.com/) to define the web app.

Finally, I created the [`package.json`](../project/package.json) file
that defines all of my Node.js dependencies.

Now, to run the app! I use the following commands to run this app on
my development environment. Note that I ran all of these commands from the
`project/` folder.

```
npm install
npm start
```

I browse to http://localhost:8080/hello and see "Hello, world!" Success!

## Deploy my app

So far, I haven't done anything more than run my Express.js web app locally.
Now I want to see what happens when I deploy my app to the cloud.

To deploy my app, I need only run a couple of commands:

```
gcloud app deploy

# Wait a bit ...

gcloud app browse

```

I waited a few moments and ... success! I see "Hello, world!" displayed from an
*.appspot.com URL.

## Next

Now that I have my simple App Engine app up and running, I want to start
expanding it a bit more. I love working with Typescript and Angular,
[so I guess I'll add Angular to my app](angular.md).