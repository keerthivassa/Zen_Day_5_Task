
 
let nums = [1,2,3,4,5];
let start;
let end;

const revNums = function (){
    while (start<end){
        [nums[start], nums [end]] = [nums[end], nums[start]];

        start++;
        end--;
    } 
}
let k;

var rotate = function(){
    k = k % nums.length;
    nums.reverse();
    revNums(nums,0,k-1);
    revNums(nums,k,nums.length-1);
};

console.log(rotate());