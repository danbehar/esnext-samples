var initialObject = {'srcA': 'valA', 'srcB': 'valB', 'srcC': 'valC'};
let { srcA: newA, srcB: newB } = initialObject;
//console.log('newA is ' + newA + ' and newB is ' + newB);

let {srcA, srcC} = initialObject;
//console.log('srcA is ' + srcA + ' and srcC is ' + srcC);


var takesInAddress = function({city: functionCity, state: functionState}) {
    console.log('Welcome from ' + functionCity + ' ' + functionState)
}

var takesInAddress2 = function({city, state}) {
    console.log(    'Welcome from ' + city + ' ' + state)
}
//takesInAddress({city: 'Baltimore', state: 'MD'});
//takesInAddress2({city: 'San Jose', state: 'CA'});