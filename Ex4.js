// Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 => 
// Ước số của 8 là : 8,4,2,1
let n;
function sumDiv(n) {
    let i;
    for (i = 1; i <= n; i++) {
        if (n % i == 0)
            console.log(i)
    }
}
sumDiv(8)
