import React from 'react';
import "./Form.css"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Form = () => {
    const [name, setName] = useState("");
    const [key, setKey] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorKey, setErrorKey] = useState("");
    const [succect, setSuccect] = useState(true);
    const [host, setHost] = useState("");
    function checkEmty(string){
        if(!string.trim()){
            return true;
        }
        return false;
    }


    function checkAlphabest(){
        for(let i=0;i<name.length;i++){
            if((name[i]<"A"&&name[i]>="!")||(name[i]>"Z"&&name[i]<"a")||(name[i]>"z"&&name[i]<="~")){
                return false;
            }
        }
        return true;
    }


    function checkUpper(){
        for(let i=0;i<key.length;i++){
            if(key[i]>="A" && key[i]<="Z"){
                return false;
            }
        }
        return true;
    }

    function checkLengtKey(){
        if(key.length<8){
            return true;
        }
        return false;
    }


    function checkChuThuong(){
        for(let i=0;i<key.length;i++){
            if(key[i]>="a" && key[i]<="z"){
                return false;
            }
        }
        return true;
    }


    function checkSo(){
        for(let i=0;i<key.length;i++){
            if(key[i]>="0" && key[i]<="9"){
                return false;
            }
        }
        return true;
    }
    

    
    function validateName(){
        if(checkEmty(name)){
            setErrorName("Tên không thể để trống")
            return false;
        }
        if(!checkAlphabest()){
            setErrorName("Tên chỉ có thể chứa chữ");
            return false;
        }
        setErrorName("")
        return true;
    }


    function validateKey(){
        if(checkEmty(key)){
            setErrorKey("Mật khẩu không thể để trống");
            return false;
        }
        if(checkLengtKey()){
            setErrorKey("Mật khẩu phải có tối thiểu 8 kí tự")
            return false;
        }
        if(checkUpper()){
            setErrorKey("Mật khẩu phải có kí tự hoa")
            return false;
        }
        if(checkChuThuong()){
            setErrorKey("Mật khẩu phải có kí tự thường")
            return false;
        }
        if(checkSo()){
            setErrorKey("Mật khẩu phải có kí tự số");
            return false;
        }
        setErrorKey("")
        return true;
    }
    function validateCuThe(){
        if(name==="Lê Khắc Ninh"&& key==="K@lnt211885"){
            return true;
        }
        return false;
    }


    function validate(){
        const v1=validateName();
        const v2=validateKey();
        const v3 = validateCuThe();
        if(v1 &&v2){
            if(v3){
                setName("")
                setKey("")
                setHost("Bạn đã đăng nhập thành công")
                setSuccect(true);
                document.getElementById("infor").classList.toggle("infor-change")
                return
            }
            setHost("Tài khoản mật khẩu không đúng")
            setSuccect(true);
            return 
        }
        setHost("");
        setSuccect(false);
    }
    return (
        <div className='form'>
            <div className='form-sigin' id='form-simple'>
                <div className='text-login'>
                    <h1>đăng nhập hệ thống</h1>
                    <label className='language'></label>
                    <select name='choose-language'>
                        <option value={"Tiếng Việt"}>Tiếng Việt</option>
                        <option value={"Tiếng Anh"}>Tiếng Anh</option>
                    </select>
                </div>
                <div className='box'>
                    <div className='input-login' id='input-login'>
                        {succect?<div className='infor-login'id='infor'>{host}</div>:""}
                        <br/><br/>
                        <label className='name'>
                            Tên đăng nhập
                            <br/><br/>
                            <input id='login-text' style={{width: "500px",height: "60px",fontSize:"16px",borderRadius:"8px"}} value={name} onChange={(event)=>{setName(event.target.value)}}/>
                        </label>
                        {errorName?<span>{errorName}</span>:""}
                        <br/><br/>
                        <label className='name'>
                            Mật khẩu
                            <br/><br/>
                            <input id='login-text' style={{width: "500px",height: "60px",fontSize:"16px",borderRadius:"8px"}} value={key} onChange={(event)=>{setKey(event.target.value)}}/>
                            <br/>
                        </label>
                        {errorKey?<span>{errorKey}</span>:""}
                        <br/><br/>
                    </div>
                    <div className='box-login'>
                        <input className='box' type='checkbox' id='box'/>
                        <label for="box" id='box-check'>Ghi nhớ</label>
                        <NavLink className="forgot">Quên mật khẩu?</NavLink>
                    </div>
                    <div className='submit'>
                         <input  className='submit' type='submit' value={"Đăng nhập"}style={{width: "500px",height: "60px",fontSize:"22px",borderRadius:"8px"}} onClick={()=>validate()}/>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Form;
