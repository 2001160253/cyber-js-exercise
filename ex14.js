// input: 3 so nguyen
// output: dem tong so le, so chan

function countOddEven(n1, n2, n3) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
    const a = [n1, n2, n3];
    let countOdd = 0;
    let countEven = 0;

    for (let i = 0; i < a.length; i++) {
        while (a[i] != 0) {
            let temp = a[i] % 10;
            if (temp % 2 == 1) {
                countOdd++;
            } else {
                countEven++
            }
            a[i] /= 10;
            a[i] = Math.floor(a[i])
        }
    }

    console.log("Tong le: " + countOdd + ", Tong chan: " + countEven)
}
countOddEven(222, 333, 112)