import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

 export const userContext = createContext()
function App() {
  const [user, setUser] = useState({})
  // console.log(user);

  return (
    <userContext.Provider value={[user, setUser]}>
      <Header/>

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/product/:pdKey" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>} />
        <Route element={<PrivateRoute/>}>
        <Route path="/manage" element={<Inventory/>}/>
        <Route path="/shipment" element={<Shipment/>} />

        </Route>
      </Routes>
      <Footer/>
    </userContext.Provider>
  );
}

export default App;
