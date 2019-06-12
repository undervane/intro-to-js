# Variables

The first thing we should know when working with Javascript are variables. ***What should you understand when we say variable?*** Let's review in depth this computer science concept.

## A variable stores things

As simple as this, a variable is just an alias you give to something. This makes you easy to later be able to locate that concrete thing, and be able access to the thing itself or to modify it. 

To put into practice, you can declare a variable to store the price of an apple (using an integer)

```js
var applePrice = 2;
```

We can also store the apple's brand name (using a string)

```js
var appleName = 'Deliciously';
```

This way, using this template we could easely use the variables we declared to fulfill the dynamic data.

```js
var promoMessage = 'Buy now our new ' + appleName + ' apple, available right now for just ' + applePrice + '€'
// Text above could be read as 'Buy now our new Deliciously apple, available right now for just 1€'
```
