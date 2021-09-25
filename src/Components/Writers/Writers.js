import React from 'react';



const Writers = (props) => {
    
    console.log(props)
    return (
        <div>
            <h4>{props.data.name}</h4>
            <img src={props.data.image} alt="" />
        </div>
    );
};

export default Writers;