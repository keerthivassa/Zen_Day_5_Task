let value = 123;
 
const revValue = function (value) {
    let myRevVal = value.toString().split("").reverse().join("");
    //let myRevVal = value.toString().split("").reverse().join("");
    return myRevVal;
}
console.log(revValue("madam"))


