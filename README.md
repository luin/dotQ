# dotQ
另一个Q

## 用法

当异步嵌套过多时，常会遇到这种情况：

	step1(function (value1) {
	  step2(value1, function(value2) {
	    step3(value2, function(value3) {
	      step4(value3, function(value4) {
	        // Do something with value4
	      });
	    });
	  });
	});

使用 dotQ 可以显著减少嵌套：

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

## 与 Q 的区别
dotQ 基于 Q。dotQ 通过为 `Function.prototype` 加入 `promise` 方法来实现将node.js风格的回调函数转换为 Q 的 Promise。而且 dotQ 扩展了 Q 的 Promise（见后文）。

此外 dotQ 的风格更加适合 express-promise 模块。

## 扩展内容

### map / reduce / filter / some / every
dotQ 为 Promise 增加了一些常用的 Array 的方法。

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
