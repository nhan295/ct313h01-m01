CREATE DATABASE BOOKS;
USE BOOKS;
drop database books;

CREATE TABLE NGUOI_DUNG(
	 ND_ID INT AUTO_INCREMENT PRIMARY KEY,
	 ND_MatKhau VARCHAR(255),
	 ND_HoTen CHAR(30),
	 ND_GioiTinh enum('Nam','Nữ'),
	 ND_NgayTao DATE,
	 ND_Email varchar(50) check (`ND_Email` regexp "^[a-zA-Z0-9][a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]*?[a-zA-Z0-9._-]?@[a-zA-Z0-9][a-zA-Z0-9._-]*?[a-zA-Z0-9]?\\.[a-zA-Z]{2,63}$"),
	 ND_SoDienThoai char(10) check(regexp_replace(ND_SoDienThoai,'[^0-9]', '')),
	 ND_DiaChi VARCHAR(50),
     ND_VaiTro CHAR(20)
     );
drop table nguoi_dung;
select* from nguoi_dung;
 CREATE TABLE LOAI_SACH(
	LS_ID INT AUTO_INCREMENT PRIMARY KEY,
	LS_Ten CHAR(30),
	LS_MoTa VARCHAR(50)
);
select * from loai_sach;

CREATE TABLE SACH(
	SACH_ID INT AUTO_INCREMENT PRIMARY KEY,
	SACH_Ten CHAR(30),
    SACH_Anh longblob,
    SACH_TacGia CHAR(30),
	SACH_NgonNgu CHAR(30),
	SACH_SoLuong INT,
	SACH_LuotMua FLOAT,
	SACH_GiaNhap INT,
	SACH_GiaBan FLOAT(6,3),
	SACH_GiaKhuyenMai INT,
	SACH_NhaXuatBan CHAR(30),
	SACH_NgayXuatBan DATE,
	SACH_NgayTao DATE,
	SACH_NgayCapNhat DATE,
	SACH_Sotrang INT,
	SACH_MoTa VARCHAR(300),
	LS_ID INT,
	FOREIGN KEY (LS_ID) REFERENCES LOAI_SACH(LS_ID)
);
select * from sach;

-- CREATE TABLE DON_HANG (
-- 	DH_ID INT AUTO_INCREMENT PRIMARY KEY,
-- 	ND_ID INT,
-- 	SACH_ID INT,
-- 	DH_NgayLap DATE,
-- 	DH_TongTien FLOAT,
--     FOREIGN KEY (ND_ID) REFERENCES NGUOI_DUNG(ND_ID),
--     FOREIGN KEY (SACH_ID) REFERENCES SACH(SACH_ID)
-- );

CREATE TABLE CHI_TIET_DON_HANG(
	CTDH_ID INT AUTO_INCREMENT PRIMARY KEY,
    ND_ID INT,
	SACH_ID INT,
	CTDH_SoLuong INT,
	CTDH_DonGia FLOAT(6,3),
    CTDH_ThanhTien FLOAT(6,3),
    CTDH_NgayLap DATE,
    FOREIGN KEY (SACH_ID) REFERENCES SACH(SACH_ID),
    FOREIGN KEY (ND_ID) REFERENCES NGUOI_DUNG(ND_ID)
);
select *from chi_tiet_don_hang;
