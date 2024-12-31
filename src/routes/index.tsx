import { Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/common/Layout";
import Scheme from "../pages/Scheme";
import Target from "../pages/Target";
import Course from "../pages/Course";
import TrainingPartner from "../pages/TrainingPartner";
import Batch from "../pages/Batch";
import Candidate from "../pages/Candidate";
import Trainer from "../pages/Trainer";
import Assessors from "../pages/Assessors";
import Assessment from "../pages/Assessment";
import Placement from "../pages/Placement";
import Invoice from "../pages/Invoice";
import TrainingCenter from "../pages/TrainingCenter";

import Login from "../../src/components/auth/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import NotFound from "../pages/NotFound";

const Index = () => {
  return (
    <Routes>
    
      <Route path="Login" element={<Login />} />
      

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Scheme" element={<Scheme />} />
        <Route path="Scheme/Targets/:id" element={<Target />} />
        <Route path="Course" element={<Course />} />
        <Route path="TrainingPartner" element={<TrainingPartner />} />
        <Route path="TrainingPartner/Centeres/:id" element={<TrainingCenter />} />
        <Route path="Batch" element={<Batch />} />
        <Route path="Candidate" element={<Candidate />} />
        <Route path="Trainer" element={<Trainer />} />
        <Route path="Assessors" element={<Assessors />} />
        <Route path="Assessment" element={<Assessment />} />
        <Route path="Placement" element={<Placement />} />
        <Route path="Invoice" element={<Invoice />} />
      </Route>
      
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Index;
