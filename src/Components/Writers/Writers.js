import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './Writers.css';

const Writers = (props) => {
    /* ===============destrucuring alll data from main file========= */
    const {birth, death, image, name, novals, remarkableNoval, status} = props.data;
    // add fontawsome...........
    const element = <FontAwesomeIcon className="font-icon" icon={faAddressBook} /> 
    return (
        <div className="single-poet">
            <div>
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
            </div>
            <div className="btn">
                {/* ........add event handler...l. */}
                <button className="add-btn" onClick={()=>props.button(props.data)}> {element} Add </button>
            </div>
            
        </div>
    );
};

export default Writers;