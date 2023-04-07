import React from 'react';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from '../Page/Home/Home';
import Contact from '../Page/Contact/Contact';
const router = () => {
    return (
        <div className='router'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/email' element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default router;
