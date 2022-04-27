/* In một bảng số từ 1-100 thỏa mãn điều kiện: (gợi ý dùng 2 vòng for lồng 
    nhau, để ý chỗ bước nhảy)
    • Bảng số gồm 10 hàng và 10 cột
    • Các giá trị trong hàng là liên tiếp nhau
    • Các giá trị trong cột hơn kém nhau 10
*/
let i, j;
function print2loop() {
    for (i = 1; i <= 10; i++) {
        for (j = i; j <= 100; j += 10) {
            console.log(j);
        }
    }
}
print2loop();