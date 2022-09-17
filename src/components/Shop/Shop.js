import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import {addToDatabaseCart, getDatabaseCart} from './../../utilities/fakedb'
import {Link} from 'react-router-dom'


const Shop = () => {

      const first10 = fakeData.slice(0,10);
      const [products, setProducts] = useState(first10);
      const [cart, setCart] = useState([]);
      

      useEffect(()=>{
            const savedCart = getDatabaseCart();
            const productKey = Object.keys(savedCart)
           const previousCart = productKey.map(pdKey =>{
                  const product = fakeData.find(pd =>pd.key === pdKey)
                  product.quantity = savedCart[pdKey]
                  return product
            })
            setCart(previousCart)
      },[])

      const handleAddProducts = (product)=>{
            // const newCart = [...cart,product]
            let count = 1;
            let newCart;
            const sameProducts = cart.find(pd => pd.key === product.key)
            if(sameProducts){
                  count = sameProducts.quantity + 1;
                  sameProducts.quantity = count;
                  const others = cart.filter(pd => pd.key !== product.key);
                  newCart = [...others,sameProducts]
            }
            else{
                  product.quantity = 1;
                  newCart =[...cart,product]
            }
            setCart(newCart);
            // const sameProducts = newCart.filter(pd=>pd.key === product.key )
            // const counts = sameProducts.length
            addToDatabaseCart(product.key, count )
      }
      // console.log(products);
      return (
            <div className="mt-28 flex container mx-auto gap-5">
                 
               <div className="basis-3/4 space-y-10">
                  {
                        products.map(pd => <Products product = {pd} key={pd.key} handleAddProducts={handleAddProducts}/>)
                  }
               </div>
               
               <div className="bg-gradient-to-t from-sky-400 to-sky-900 shadow-lg p-10 h-96 ">
                        <Cart cart ={cart}>
                        <Link to="/review"><button className="bg-gradient-to-r from-sky-400 to-sky-900 text-white font-semibold text-xl rounded-lg py-2 px-5 hover:from-sky-900 hover:to-sky-400 shadow-md text-center mt-10">
                     Review Items</button></Link>
                        </Cart>
                  </div>
               
            </div>
      );
};

export default Shop;