# TFLphy, a TFL + Giphy API Project

![](https://media.giphy.com/media/4SAw7TBKJPX3y/giphy.gif)
###### Which way is it going?

## Introduction

Like many other groups, we wanted to use the Giphy API for the fun possibilities. But what to pair it with?

Being Londoners, we all have a (morbid?) fascination with TfL and all its quirks. Even though FAC's recommended API list said that the documentation could be quite dense, we figured we'd do some research to see if it would be straightforward enough for us to work with.

We researched the Giphy and TfL APIs and found that neither:

* had issues with CORS requests
* seemed to have issues with rate limits
* required API keys, though it was easy to sign up for them if we needed them
* needed oAuth
* lacked documentation

![](https://media.giphy.com/media/kGZ4jJguXT5C0/giphy.gif)
###### Ready to go! Yaaaaassss!

Additionally, in looking at the intial data we received back from the APIs, we immediately saw the data we would need for our web app, and so didn't think that we'd need to dig into the docs too deeply.

With this initial research out of the way, we began planning our user journey and software architecture.

## User Journey

We wanted our user to be able to select the tube line they wanted to check the status of, preferably from a predefined list (so that we didn't need to worry about misspellings or other inputs).

Then once the tube line was selected, we'd make an API call to TfL to check on the status of the line. This would be fed back into the DOM to tell the user what the status was.

![](https://media.giphy.com/media/5xtDarEbygs3Pu7p3jO/giphy.gif)
###### Pictured: an API call

Then using the status we received back from the TfL API, we wanted to make an API call to Giphy to search for a gif that would capture the sentiment of tube line statuses like "Good service" or "Part suspended".

This meant that we'd need to construct software that received its response from the TfL API before interacting with the Giphy API.

## Software Architecting aka That Whiteboard Thing Real Devs Do

Our first iteration of the software architecture, we only planned for one Javascript file. We knew we'd need an event listener on the submit button to take our user's input (the tube line chosen from the dropdown) and feed it into our API request.

It was pretty light on detail, and it didn't really give us any ideas on how to implement our 'waterfall' of functions. Mostly it was a visual representation of our user journey and the general journey our data would go on.

## Writing the Code

Spoiler alert: it didn't go so well.

We tried pair programming at first, with one pair focusing on the functions and the other pair creating the HTML skeleton. Then eventually the entire group ended up working on the API functions together.

With all our brains focused on the same problem, we were making progress, but not enough.

## It's OK to Chase Waterfalls, but Not Variables

![](https://media.giphy.com/media/gmxLyCyh6xrR6/giphy.gif)
###### Our level of coolness when writing callbacks: not quite this

You know how you think you're supposed to be doing one thing but apparently you're supposed to be doing something completely different? 

Yeah.

We spent a lot of time trying to grab the data object we got back from TfL and assign the props we needed to a variable to use outside our functions.

But try as we might, we could `console.log` what we needed but couldn't pull it out of that 🤬🤬🤬🤬🤬 function.

Enter: **MICHAEL**.

### 🚨🚨🚨PARADIGM SHIFT🚨🚨🚨

![](https://media.giphy.com/media/wHm63F7wKWINy/giphy.gif)
###### 🗝️🗝️🗝️🗝️🗝️🗝️

It's nearly impossible to assign variables coming out of asynchronous functions - it's much easier for your coding and mental health to do what you want with the data within the functions.

![](https://ih1.redbubble.net/image.384384781.0615/ap,550x550,12x16,1,transparent,t.png)
###### Why can't we pull this data out of our functions

Thanks Michael!

With this new information, the last bits of the puzzle fell into place and we were able to finish the majority of our functionality by mid-afternoon on Wednesday.

![](https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif)
###### It was mostly Eve - pictured, us watching Eve boss our logic functionality

## Design and Further Tinkering

We designed our app with large fonts and plenty of negative space so that it had balance, and used multiples of 8 in our margins, padding, and other elements to keep things harmonious and pleasing to the eye.

We were originally going to have a white background and elements (such as the submit button and the logo) styled to 'TfL blue'. But with some extra time on our hands, we tied in the styling with our functionality. Now these elements, plus the background color, update according to the tube line the user selects.

At first the gifs we returned were from hard-coded search terms in an object, and then always returning the first gif we received from those search terms. However, with some further intense work, we were able to make a random gif return each time the submit button was pressed, rather than the same one over and over.

Even though the design was balanced and comfortable on desktop and mobile as it was, we added a media query for mobile just to really hone in on that style and make sure it looked great on mobile phones.

## Tests

...we wrote some 😬

![](https://media.giphy.com/media/ynaCWB9soHk1a/giphy.gif)
###### Soz

Because the XMLHttpRequest happens in the browser, when we tried to run tests to see what we got back, the tests were failing. Then we got embroiled with figuring out our functions and... yeah.

## SHOW IT TO ME

I'm sure you're now quivering with

![](https://media.giphy.com/media/fV7xZPk6aeiUU/giphy.gif)

...so **[click here](https://fac-14.github.io/Week3TakingAIME/)** to see the site!