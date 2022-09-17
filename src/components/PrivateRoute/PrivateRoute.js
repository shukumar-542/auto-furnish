import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = () => {
      const [user, setUser] = useContext(userContext)
      let location = useLocation()
      if(!user.email){
            return <Navigate to='/login' state={{from: location}}></Navigate>
      }
      return <Outlet></Outlet>
};

export default PrivateRoute;