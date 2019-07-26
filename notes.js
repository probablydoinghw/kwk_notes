Java Script Notes

Tool to check our javascript
- console.log("insert variable here")
Note: user never sees this, only a developers tool

variable: defining an idea or quanitity for the computer to remember

  *camelCase - first word is lower case, first letter of second word is capitalized

  *if you capitalize the first letter of a variable it won't be recognized

Data Types:
1) "Strings": Must be put into quotes, represents text
    var harryStyles = "perfect human being"

2) Numbers: Do NOT have quotes, represents quanitity or amount
    var harryNumber = 1;

    - a string is like a picture, it's just text
    - a number is a quanitity; you can use a number but you can't use a picture of a number
    - can't name variables numbers
  a) < --> greater than or less than. Ex: 8>5
  b) +, -, *, / --> addition, subtraction, multiplication, division
  c) === --> equal to
  d) <= or >= --> less than or equal o and greater than or equal to
  e) % --> remainder ex: 16%3 computer will return 1 because that's the remainder of 16/3

How to Use Number and String Variables

var dogName = "Cricket";
var dogLeash = 1;
var dogBags = 2;
var waterBottles = 1;

var numItems = dogLeash + dogBags + waterBottles;

SUMMARY
1) Broke down our problem into parts (variables)
2) Defined our variables
3) Used our variables to perform a task


INTERPOLATION: integrating numerical values into strings using variables. MUST USE BACKTICKS (`).
-dogBags instead of 1 dog bag

console.log(`Take ${dogName} on a walk! Don't forget to bring ${numItems} items!`)

ARRAYS: a list of strings and/or numbers. Represented using square brackets. The first item is assigned an index of 0.
  var arraySports = ["soccer", "basketball", "football", "discus", "diving"]
  console.log(arraySports[0]) --> "soccer";
  console.log(arraySports[4]) --> "diving";

  arraySports.length --> .length tells computer to print the number of items in an array

  arraySports.push("gymnastics") --> adds an item to the end of an array

  arraySports.pop() --> removes the last item of an array

  jQuery (ELEMENT ACCESSORS): library of shortcuts we download onto our HTML page, Link goes on second to last line of our body, right above the javascript link

  <script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>



  EVENT HANDLERS (EVENT LISTENERS): tells the computer to listen to a certain area (often times a button) for a click. On the click, perform a function (action)

  Define specific area on HTML page using jQuery ($)
  var dareButton = $('.darebutton');

  area       listen for   action
  dareButton.on('click', showDare);

  another example:
  dareButton.on('hover', showDare)

  ADDING ELEMENTS TO THE WEBPAGE:
  1)  Think of user experience? What do we want the user to see/do?
  2)  Create an area or <div> in my HTML page to add the Elements
  3)  Use jQuery -- $('nameofdiv') to tell computer where to look in my HTML page
  4)  Create a function (action) to aadd the items to the HTML <div>
        a) .text --> only adds the words without any HTML formatting.
        b) .append --> adds HTML elements to the HTML file. MUST use BACKTICKS (.append is way better than .text)

        var dareContainer = $('.darecontainer');

        function showDare() {

          // dareContainer.text(arrayDare[2]);
          dareContainer.append(`<h2>${arrayDare[3]}</h2>`);
          dareContainer.append(`<img src="https://images-na.ssl-images-amazon.com/images/I/51w7koDjFsL._SX425_.jpg">`)
        }

CONDITIONALS

1. Define the condition (what do you want to be true?)
2. Determine the action if the user meets the condition
3. Determine the action if the user does NOT meet the condition
4. Conditionals exist in functions (conditonal will not run unless it is in a function)

if (condition) {
  action if user meets the condition
}

else {
  action if user does not meet the condition
}

if (userNumber > 7) {
  container.append(`<img class="imgclass" src="(put source)">`)
}

else {
  container.append(`<p>Sorry, Not Sorry!</p>`)
}



    // var harryNumber = 1;
    // var harryNumbers = "1";
    // - if you say harryNumbe === harryNumbers it will return false
