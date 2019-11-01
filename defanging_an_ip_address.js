/*
 * @param {string} address
 * @return {string}
 */

//Solution 1, Replace
function defangIPaddrReplace () {
    let address = "1.1.1.1"
    return address.replace (/\./g,"[.]")
}

console.log (defangIPaddrReplace())

//Solution 2, Split and Join
function defangIPaddrJoin () {
    let address = "1.1.1.1"
    return address.split(".").join("[.]")
    
}

console.log (defangIPaddrJoin())

/*
Accepted
Your input "1.1.1.1"
Output "1[.]1[.]1[.]1"
Expected "1[.]1[.]1[.]1"
*/
