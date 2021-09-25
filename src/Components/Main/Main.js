import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Writers from '../Writers/Writers';


const Main = () => {
    const [writers, setWriters] = useState([]);

    useEffect(()=>{
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => setWriters(data.writer))
    },[])
    return (
        <div>
            {
                writers.map(data => <Writers data={data}></Writers>)
            }
            
        </div>
    );
};

export default Main;