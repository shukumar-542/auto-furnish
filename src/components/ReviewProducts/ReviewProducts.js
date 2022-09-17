import React from 'react';
import Cart from '../Cart/Cart';

const ReviewProducts = (props) => {
      // console.log(props);
      const {name,quantity,img,price,key} = props.product
      const totalPrice = price * quantity
      return (
            <div className="py-10">
                  
                  <img src={img} alt="" />
                  <h1>{name}</h1>
                  <p>Quantity : {quantity}</p>
                  <p>Total Price : {totalPrice.toFixed(2)}</p>
                  <button onClick ={()=>props.removeProduct(key)} className="bg-gradient-to-r from-sky-400 to-sky-900 text-white rounded-lg py-2 px-5 hover:from-sky-900 hover:to-sky-400 shadow-md ">Remove Item</button>
            
                   
                    
            
             </div>
      );
};

export default ReviewProducts;