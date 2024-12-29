
// creating a java script fuction that displays hellowrd when called

// fuction
function createHelloWord (){
    return function(){
        return "Hello word"
    }
    
}

const hello = createHelloWord();
console.log(hello());