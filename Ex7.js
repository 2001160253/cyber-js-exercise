// Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó. 
let n;
function multiplicationTable(n) {
    let result = 1;
    let i = 1;
    for (i; i <= 10; i++) {
        result = n * i;
        console.log(n + "x" + i + "=" + result)
    }
}
multiplicationTable(2)