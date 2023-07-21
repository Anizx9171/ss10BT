let sP = +prompt(`Nhập doanh số bán hàng của bạn trong tháng này`)
if (0 < sP < 50) {
    alert(`bạn được chia 5% hoa hồng trên mỗi sản phẩm`)
}
if (sP < 100) {
    alert(`bạn được chia 8% hoa hồng trên mỗi sản phẩm`)
}
if (sP < 500) {
    alert(`bạn được chia 10% hoa hồng trên mỗi sản phẩm`)
}
if (sP < 1500) {
    alert(`bạn được chia 15% hoa hồng trên mỗi sản phẩm`)
}
else {
    alert(`Bạn là chúa tể kinh doanh ông trùm buôn bán thủy tổ của doanh số cột trụ chống trời của doanh nghiệp nên bạn ăn 20% hoa hồng trên mỗi sản phẩm`)
}