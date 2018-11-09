function add(a, b) {
    return a + b;
}
module.exports.add = add;


function compare(var1, var2) {
    return (var1.toString() === var2.toString());
}

module.exports.compare = compare;

function largest(large_array) {
    let max = Math.max(...large_array);
    return max;
}
module.exports.largest = largest;