// const myMap = new Map();
// myMap.set(0, 1);
// myMap.set(1, 'one');
// myMap.set(0, myMap.get(0)+1);
// for (var [key, value] of myMap) {
//   console.log(key + ' = ' + value);
// }

var topKFrequent = function(nums, k) {
    nums = [1,1,1,2,2,3];
    k = 2
    const mapElem = new Map();
    const storingElem = [];
    const result = [];
    
    for (let num of nums){
        mapElem.set(num,(mapElem.get(num) || 0) + 1)

    }
     //  mapElem = ([
    //     [1, 3],
    //     [2, 2],
    //     [3, 1]
    // ])

    for(var [key,value] of mapElem) {
        storingElem[value] = (storingElem[value] || new Set()).add(key);
    }
    for(let i = storingElem.length-1; i >= 0; i--) {
        if(storingElem[i]) result.push(...storingElem[i]);
        if(result.length === k) break;
    }
    return result;
 

};
