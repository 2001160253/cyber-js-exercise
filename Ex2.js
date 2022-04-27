// Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số
// nguyên tố trong mảng
const integerArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let n;
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < (n - 1); i++) {
        if (n % i == 0) {
            return false;

        }
    }
    return true;
}

const a = []
function primeList(a) {
    for (let i = 0; i < a.length; i++) {
        if (isPrime(a[i]) == true) {
            console.log(a[i])
        }
    }
}

primeList(integerArray)