import React from 'react';
import './Writers.css';

const Writers = (props) => {
    const {birth, death, image, name, novals, remarkableNoval, status} = props.data;
    console.log(props)
    return (
        <div className="single-poet">
            <div className="poet-image">
                <img src={image} alt="" />
            </div>
            <div className="poet-info">
                <h4>{name}</h4>
                <p>Birth: {birth}</p>
                <p>Date: {death}</p>
                <p>Novals: {novals}</p>
                <p>Notable work: {remarkableNoval}</p>
                <p>status: {status}</p>
            </div>
            <div className="btn">
                <button className="add-btn" onClick={()=>props.button(props.data)}>add </button>
            </div>
            
        </div>
    );
};

export default Writers;