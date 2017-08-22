'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.filter(function (item) {
        if (objectB.value.includes(item.key)) {
            result.push(item.key);
        }
    });
    return result;
}
