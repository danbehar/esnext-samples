// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// http://babeljs.io/docs/learn-es2015/#let-const

var varIsHoisted = function() {
    console.log('hoisted is ' + hoisted);
    var hoisted = 'thisishoisted';
}
//varIsHoisted();

var varIsHoistedToFunctionScope = function() {
    console.log('hoisted to function scope ' + hoistedToFunctionScope);
    if (false) {
        var hoistedToFunctionScope = 'thisishoistedalso';
    }
}
//varIsHoistedToFunctionScope();

var nonExistingVar = function() {
    console.log('non existing variable ' + nonExisting);
}
//nonExistingVar();

var letIsNotHoisted = function() {
    // Note that we needed to enable configuration for babel to log the TDZ
    console.log('non hoisted let is ' + nonHoistedLet);
    let nonHoistedLet = 'let is not hoisted';
}
//letIsNotHoisted();

var constIsNotHoisted = function() {
    console.log('non hoisted const is ' + nonHoistedConst);
    const nonHoistedConst = 'const is not hoisted either';
}
//constIsNotHoisted();


var constIsOnlyAtTopLevel = function() {
    const theConst = {key: 'value'};
    theConst.key = 'updatedValue';
    console.log('theConst is ' + JSON.stringify(theConst));
}

//constIsOnlyAtTopLevel();

//var constCannotBeRedefined = function() {
//    const theConst = { 'key': 'value' };
//    theConst = 'cannotUpdate';
//}

//var constMustBeImmedatelyDefined = function(value) {
//    const invalid;
//    if (value) {
//        invalid = false;
//    } else {
//        invalid = true;
//    }
//}