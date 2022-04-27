// input: toa do 3 sinh sinh vien
// output: khoang cach sinh vien xa nhat

let x, y, name;
const student1 = {
    name: "Trung",
    coor: [4, 9],
}
const student2 = {
    name: "Vu",
    coor: [8, 7],
}
const student3 = {
    name: "Nam",
    coor: [10, 10],
}

const locationSchool = [4, 3]
const n1 = locationSchool.shift();
const n2 = locationSchool.pop()

function max() {
    let dis1, dis2, dis3;
    dis1 =
        Math.sqrt(
            Math.pow(
                n1 - student1.coor.shift(), 2
            )
            +
            Math.pow(
                n2 - student1.coor.pop(), 2
            )
        );
    dis2 =
        Math.sqrt(
            Math.pow(
                n1 - student2.coor.shift(), 2
            )
            +
            Math.pow(
                n2 - student2.coor.pop(), 2
            )
        );
    dis3 =
        Math.sqrt(
            Math.pow(
                n1 - student3.coor.shift(), 2
            )
            +
            Math.pow(
                n2 - student3.coor.pop(), 2
            )
        )

    dis1 = dis1.toFixed(2)
    dis2 = dis2.toFixed(2)
    dis3 = dis3.toFixed(2)

    let temp = dis1;
    if (dis2 > temp) {
        console.log("sinh vien xa truong nhat la: " + student2.name + " voi " + dis2 + " km");
    }
    else if (dis3 > temp) {
        console.log("sinh vien xa truong nhat la: " + student3.name + " voi " + dis3 + " km");

    } else {
        console.log("sinh vien xa truong nhat la: " + student1.name + " voi " + dis1 + " km");

    }
}
max()
