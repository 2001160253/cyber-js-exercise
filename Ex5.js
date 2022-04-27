// Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn 
// phím.Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống như duyệt mảng)
let n;
function reverse_num(n) {
    n = n.toString()
    return n.split("").reverse().join("");
}
let n2 = reverse_num(123)
console.log(n2)