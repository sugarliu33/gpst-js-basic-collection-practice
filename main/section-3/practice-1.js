'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.map(function (item) {
        let key = item.key;
        let count = item.count;
        if (objectB.value.includes(key)) {
            count--;
        }
        result.push({key, count});
    });
    return result;
}
