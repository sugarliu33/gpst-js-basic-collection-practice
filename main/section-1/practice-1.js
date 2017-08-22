'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    result = collectionA.filter(function (item) {
        if (collectionB.includes(item)) {
            return item;
        }
    });
    return result;
}
