// input: Bo(B), Me(M), anh(A), em(E)
// output: chao hoi
let n;
function helloFamily(n) {
    switch (n) {
        case "B": {
            console.log("Chao Bo")
            break;
        }
        case "M": {
            console.log("Chao Me")
            break;
        }
        case "A": {
            console.log("Chao Anh")
            break;
        }
        case "E": {
            console.log("Chao Em")
            break;
        }
        default:
            console.log("Error")
    }
}
console.log("Ai dang su dung may tinh?")
helloFamily("A")