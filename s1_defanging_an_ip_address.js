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

/*
Accepted
Runtime: 84 ms
Your input "1.1.1.1"
Output "1[.]1[.]1[.]1"
Expected "1[.]1[.]1[.]1"
*/
