let a = +prompt("nhập số a")
let b = +prompt("nhập số b")
let c = +prompt("nhập số c")
if (a > b && a > c) {
    alert(`Số ${a} là số lớn nhất trong dãy số ${a}, ${b}, ${c}.`)
}
if (a < b || a < c) {
    if (b < c) {
        alert(`Số ${c} là số lớn nhất trong dãy số ${a}, ${b}, ${c}.`)
    } else {
        alert(`Số ${b} là số lớn nhất trong dãy số ${a}, ${b}, ${c}.`)
    }
}