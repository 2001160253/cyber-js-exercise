// Nhập vào số giờ và số phút => góc lệch giữa kim giờ và kim phút. Vd 6:10
let hour, mins;
function calcOclock(hour, mins) {
    hour = Math.floor(hour)
    console.log(hour)
    mins = Math.floor(mins)
    console.log(mins)

    let c;
    // |phút x 6o - (giờ*30o + (phút/5 lấy dư)x5o)|
    c = Math.abs(6 * mins - 0.5 * (hour * 60 + mins))
    c = Math.floor(c)

    console.log("Goc lech: " + c)
}
calcOclock(4, 30)