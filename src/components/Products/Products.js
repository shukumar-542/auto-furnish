import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Products = (props) => {
      const {name,img,price,key} = props.product
      // console.log(props);
      return (
            <div className=" sm:flex gap-10  items-end border-b-2 pb-10  hover:shadow-md  p-5 border-spacing-10">
                  <div className="flex-shrink-0" >
                        <img src={img} alt="" />
                        
                  </div>
                  <div className="space-y-5">
                        <Link to={`/product/${key}`}><p className=" text-sky-900 font-semibold decoration-slate-900 underline">{name}</p></Link>
                        <p>Price : {price}</p>
                        <button className="bg-gradient-to-r from-sky-400 to-sky-900 text-white rounded-lg py-2 px-5 hover:from-sky-900 hover:to-sky-400 shadow-md "
                        onClick={()=>props.handleAddProducts(props.product)}
                        >
                        <FontAwesomeIcon icon={faShoppingCart}  /> Add To Cart</button>
                  </div>
                  
            </div>
      );
};

export default Products;