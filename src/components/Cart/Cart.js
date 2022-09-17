import React from 'react';
const Cart = (props) => {
      const cart = props.cart
      const formatNumber =(num)=>{
            const pricision = num.toFixed(2)
            return pricision;
      }
      // console.log(cart);
      const total = cart.reduce((total,pd)=> total + pd.price *pd.quantity,0);
      let shipping = 0;
      if(total > 200){
            shipping = 2
      }
      else if(total >100){
            shipping = 3
      }
      else if(total > 0){
            shipping =4
      }
      const taxtVat = total / 10;
      const grandTotal = total + shipping + taxtVat;
      return (
            <div className=" flex flex-col justify-center ">
                  <div className="space-y-2">
                  <h1 className="flex items-center justify-center text-white font-bold text-2xl mx-auto">Order Summery</h1>
                  <p className="text-white">Total Order : {cart.length}</p>
                  <p className="text-white">Total Order : $  {formatNumber(total)}</p>
                  <p className="text-white">Shipping Cost: $ {shipping}</p>
                  <p className="text-white">Tax/Vat : {formatNumber(taxtVat)}</p>
                  <p className="text-white">Total Price :$ {formatNumber(grandTotal)}</p>
                  {
                        props.children
                  }
                  </div>
                  
            </div>
      );
};

export default Cart;