let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");
let divide = a % b;
if (divide == 0) {
    alert(`Số ${a} chia hết cho số ${b}`)
}
else {
    alert(`Số ${a} không chia hết cho số ${b}`)
}