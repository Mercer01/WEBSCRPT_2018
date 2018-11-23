const _ = require("underscore");

function range(array) {
    return _.max(array) - _.min(array);
}

module.exports.range = range;