/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
//Most languages support lowercase conversion for a string data type. However, that is certainly not the purpose of the problem. 
Think about how the implementation of the lowercase function call can be done easily.
*/

//Solution 1, using toLowerCase built in method
/*var toLowerCase = function(str) {
    return str.toLowerCase()
};*/

//Solution 2, using ASCII (incomplete solution)
function toLowerCase () {
    const regex = /[A-Z]/g;
    let str = "Hello"
    let splitString = str.split('')

    /*if (str.match(regex)) {
        //let regexString = str.match(regex)
        let asciiCode = str.charCodeAt(0);

        //asciiCode = asciiCode + 32
        asciiCode += 32
        return asciiCode
    }*/

    for (i = 0; i < splitString.length; i++) {
        let asciiCode = str.charCodeAt(0);
        asciiCode += 32
        return asciiCode
    }
    
    //return splitString.length 

}//end toLowerCase()

console.log (toLowerCase())


