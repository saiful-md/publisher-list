import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Writers from '../Writers/Writers';
import './Main.css';


const Main = () => {
    const [writers, setWriters] = useState([]);
    const [select, setSelect] = useState([]);
    useEffect(()=>{
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => setWriters(data.writer))
    },[]);

    const handleButton = (name) =>{
        const newSelected = [...select, name];
        setSelect(newSelected);
        
    }
    return (
        <div className="main-container">
            <div className="poets">
                {
                    writers.map(data => <Writers button={handleButton} data={data}></Writers>)
                }
            </div>
            <div className="select-poet">
                <Cart element={select}></Cart>
            </div>
            
        </div>
    );
};

export default Main;