14th of March 2016

#Feed Reader Testing

This is a project done by Unnar Thor Bachmann in the Udacity's front-developing course.

This project involves using Jasmine (http://jasmine.github.io/2.2/introduction.html) for testing the javascript code in js/app.is. The tests themselves are in the file feadreader.js. 

##How to run the webpage.

1. Open the index.html file in the project folder in a web browser to run the website.
2. The results of the testing appears on the bottom of the page.

#My solution

##1.What is the most influential book or blog post you’ve read regarding front-end development?

Solution: The Flexbox manual. I have used flexbox techniques quite a lot. This manual stands out for being readable and 
helpful. 

##2. If you could master one technology this year, what would it be and why?

Answer: Getting better control of using Google Maps to create a webpage. I am a hiker and I really want to develope an application to keep tracks to
share with other people. Like which routes are good to hike in some area

##3. Describe any front-end web application framework (preferably one that you use). How does it work? What are the upsides and downsides?

Answer: I have used Backbone.js to make a small nutrition site. Backbone.js is built on MV* pattern. Using callback functions to link model and view. It has got an API on Firebase so it is really easy to store the model data there. However I am not sure that it is the most appropirate way to use in order to develope the web. Since information about multiple users need to be stored and Backbone does allow that easily in my opinion.

##4. Write a JavaScript function that takes only one argument——another function——and returns a "memoized" version of that function. A "memoized" version of a function caches and returns the results of its call so that when it is called again with the same input, it doesn’t run its computation but instead returns the results from cache. Note that previous results should be retrievable in any order without re-computation.

Answer: 
```
var memoize = function(func) {
  var cache = [];
  var f = function (x){
   for (var i = 0; i < cache.length; i++) {
  	if (cache[i] === x) {
      return x;
  	}
  }
  var val = func(x);
  cache.push(val);
  return val;

  }
  return f;
};

var foo = function (x) {
   console.log("calculating!");
   return x + 5;
}

var memoizedFoo = memoize(foo);

memoizedFoo(5);
// calculating!
// 10

memoizedFoo(5);
// 10 (notice how 'calculating!' is not printed this time)

memoizedFoo(10);
// calculating!
// 15
```

##5. Create a simple webpage that has a cow image in the middle (centered horizontally on the page) and a counter label below it. Add the necessary code so that every time you click the cow image, the counter is incremented by 1. The counter should start with a value of 0.

  Answer:

  ```
  <html>
  <style>
  img {
  	width: 50%;
  }
  .container{
  	width: 100%;
  }
  </style>
  <body>
  <div class="container">
  <center>
  <h1> Cow Clicker </h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Cow_cartoon_04.svg" id="mynd"> </img>
  <h2 id="counter"> Count: 0</h2>
  </center>
  <script>
  var count = 0;
  var ku = document.getElementById('mynd');

  // adding event listener
  ku.addEventListener('click',function() {
      count++;
      // Update the value of count.
      document.getElementById('counter').innerHTML = "Count: " + count + "";
      console.log(count);
  });
  </script>
  </body>
  </html>
  ```
##6. If you were to start your front-end position today, what would be your goals a year from now?

Solution: I would like to master the areas of web developement I have been introduced to here by Udacity. Also learn new Frameworks and learn from other people.
Being a teacher I would like to help teachers and students to interconnect better using webpages.
