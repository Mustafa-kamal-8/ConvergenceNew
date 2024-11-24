import {  Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/common/Layout";
import Scheme from "../pages/Scheme";

import Login from "../pages/Login";

const Index = () => {
  return (
      <Routes>
  <Route path="Login" element={<Login />} />
        <Route path="/" element={<Layout />}>
      
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Scheme" element={<Scheme />} />
       
        </Route>
      </Routes>
  );
};

export default Index;
