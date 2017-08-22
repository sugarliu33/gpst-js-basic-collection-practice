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


function discount(collection, promotionItems) {
    let result = [];
    collection.map(function (item) {
        let key = item.key;
        let count = item.count;
        if (promotionItems.includes(key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    });
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
