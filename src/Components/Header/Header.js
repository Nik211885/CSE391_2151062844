import React from 'react';
import "./Header.css"
import vnu from "../../image/logo_vnu.png"
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='navbar-in-header'>
                <ul>
                    <li>
                        <NavLink to={"tai-nguyen-so"}>Tài nguyên số</NavLink>
                        <NavLink to={"hoc-lieu-so"}>Học liệu số</NavLink>
                        <NavLink to={"thu-vien"}>Thư viện</NavLink>
                        <NavLink to={"van-ban"}>Văn bản</NavLink>
                        <NavLink to={"email"}>E-mail</NavLink>
                        <NavLink to={"lien-he"}>Liên hệ</NavLink>
                        <NavLink to={"stiemap"}>Stiemap</NavLink>
                    </li>
                </ul>
            </div>
            <br/><br/>
            <div className='search'>
                <input className='choose' type='button' value={"English"} style={{border:"none",color:"#007f49",background:"white"}}/>
                <input className='search-text' placeholder='Nhập thông tin cần tìm: tuyển sinh, đào tạo....' type='text'/>
                <input className='button-seacrh' value={"Tìm kiếm"} type='button'/>
            </div>
            <img src={vnu} alt='##vnu' style={{marginTop:"-20px"}}/>
        </div>
    );
}

export default Header;
