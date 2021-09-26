import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // recieved data from api 
    const get = props.element;
    let add = 0;
    /* =========loop for get sinlge object======== */
    for (const element of get){
        add = add + element.novals;
        
    }
    return (
        <div>
            <div className="poet-cart">
                <h3>Selected writers: {props.element.length}</h3>
                <h3>Total novels: {add}</h3>
                <div>
                    <h5>writer name:  </h5>
                    <ol>
                        {/* =========add data in add cart============ */}
                        {
                            props.element.map(name => <li key={name.key}>{name.name}</li>)
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Cart;