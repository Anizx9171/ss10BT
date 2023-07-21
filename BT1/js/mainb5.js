let a = +prompt(`Nhập số điểm bài kiểm tra của bạn`)
let b = +prompt(`Nhập số điểm bài giữa kì của bạn`)
let c = +prompt(`Nhập số điểm bài cuối kì của bạn`)
let s = (a+b*2+c*3)/6
if (0<= s < 3) {
    alert(`học lực của bạn là học lực yếu \(F\)`)
}
if (s < 6.5) {
    alert(`học lực của bạn là học lực trung bình \(C\)`)
}
if (s < 8) {
    alert(`học lực của bạn là học lực Khá \(B\)`)
}
if (s <= 10) {
    alert(`học lực của bạn là học lực Giỏi \(A\)`)
}
else {
    alert(`Nhập như thế thì bạn chắc phải học ở sao hỏa`)
}