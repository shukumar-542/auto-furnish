import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';

const Shipment = () => {

      const [user, setUser] = useContext(userContext)
      const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


//   console.log(watch("example")); // watch input value by passing the name of it

  return (
<div className="py-32  bg-slate-600  space-y-4 flex justify-center items-center">
  <form onSubmit={handleSubmit(onSubmit)}>
  <div className='flex flex-col w-96   space-y-4'>


      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={user.name} {...register("name", { required: true })} className="bg-slate-200 focus:outline-none rounded-sm px-4 py-1 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500" placeholder="Enter Your Name" />
      {/* errors will return when field validation fails  */}
      {errors.name && <span className="text-yellow-400">This field is required</span>}

      <input defaultValue={user.email} {...register("email", { required: true })} className="bg-slate-200 focus:outline-none rounded-sm px-4 py-1 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500" placeholder="Enter Your Email" />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className="text-yellow-400">This field is required</span>}

      <input {...register("phone", { required: true })} className="bg-slate-200 focus:outline-none rounded-sm px-4 py-1 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500" placeholder="Enter Your Phone" />
      {/* errors will return when field validation fails  */}
      {errors.phone && <span className="text-yellow-400">This field is required</span>}

      <input {...register("address", { required: true })} className="bg-slate-200 focus:outline-none rounded-sm px-4 py-1 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500" placeholder="Enter Your Address" />
      {/* errors will return when field validation fails  */}
      {errors.address && <span className="text-yellow-400">This field is required</span>}
      
      <input className="bg-red-600 text-white rounded-sm cursor-pointer shadow-sm" type="submit" />
      </div>
    </form>

  
</div>
  );
};

export default Shipment;