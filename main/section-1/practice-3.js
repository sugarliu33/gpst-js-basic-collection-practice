'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    result = collectionA.filter(function (item) {
        if (objectB.value.includes(item)) {
            return item;
        }
    });
    return result;
}
