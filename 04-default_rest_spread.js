// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

var outputWithDefault= function(firstName='Dan') {
    console.log(`Hello ${firstName}`);
}
//outputWithDefault();
//outputWithDefault('you');

var massOutputter = function(first,...remainder) {
    console.log(`${first} ${JSON.stringify(remainder)} ${Array.isArray(remainder)}`);
}
//massOutputter('I', 'am', 'an', 'array');

var canBeSpread = function(first, second, third) {
    console.log(first + ' ' + second + ' and ' + third);
}
//canBeSpread(...['Me', 'Myself', 'I']);