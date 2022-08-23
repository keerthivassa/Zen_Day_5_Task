let arr = [1,1,2,3,4,6,5,6,6,7,8]

let removeDuplicate = function(){


let remDup = [... new Set(arr)];

return remDup;

}

console.log(removeDuplicate())

