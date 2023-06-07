# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [me](https://github.com/karvok) as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @karvok/lotide`

**Require it:**

`const _ = require('@karvok/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Asserts if two arrays are equal
* `assertEqual(actual, expected)`: Asserts if two values are equal
* `assertObjectsEqual(object1, object2)`: Asserts if two objects are equal
* `countLetters(string)`: Returns the count of each character (excluding spaces) in a string
* `countOnly(allItems, itemsToCount)`: Returns the count of specified items in an array
* `eqArrays(array1, array2)`: Returns true if two arrays are equal
* `eqObjects(object1, object2)`: Returns true if two arrays are equal
* `findKey(object, callback)`: Returns the first key that matches the callback value
* `findKeyByValue(object, value)`: Returns the first key that contains the specified value
* `flatten(arrayWithNestedArrays)`: Returns a single-level array when given an array with nested arrays
* `head(array)`: Returns the first element of an array
* `letterPositions(string)`: Returns the index of each letter in a string
* `map(array, callback)`: Returns a new array with the results of applying the callback function to the initial array
* `middle(array)`: Returns the middle elements(s) of an array
* `tail(array)`: Returns all elements of the array that come after the first element
* `takeUntil(array, callback)`: Returns all the elements of an array up until (and not including) the callback value
* `without(source, itemsToRemove)`: Returns a new array with the specified elements removed from the initial array