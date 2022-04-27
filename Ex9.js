// Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn
// Một câu đố dân gian nổi tiếng chắc hẳn tất cả các bạn đều biết. Và bạn có thể
// cũng đã biết đáp án của câu đố trên là 22 con gà và 14 con chó. Tuy nhiên,
// thầy giáo của Hiếu lại bắt anh ấy phải giải bài tập tổng quát: "Tìm số gà, số
// chó khi số tổng số con là m và tổng số chân là
// n
// ". Bạn hãy giúp Hiếu giải bài toán này nhé.
// => Đề là: viết chương trình nhập vào m là tổng số chó và gà, n là tổng số
// chân, yêu cầu tìm
let m;
let n;
function calcDogChicken(m, n) {
    let dog = 0;
    let chicken = 0;
    chicken = 2 * m - n / 2;
    dog = n / 2 - m
    console.log("so ga la: " + chicken);
    console.log("so cho la: " + dog);
}
calcDogChicken(36, 100)

