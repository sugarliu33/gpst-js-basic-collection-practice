'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    collection.map(function (item) {
        let obj = result.find(result => result.key === item);
        obj ? obj.count++ : result.push({key: item, count: 1});
    });

    return result;
}
