/*
Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

*/

const searchInsert = (nums, target)=>{
    let  maxArr = nums.length - 1;
    let  minArr = 0;
    let  aux;
    let  midArr;
    
    while(minArr <= maxArr){
        midArr = Math.floor((minArr + maxArr)/2);
        if(nums[midArr] == target){
            aux = midArr;
            break;
        }

        if(nums[midArr] > target){
            maxArr = midArr - 1;
        }
        else{
            minArr = midArr + 1;
        }
    }

    if(aux === undefined){
        aux = minArr;
    }

    return console.log(aux);

}


let nums =  [1,3,5,6];

searchInsert(nums, 5);