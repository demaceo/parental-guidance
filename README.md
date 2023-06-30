# Parental Guidance

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Reflection](#reflection)

## Introduction

### Overview

In wanting to refresh my React Router skills, while also exposing myself to Backend technology, I designed this website for my parents to share links to. Instead of texting links to one another in the family group chat (where they inevitably get lost and forgetten), I designed this user-friendly website as a quick and simple tool to resolve the aforementioned problem from reoccuring.

## Tech Stack 
* React
* React Router
* JavaScript
* HTML
* CSS
* Google Firebase  
* REST API

## Features

*Homepage*

**Main Page**

The homepage (aka 'All Links' Page) displays a list of all the previously shared links as individual 'cards'. Each card is populated by fetching stored data from Google's Firebase.

By double clicking on a card, the link associated with it will be opened in a separate window.

User's can also star any card that they would like to favorite. In doing so, this data will be stored in the user's local storage.


*Add New Link Page*

**Add New Link Page** 

The 'Add New Link' page presents the user with a form where they can fill out and submit their links to. This form consists of a required 'Link' input and an optional 'Dropdown' menu to specify the sender. When a user submits a link, an API call is made to gather the associated metadata within that link (such as the title, description and image). This metadata is then stored in Google's Firebase.

*Favorites Page*

**Favorites Page** 

The 'Favorites' page presents the user with an updated list of any card that they've favorited. Each favorited card has an animated star associated with it. 

By clicking that star again, the favorited card is unfavorited, removed, and the page is reloaded. 


## Reflection

#### Wins

* Refreshing my React Router knowledge
* Utilizing Google's Firebase
* Implementing React context

#### Challanges

* Un/Favoriting animation.

#### Future

* Rename Components and files.
* Add testing.
* Add functionality for removing Card links.
* Remove usage of local storage and instead use Firebase for storing Favorites.
* Refactor code so unfavoriting doesn't rely on a page reload to reflect changes.
* Add Responsive Design - function on a mobile device without stylistic breaks.