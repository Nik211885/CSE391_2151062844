import React from 'react';
import "./Main.css"
import main1 from "../../image/main1.png"
import main2 from "../../image/main2.png"
import main3 from "../../image/main3.png"
import main4 from "../../image/main4.png"
import main5 from "../../image/main5.png"
import main6 from "../../image/main6.png"
import { NavLink } from 'react-router-dom';
const Main = () => {
    return (
        <div className='main'>
            <div className='grid1'>
                <div className='img'>
                     <img src={main1} alt= "####main1" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className='link-kenh' id='new'>
                    <NavLink className="navlink-kenh" to="kenh-ho-tro-tieu-hoc">Kênh hỗ trợ tiểu học</NavLink>
                </div>
                <div className='link-kenh'>
                    <NavLink className="navlink-kenh" to="co-so-hoa-lac">cơ sở hòa lạc</NavLink>
                </div>
                <div className='link-kenh'>
                    <NavLink className="navlink-kenh" to="ban-tin-dhqghn">bản tin đhqghn</NavLink>
                </div>
                <div className='link-kenh'>
                    <NavLink className="navlink-kenh" to="tap-chi-khoa-hoc">tạp chí khoa học</NavLink>
                </div>
               
            </div>
            <div className='grid2'>
                <div className='grid2-2'>
                    <img src={main2} alt= "####main1" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className='grid3'>
                    <img src={main3} alt= "####main1" style={{width:"100%",height:"100%"}}/>    
                </div>
                <div className='grid3'>
                     <img src={main4} alt= "####main1" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className='grid3'>
                    <img src={main5} alt= "####main1" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className='grid3'>
                    <img src={main6} alt= "####main1" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className='link-kenh'id='link-dam-bao'>
                    <NavLink to="dam-bao-trat-luong">đảm bảo trất lượng</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Main;
