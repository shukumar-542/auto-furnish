import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';


const ProductDetails = () => {
      const {pdKey}=useParams();
      const products = fakeData;
      // console.log(products);
      const product = products.find(pd => pd.key === pdKey)
      // console.log(product);
      const navigate =  useNavigate()

      const goback=()=>{
            navigate(-1)
      }

      return (
            <div className="mt-28 container mx-auto">
                  <div className="md:flex justify-between gap-10 p-5">
                        <div className="basis-1/3">
                              <img src={product.img} className="h-full w-full" alt="" />
                        </div>
                        <div className="basis-2/3 space-y-5">
                              <h1 className="text-2xl font-bold text-sky-900">{product.name}</h1>
                              <p className="text-red-600 text-xl font-bold">Price : $ {product.price}</p>
                              <p className=" text-xl font-semibold text-slate-600">Stock: {product.stock}</p>
                              <h1 className="font-bold text-2xl  text-sky-900 border-b-4  w-28 py-2 border-sky-900">Features</h1>
                              <p className="text-slate-600">{product.features}</p>
                              <button onClick={goback} className="bg-gradient-to-r from-sky-400 to-sky-900 text-white rounded-lg py-2 px-5 hover:from-sky-900 hover:to-sky-400 shadow-md ">Go For Order</button>

                        </div>
                  </div>
                  <div className="py-10 px-5">
                  <h1 className="font-bold text-2xl  text-sky-900 border-b-4  w-48 py-2 border-sky-900">Products Details</h1>
                  <p className="text-slate-600 mt-5">{product.productDetails}</p>

                  </div>
            </div>
      );
};

export default ProductDetails;