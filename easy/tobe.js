
function expect(val1){
    return {
        toBe(val){
            if(val1 === val){
                return true
            }else{
                throw new Error("Not Equal");
            }
        },

        NotToBe(val){
            if(val1 !== val){
                return true;
            }else{
                throw new Error("Equal")
            }
        }
    }

}

try {
    console.log(expect(5).toBe(5));
    console.log(expect(5).NotToBe(5));
} catch (error) {
    console.log(error.message);
}

