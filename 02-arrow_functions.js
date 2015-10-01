// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//() => { console.log('this is a function') }();
//(function(){ console.log('this is equivalent')})();

//let filteredArray = [0, 1, 2, 3, 4, 5].filter((it) => it <=2);
//console.log('filtered array is ' + filteredArray);

var NotAutoBound = function() {
    this.val = 'value';
    console.log('this value is ' + this.val);
    setTimeout(function() {
        console.log('this is a different scope ' + this.val);
    }, 0);
}
//new NotAutoBound();

var Bound = function() {
    this.val = 'value';
    setTimeout(function() {
        console.log('this is manually bound ' + this.val);
    }.bind(this), 0);
}
//new Bound();

var ImplicitBounding = function() {
    this.val = 'value';
    setTimeout(() => { console.log('this has an implicit bounding ' + this.val)}, 0);
}
//new ImplicitBounding();

var noThis = function() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    this.doesntExist = 'inStrictMode';
}
//noThis();
var inStrict = function() {
    this.isValid = 'There is the same this';
    (() => console.log(this.isValid + ' auto-bound within this function'))();
}.bind({});
//inStrict();