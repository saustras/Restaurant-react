import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';

const routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default routers;
