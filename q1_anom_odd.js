var array = [1,2,3,4,5,6,7,8,9]

var odd = function(){
    var result = array.filter(number => number%2 !=0)

    return result
}

console.log(odd());