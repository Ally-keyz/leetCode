
// add fuction

function createAddition(adder){
    return function(fixed){
        return fixed + adder;
    }
}

const makeAddition = createAddition(5);
console.log(makeAddition(1));