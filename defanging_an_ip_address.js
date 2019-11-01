/*
 * @param {string} address
 * @return {string}
 */

//Solution 1, Replace
function defangIPaddr (address) {
    return address.replace (/\./g,"[.]")
}

//Solution 2, Split and Join
function defangIPaddr (address) {
    return address.split(".").join("[.]")
}
