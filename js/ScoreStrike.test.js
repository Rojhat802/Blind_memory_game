// Import the functions to be tested and the testing library
const { changeScore, changeStrikes } = require('./my_script');
const { JSDOM } = require('jsdom');
const { expect } = require('@jest/globals');

// Set up a DOM environment using JSDOM
const dom = new JSDOM('<html><body><div id="score"></div><div id="strikes"></div></body></html>');
global.document = dom.window.document;

// Test the changeScore function
test('changeScore should add 10 points to the score', () => {
  // Set the initial score to 0
  global.score = 0;
  
  // Call the function to change the score
  changeScore();
  
  // Check that the score is now 10
  expect(global.score).toBe(10);
});

test('changeScore should update the score displayed on the page', () => {
  // Set the initial score to 0
  global.score = 0;
  
  // Call the function to change the score
  changeScore();
  
  // Check that the score displayed on the page is now 10
  expect(document.getElementById('score').innerHTML).toBe('10');
});

// Test the changeStrikes function
test('changeStrikes should add 1 strike', () => {
  // Set the initial number of strikes to 0
  global.strikes = 0;
  
  // Call the function to change the number of strikes
  changeStrikes();
  
  // Check that there is now 1 strike
  expect(global.strikes).toBe(1);
});

test('changeStrikes should update the number of strikes displayed on the page', () => {
  // Set the initial number of strikes to 0
  global.strikes = 0;
  
  // Call the function to change the number of strikes
  changeStrikes();
  
  // Check that the number of strikes displayed on the page is now 1
  expect(document.getElementById('strikes').innerHTML).toBe('1');
});
