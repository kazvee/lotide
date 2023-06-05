const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Code
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["One"]), "One");
assertEqual(head([]), undefined);