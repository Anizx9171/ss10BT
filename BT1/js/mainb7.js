let sim = prompt(`Nhập tên thẻ sim của bạn`);
let time = +prompt(`Nhập số giờ gọi của bạn của bạn \(nhập số giờ chỉ bao gốm số\)`);
let Zone = +prompt(`Nếu Sim bạn sử dụng gọi nội mạng \(bấm 1\), gọi ngoại mạng \(bấm 2\)`);
if (sim == "MobiFone" || sim == "Mobifone" || sim == "mobifone") {
    if (Zone == 1) {
        let pay = time * 60 * 1580
        alert(`số tiền bạn phải trả là: ${pay} đ`)
    } else {
        let pay = time * 60 * 1780
        alert(`số tiền bạn phải trả là: ${pay} đ`)
    }
}
else if (sim == "VinaPhone" || sim == "Vinaphone" || sim == "vinaphone") {
    if (Zone == 1) {
        let pay = time * 60 * 1580
        alert(`số tiền bạn phải trả là: ${pay} đ`)
    } else {
        let pay = time * 60 * 1780
        alert(`số tiền bạn phải trả là: ${pay} đ`)
    }
}
else if (sim == "Viettel" || sim == "viettel") {
    if (Zone == 1) {
        let pay = time * 60 * 1590
        alert(`số tiền bạn phải trả là: ${pay} đ`)
    } else {
        let pay = time * 60 * 1790
        alert(`số tiền bạn phải trả là: ${pay} đ`)
    }
}
else {
    alert(`Không thể tính, vui lòng kiểm tra lại các thông tin bạn đã nhập.`)
}