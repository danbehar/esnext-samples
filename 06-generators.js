// http://www.2ality.com/2015/03/es6-generators.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

// https://github.com/lukehoban/ecmascript-asyncawait

function *generatorFunction() {
    console.log('a');
    yield 'yieldingthis';

    console.log('b');
    yield 'nowyieldingthis';

    console.log('c');
    yield 'stillnowyieldingthis';
    return 'endvalue';
}

let generatorObject = generatorFunction();

console.log('generator first result: ',  generatorObject.next());
console.log('generator second result: ', generatorObject.next());
console.log('generator third result: ', generatorObject.next());
console.log('generator fourth result: ', generatorObject.next());
console.log('generator fifth result: ', generatorObject.next());