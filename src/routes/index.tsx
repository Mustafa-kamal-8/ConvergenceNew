import {  Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/common/Layout";
import Scheme from "../pages/SchemeForm";
import SchemeExcel from "../pages/SchemeExcel";

const Index = () => {
  return (
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="SchemeForm" element={<Scheme />} />
          <Route path="SchemeExcel" element={<SchemeExcel />} />
        </Route>
      </Routes>
  );
};

export default Index;
