var a = [3, 4, 7, 2, 24, 1, 78, 56, 90, 98];
var b = a.map((data) => {
    return data * 2;
});
console.log(b); //(10) [6, 8, 14, 4, 48, 2, 156, 112, 180, 196]



var c = [1, 2, 4, 7, 2, 24, 1, 78, 56, 90, 98]
var d = a.map(
    (data) => {
        return data * 4;
    }
);
console.log(d);