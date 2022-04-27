// input: nhap thang
// output: so ngay
let day, month, year, nNumOfDays;
function isLeapYear(year) {
    if ((nYear % 4 == 0 && nYear % 100 != 0) || nYear % 400 == 0) {
        return true;
    }
    return false;
}
function countDay(day, month, year) {

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nNumOfDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nNumOfDays = 30;
            break;
        case 2:
            if (isLeapYear(year)) {
                nNumOfDays = 29;
            }
            else {
                nNumOfDays = 28;
            }
            break;
    }
    return nNumOfDays;
}
let num = countDay(26, 5, 2022)
console.log(num + " ngay")