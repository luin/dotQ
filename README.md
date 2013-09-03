# dotQ
Yet another [Q](https://github.com/kriskowal/q).

## Introduce
The following code shows a pretty common case of deeply nested callbacks in JavaScript. It doesn't take a genius to figure out that these nested callbacks will eventually become a bit of a headache:

	step1(function (value1) {
	  step2(value1, function(value2) {
	    step3(value2, function(value3) {
	      step4(value3, function(value4) {
	        // Do something with value4
	      });
	    });
	  });
	});

With the dotQ library, you can flatten the pyramid.

	require('dotq');

	step1.promise()
	  .then(function(value1) {
	    return step2.promise(value1);
	  })
	  .then(function(value2) {
	    return step3.promise(value2);
	  })
	  .then(function(value3) {
	    return step4.promise(value3);
	  })
	  .then(function(value4) {
	    // Do something with value4
	  });

## Install
    npm install dotq

## Difference between dotQ and Q
dotQ is based on Q. dotQ extends the `Function` object with a `promise` method in order to convert the Node.js style callbacks(`function(err, result)`) into Q Promises.

What's more, the style of dotQ works better with the express-promise library.

## Shortcuts

### map / reduce / filter / some / every
dotQ also extends the Q Promise with some useful methods of Array object. For example:

	function anAsyncFunction(number, callback) {
	  callback(null, [number, number + 1, number + 2]);
	}

	anAsyncFunction.promise(3)
	  .map(function(n) {
	    return n + 10;
	  })
	  .then(function(result) {
	    console.log(result); // [ 13, 14, 15 ]
	  });


## How to use
In node.js, Each file loaded shares the same primordial objects like Object, Array, etc,
so you can just require dotQ once in your initialization, after which you can use dotQ everywhere.

## OMG IT EXTENDS FUNCTION???!?!@
https://github.com/visionmedia/should.js/#omg-it-extends-object

http://sugarjs.com/native

## License
The MIT License (MIT)

Copyright (c) 2013 Zihua Li

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
