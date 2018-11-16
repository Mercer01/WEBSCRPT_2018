function add(a, b) {
    return a + b;
}
module.exports.add = add;


function compare(var1, var2) {
    return (var1.toString() === var2.toString());
}

module.exports.compare = compare;

function largest(large_array) { 
    return Math.max(...large_array);
}
module.exports.largest = largest;



function compare2(var1,var2) {
    for (let i = 0; i < var1.length; i++) {
        if(var1[i] != var2[i]) {
            return false;
        }   
    }
    return true;
}

function largest(x) {
    let largest = x[0];
    for(const i of x) {
        if(i > largest) {
            largest = i;
        }
    }
    return largest;
}