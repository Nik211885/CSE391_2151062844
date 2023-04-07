import React from 'react';
import "./Home.css"
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Main from '../../Components/Main/Main';
const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default Home;
