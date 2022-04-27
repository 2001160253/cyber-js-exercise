// Viết hàm chia bài cho 4 người chơi
//  Cho 4 mảng, đại diện cho 4 người chơi
//  var players = [ [], [], [], [] ];
//  Và 1 mảng bài: var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
// "AS", "7H", "9K", "10D"]
// Yêu cầu viết code để chia cho mỗi player 3 lá theo luật, chia lần lượt mỗi
// người 1 lá
// Kết quả :
// var player1 = ["4K","QH","AS"];
//  var player2 = ["KH", "KD","7H"];
//  var player3 = ["5C","2H","9K"];
//  var player4 = ["KA","10S","10D"];
// ** Không thuộc riêng về mảng và vòng lặp, suy nghĩ bất kì cách nào để giải
// các bài sau đây

const cards = [
    "4K",
    "KH",
    "5C",
    "KA",
    "QH",
    "KD",
    "2H",
    "10S",
    "AS",
    "7H",
    "9K",
    "10D",
];
const player1 = [];
const player2 = [];
const player3 = [];
const player4 = [];

function gamble() {
    let card1;
    for (let i = 0; i < cards.length; i++) {
        card1 = cards.shift();
        player1.push(card1);

        card1 = cards.shift();
        player2.push(card1);

        card1 = cards.shift();
        player3.push(card1);

        card1 = cards.shift();
        player4.push(card1);
    }
    console.log("player1 = [" + player1 + "]");
    console.log("player2 = [" + player2 + "]");
    console.log("player3 = [" + player3 + "]");
    console.log("player4 = [" + player4 + "]");
}
gamble();
