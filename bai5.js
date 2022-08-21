// dau vao 
var soThuc = 12;
var tong2KySo = 0;

// xu ly 
var gtHangChuc = Math.floor(soThuc / 10);
var gtHangDonVi = Math.floor(soThuc % 10);
var tong2KySo = gtHangChuc + gtHangDonVi;
var ketQua = "Tong 2 ky so la: " +  tong2KySo;

// dau ra 
console.log(ketQua);