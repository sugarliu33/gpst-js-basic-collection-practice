'use strict';

function summarize(collection) {
    let result = [];
    collection.map(function (item) {
        let obj = result.find(result => result.key === item);
        obj ? obj.count++ : result.push({key: item, count: 1})
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
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
