/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let newNums = nums.filter((v) => {
        return v != val;
    })

    for (let i = 0; i < newNums.length; i++) {
        nums[i] = newNums[i];
    }

    return newNums.length;
};