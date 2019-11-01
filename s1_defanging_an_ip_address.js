/*
 * @param {string} address
 * @return {string}
 */

//Solution 1, Replace
function defangIPaddr () {
    let address = "1.1.1.1"
    return address.replace (/\./g,"[.]")
}

defangIPaddr()
