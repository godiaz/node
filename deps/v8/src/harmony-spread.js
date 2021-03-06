// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var $spreadArguments;
var $spreadIterable;

(function(global, shared, exports) {

'use strict';

function SpreadArguments() {
  var count = %_ArgumentsLength();
  var args = new InternalArray();

  for (var i = 0; i < count; ++i) {
    var array = %_Arguments(i);
    var length = array.length;
    for (var j = 0; j < length; ++j) {
      args.push(array[j]);
    }
  }

  return args;
}


function SpreadIterable(collection) {
  if (IS_NULL_OR_UNDEFINED(collection)) {
    throw MakeTypeError(kNotIterable, collection);
  }

  var args = new InternalArray();
  for (var value of collection) {
    args.push(value);
  }
  return args;
}

$spreadArguments = SpreadArguments;
$spreadIterable = SpreadIterable;

})
