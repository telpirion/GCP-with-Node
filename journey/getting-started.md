# Getting started

Time to get up and running! Before I can begin writing code, I need
to create a new GCP project and prepare my development environment.

## Create a new project

To create a project, I did the following:

 1. Go to the [GCP console](https://console.cloud.google.com).
 1. At the top of the screen, open the project selector by clicking
    **Select a project > New Project**.
 1. On the **New Project** screen, give the project a name. *Pro tip*:
    Pick something memorable and unique. This saves you some time and headaches
    further on down the road.
 1. Click *Create*.

For more details, take a look at the
[official documentation](https://cloud.google.com/nodejs/getting-started/#before-you-begin).

## Download the Cloud SDK

I'm going to build my app locally, so I need to download the
[Cloud SDK to my development environment](https://cloud.google.com/nodejs/docs/setup#installing_the_cloud_sdk).

The Cloud SDK provides a slew of handy tools for me to use during development.
It allows me to manage my resources, run my app locally, assign permissions
to resources, move things to and from my storage, and so much more.

### Cloud Shell

Another option I have here is
[Cloud Shell](https://cloud.google.com/shell/docs/).
Cloud Shell provides me with a simple VM that is fully provisioned with the
Cloud SDK and all of the tools--`node`, `npm`--that I need for development. I'm
going to stick with my local development environment for now, but it's good
to know that this option exists for me.

## Prepare my development environment

Although I'm already set up for Node.js development, I took a look at the
[steps recommended by Google](https://cloud.google.com/nodejs/docs/setup#objectives).
At this point, I updated all of my tools to make sure that I have the most
recent version.

The tools that I'm using:

 *  Hardware: MacBook Pro 15", macOS 10.15.1
 *  Cloud SDK version 228.0.0
 *  Node Version Manager (`nvm`) version 0.35.2
 *  Node.js version 13.5.0
 *  Node Package Manager (`npm`) version 6.13.4

To update the Cloud SDK, I ran `gcloud components update`. The update took
less than 3 minutes.

### Update Node.js tools

Sadly, updating Node and NPM took a bit longer. I discovered that I didn't have
NVM installed, so I had to take care of that first.

I used
[these instructions](http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/)
to help me update my Node.js development environment.

```
brew update
# Wait a while ...

brew install nvm
# Errored out, ugh

brew cleanup

# Second try's the charm?
brew install nvm

# Need to add NVM to my bash profile ...
mkdir ~/.nvm
nano ~/.bash_profile

# Made some edits ... see previous link for details

# Restarted bash ...
nvm install 13.5.0

npm install npm@latest -g
```

Side note: is it me, or is managing your build tool and package manager
versions always a buzz kill? I suppose that's another point in favor of using
Cloud Shell.

## Next

With my development environment ready, I can now write some code! The first
GCP product that I'm going to tackle is
[App Engine](app-engine.md).
