# SuperheroAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)



## Overview
Created a superhero search app to search for favorite Marvel Superhero. Implemented a few pages of extra information to view Marvel comics and series. 

### The challenge

Users should be able to:

- Search for a superhero.
- Toggle buttons to display comics/series the hero is in.
- Route to Comics & Series pages that displays the first 100 items. 

### Screenshot

![](./screenshot.gif)


### Links

- Solution URL: [Add solution URL here](https://github.com/flo1244/superhero-marvel-api-angular)
- Live Site URL: [Add live site URL here](https://flo1244.github.io/superhero-marvel-api-angular/superhero-marvel-api-angular/)

## My process
- I created the project in the Angular CLI. 
- Created multiple components that shows either all characters, comics, or series.
  - All Characters Component holds are functions to search and display superhero data for a specific hero.
  - Comics Component holds are function for displaying the first 100 comics in the API array.
  - Series Component holds are function for displaying the first 100 series in the API array.  
- App routing module allows us to route to different pages in the project.
- Hero API Service instanciates our call to the API to fetch data on superheros. 
- Styling and Modals were created using Bootstrap.

### Built with

- HTML
- Bootstrap 4
- [Angular](https://github.com/angular/angular-cli) - Angular framework
- TypeScript


### What I learned
I've learned a lot from using Angular's Framework. It can be quite complex, but endless possibility on creating dynamic content.
I learned how to take use of the CLI to create services, components, etc., but also created them manually. Used observables to send data from
my custom events to other components and make them injectable. Imported built in service class ``HTTPClient`` to be able to communicate with API
service and use ``get()`` method to retrieve our data. In the functions subscribe to the observable instance passing an observer to recieve the
data requesting. 



### Continued development

There are several things I could implement to make this project more dynamic. I would say a few of my top things would be:
- Refractor code to be dynamic or reactive.
- Hide API key and HASH 
- Implement lazy loading and optimization.
- Create a more dynamic search results.
- Implement filtering for comics and series.
- Create a feature to save/fetch data from backend.

### Useful resources

- [Angular](https://angular.io/) - Official Angular Documentation
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - Bootstrap Docs for styling components.
- [Push Angular project to GitHub](https://efficientuser.com/2021/03/04/how-to-deploy-angular-app-on-github-pages-for-free/) - How push and deploy project to GitHub.
