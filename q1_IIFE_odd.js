//  var array = [1,2,3,4,5,6,7,8,9]

let arr = (function odd(x){
    for (var i=0;i<x.length;i++){
        if(x[i]%2!=0)
        console.log(x[i])
    }

    
})([1,2,3,4,5,6,7,8,9]);