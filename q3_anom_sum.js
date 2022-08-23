var array = [1,2,3,4,5,6,7,8,9]
var sum = 0;
var add = function(){

    for(i=0;i<array.length;i++){
        sum=sum+array[i];
    }

return sum;

   
}

console.log(add());