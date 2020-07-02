'use strict';

var toPrint = "print me";

function print(out) {
    var stringToPrint = out;
    console.log(stringToPrint);
    console.log(toPrint);
}

print('Hello');