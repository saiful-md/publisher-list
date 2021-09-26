import React from 'react';

const Cart = (props) => {
    console.log(props);
    const get = props.element;
    let add = 0;
    let writer = [];
    for (const element of get){
        add = add + element.novals;
        writer = writer + element.name;
    }
    return (
        <div>
            <div className="poet-cart">
                <h3>Selected writers: {props.element.length}</h3>
                <h2>total novels: {add}</h2>
                <div>
                    <h5>writer name: <span> {writer}</span> </h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;