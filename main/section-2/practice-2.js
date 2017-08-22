'use strict';



function summarize(collection) {
    let result = [];
    collection.map(function (item) {
        let obj = result.find(result => result.key === item);
        obj ? obj.count++ : result.push({key: item, count: 1})
    });
    return result;
}

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    let i = 0;
    while (i < count){
        result.push(key);
        i++;
    }
}

function expand(collection) {
    let result = [];
    collection.map(function (item) {
       item.length === 1 ? result.push(item) : push(result, split(item).key, split(item).count) ;
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
