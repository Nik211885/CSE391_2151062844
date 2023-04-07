import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='main-navbar'>
        <li className='li-main'>
          <NavLink to={"trang-chu"}>trang chủ</NavLink>
          <NavLink to={"gioi-thieu"}>giới thiệu</NavLink>
          <NavLink to={"dao-tao"}>đào tạo</NavLink>
          <NavLink to={"khoa-hoc-cong-nghe"}>khoa học công nghệ</NavLink>
          <NavLink to={"hop-tac-phat-trien"}>hợp tác & phát triển</NavLink>
          <NavLink to={"sinh-vien"}>sinh viên</NavLink>
          <NavLink to={"dang-ki-hoc-bong"}>đăng kí học bổng</NavLink>
          <NavLink to={"can-bo"}>cán bộ</NavLink>
          <NavLink to={"tuyen-dung"}>tuyển dụng</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
