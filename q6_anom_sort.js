var arr1 = [1,3,4];
var arr2 = [2,5,8];

var medianSort = function (){

    var sum =  arr1.concat(arr2);

    sum = sum.sort(function (a,b) {return a-b });

    console.log(sum);

    var length =  sum.length;

    if (length % 2 == 1) {
         
        console.log(sum[(length/2)-0.5])

        return sum[(length/2)-0.5]

     
    }else {
        console.log(( sum[length/2]+sum[(length/2)-1])/2)

        return (sum[length/2]+sum[(length/2)-1])/2
    }

}

console.log(medianSort());











