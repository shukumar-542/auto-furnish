import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import {Link, useNavigate} from 'react-router-dom'


const Review = () => {
      const [cart, setCart] = useState([])
      let navigate = useNavigate();
      const [placeOreder, setPlaceOrder] = useState(false)
      const palceOrder =()=>{
            navigate('/shipment')
      }
      const removeProduct =(productkey)=>{
            const newCart = cart.filter(pd => pd.key !== productkey)
            setCart(newCart)
            removeFromDatabaseCart(productkey)
      }
      useEffect(()=>{
            const savedCart = getDatabaseCart();
            const productsKey = Object.keys(savedCart);
            // const productvalue = Object.values(savedCart)

            const cartProducts = productsKey.map(key =>{
                  const products = fakeData.find(pd =>pd.key === key)
                  products.quantity = savedCart[key]
                  return products
            })
            setCart(cartProducts)
            // cartProducts.quantity = productvalue
            // console.log(cartProducts);
            // console.log(productvalue);
      },[])
      // console.log(cart);
      let thanks
      if(placeOreder){
            thanks = <h1>Thank You For Your Order.</h1>
      }

      return (
            <div className="mt-28 flex container mx-auto">
                  <div className="flex">
                  <div>
                  {
                        cart.map(pd => <ReviewProducts removeProduct={removeProduct} product ={pd} key={pd.key}  /> )
                  }
            
                  </div>
                  {
                        thanks
                  }

                   <div className="bg-gradient-to-t from-sky-400 to-sky-900 shadow-lg p-10 h-96 ">
                      <Cart cart={cart}>
                      <button onClick={palceOrder} className="bg-gradient-to-r from-sky-400 to-sky-900 text-white font-semibold text-xl rounded-lg py-2 px-5 hover:from-sky-900 hover:to-sky-400 shadow-md text-center mt-10">
                        Place Order</button>
                      </Cart>
                  </div>
                  </div>
            </div>
      );
};

export default Review;