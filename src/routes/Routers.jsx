import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Allfoods from '../pages/Allfoods';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';
import FoodDetails from '../pages/FoodDetails';

const routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<Allfoods />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/fooddetail" element={<FoodDetails />} />
    </Routes>
  );
};

export default routers;
