
function createCounter (n){
    return function(){
        return n ++
    }
}


const counting = createCounter(10);
console.log(counting())
console.log(counting())
console.log(counting())
