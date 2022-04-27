// input: ngay, thang, nam
// output: ngay, thang, nam -> ngay truoc, ngay sau
let nDay, nMonth, nYear;
function isLeapYear(y) {
    if ((nYear % 4 == 0 && nYear % 100 != 0) || nYear % 400 == 0) {
        return true;
    }
    return false;
}
function calcDay(nMonth, nYear) {
    let nNumOfDays;

    switch (nMonth) {
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
            if (isLeapYear(nYear)) {
                nNumOfDays = 29;
            }
            else {
                nNumOfDays = 28;
            }
            break;
    }

    return nNumOfDays;
}


function preDate(nDay, nMonth, nYear) {
    nDay--;
    if (nDay == 0) {
        nMonth--;
        if (nMonth == 0) {
            nMonth = 12;
            nYear--;
        }

        nDay = calcDay(nMonth, nYear);
    }
    console.log("Pre date:")
    console.log("" + nDay + "-" + nMonth + "-" + nYear);
}
function nextDate(nDay, nMonth, nYear) {
    nDay++;
    if (nDay > calcDay(nMonth, nYear)) {
        nDay = 1;
        nMonth++;
        if (nMonth > 12) {
            nMonth = 1;
            nYear++;
        }
    }
    console.log("Next date:")
    console.log("" + nDay + "-" + nMonth + "-" + nYear);
}

console.log("Date:")
console.log("30-04-2022");
nextDate(30, 04, 2022);
preDate(30, 04, 2022)