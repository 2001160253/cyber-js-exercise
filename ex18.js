// input: so nguyen 3 chu so
// output: cach doc
let n;
function integer(n) {
    // let a = (n % 10).toFixed(0); //hang don vi
    // let b = ((n / 10) % 10).toFixed(0); //hang chuc
    // let c = (n / 100); //hang tram
    // c = c.toFixed(0)
    let a, b, c;
    a = n % 10;
    b = (n / 10) % 10;
    c = n / 100;
    a = Math.floor(a);
    b = Math.floor(b);
    c = Math.floor(c);

    switch (c) {
        case 1:
            console.log("Một trăm ");
            break;
        case 2:
            console.log("Hai trăm ");
            break;
        case 3:
            console.log("Ba trăm ");
            break;
        case 4:
            console.log("Bốn trăm ");
            break;
        case 5:
            console.log("Năm trăm ");
            break;
        case 6:
            console.log("Sáu trăm ");
            break;
        case 7:
            console.log("Bảy trăm ");
            break;
        case 8:
            console.log("Tám trăm ");
            break;
        case 9:
            console.log("Chín trăm");
            break;
        default: console.log("error")
    }
    if (b % 10 == 0 && a != 0) {
        console.log("lẻ")
    } else {
        switch (b) {
            case 1:
                console.log("mười ");
                break;
            case 2:
                console.log("hai mươi ");
                break;
            case 3:
                console.log("ba mươi ");
                break;
            case 4:
                console.log("bốn mươi ");
                break;
            case 5:
                console.log("năm mươi ");
                break;
            case 6:
                console.log("sáu mươi ");
                break;
            case 7:
                console.log("bảy mươi ");
                break;
            case 8:
                console.log("tám mươi ");
                break;
            case 9:
                console.log("chín mươi");
            default: console.log("error")
                break;
        }
    }
    switch (a) {
        case 1:
            console.log("một ");
            break;
        case 2:
            console.log("hai ");
            break;
        case 3:
            console.log("ba ");
            break;
        case 4:
            console.log("bốn ");
            break;
        case 5:
            console.log("lăm ");
            break;
        case 6:
            console.log("sáu ");
            break;
        case 7:
            console.log("bảy ");
            break;
        case 8:
            console.log("tám ");
            break;
        case 9:
            console.log("chín ");
            break;
        default: console.log("error")
    }
}
integer(411)