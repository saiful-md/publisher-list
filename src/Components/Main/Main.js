import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Writers from '../Writers/Writers';
import './Main.css';


const Main = () => {
    // ==get data from api called by usestate and useeffect=======
    const [writers, setWriters] = useState([]); // usestate
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
                    /* send data to writters file from api...  */
                    writers.map(data => <Writers 
                        key={data.key}
                        button={handleButton} 
                        data={data}></Writers>)
                }
            </div>
            <div className="select-poet">
                <Cart element={select}></Cart>
            </div>
            
        </div>
    );
};

export default Main;