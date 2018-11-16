var1 = [0,1,2,3,4,6,7];
var2 = [0,1,2,3,4,6,7];


function compare(var1, var2) {
    return (var1.toString() === var2.toString());
}



function compare2(var1,var2) {
    for (let i = 0; i < var1.length; i++) {
        if(var1[i] != var2[i]) {
            return false;
        }   
    }
    return true;
}


function largest(large_array) { 
    return Math.max(...large_array);
}

function largest_2(x) {
    let largest = x[0];
    for(const i of x) {
        if(i > largest) {
            largest = i;
        }
    }
    return largest;
}


console.time("compare")
for (let index = 0; index < 100000; index++) {
    compare(var1,var2);
}
console.timeEnd("compare")

console.time("compare")
for (let index = 0; index < 100000; index++) {
    compare2(var1,var2);
}
console.timeEnd("compare")
