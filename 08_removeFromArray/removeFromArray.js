const removeFromArray = function(array,...itemToRemove) {
    const flattened = itemToRemove.flat();
    return array.filter(element => !flattened.includes(element));
};
// console.log(removeFromArray([1,2,4,5],[1,4]));
// Do not edit below this line
module.exports = removeFromArray;
