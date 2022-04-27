// Nhap vao 3 so nguyen, xuat theo thu tu tang dan 
let a, b, c;
function numberAscending(a, b, c) {
    let temp;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }

    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }
    console.log(a, b, c)
}
numberAscending(3, 3, 2)