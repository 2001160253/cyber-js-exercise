// input: 2 so thuc
// output: gia tri tuyet doi
let a, b, c;
function absolute(a, b, c) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (c < 0) c = -c;
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
}
absolute(-2, 4, -5)