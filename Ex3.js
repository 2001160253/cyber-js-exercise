// Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
let n;
function sumNumber(n) {
    let i, sum = 0;
    for (i = 2; i <= n; i++) {
        sum += i
    }
    return sum + 2 * n;
}
let s = sumNumber(3)
console.log(s)