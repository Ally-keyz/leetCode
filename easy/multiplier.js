
function createMultiplier(multiplier){
    return function(fixed){
        return fixed * multiplier;
    }
}

const multiplier = createMultiplier(5);

console.log(multiplier(2));
console.log(multiplier(3));
console.log(multiplier(5));