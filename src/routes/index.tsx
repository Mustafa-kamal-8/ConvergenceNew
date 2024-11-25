import {  Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/common/Layout";
import Scheme from "../pages/Scheme";
import Target from "../pages/Target";
import Course from "../pages/Course";
import TrainingPartner from "../pages/TrainingPartner";
import Batch from "../pages/Batch";

import Login from "../pages/Login";

const Index = () => {
  return (
      <Routes>
  <Route path="Login" element={<Login />} />
        <Route path="/" element={<Layout />}>
      
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Scheme" element={<Scheme />} />
          <Route path="Target" element={<Target />} />
          <Route path="Course" element={<Course />} />
          <Route path="TrainingPartner" element={<TrainingPartner />} />
          <Route path="Batch" element={<Batch />} />
       
        </Route>
      </Routes>
  );
};

export default Index;
