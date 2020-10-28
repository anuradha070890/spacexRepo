# spacexRepo
spacex launch program
#  spacex launch program application demo

## Purpose

The idea is to **demonstrate the missions details of each of the spacex launch program**. The sample application tries to show best practices when it comes to: folders structure, using modules, communicating with backend services. 

## Stack

* Backend: [Node.js](http://nodejs.org/)
* Frontend [Angular (version 8)](http://www.angularjs.org/) on the client
* External Css file 
* Http module for Services 
* Angular router for Routing mechanism 

### Build

It is a complete project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:
* test written using [Jasmine](http://jasmine.github.io/) syntax
* test are executed by [Karma Test Runner](http://karma-runner.github.io/0.8/index.html) (integrated with the Grunt.js build)
* build supporting JS, CSS and AngularJS templates minification

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)
* Install Grunt-CLI and Karma as global npm modules:

    ```
    npm install -g grunt-cli karma
    ```

(Note that you may need to uninstall grunt 0.3 globally before installing grunt-cli)


### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

https://github.com/anuradha070890/spacexRepo.git

cd mySpaceXLaunchApp

### App Server

create a basic server.js using nodejs and express and put the file on the root of the server

  
  
 ## Building
### Build the client app

  cd mySpaceXLaunchApp
  ng build 
  
  
## Running

cd mySpaceXLaunchApp
ng serve

## Browser Support
We only regularly test against Chrome 29 and occasionally against Firefox and Internet Explorer.
The application should run on most modern browsers that are supported by the AngularJS framework.
Obviously, if you chose to base your application on this one, then you should ensure you do your own
testing against browsers that you need to support.

## Development

### Folders structure
At the top level, The server folder contains a very basic Express based webserver that delivers and supports the application.
Within the angular app folder you have the following structure:
* `node_modules` contains build tasks for Grunt along with other, user-installed, Node packages
* `dist` contains build results
* `src` contains application's sources
* `vendor` contains external dependencies for the application
