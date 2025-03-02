import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import './App.css'
import LandingPage from './pages/landingPage.jsx';
import GreenBeck from './pages/greenbeck.jsx';
import Experiment from './pages/experiment.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signUp.jsx';
import Query from './pages/query.jsx';
import Reports from './pages/reports.jsx';
import ReportDetails from './pages/singleReport.jsx';


function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/user/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
          <Route path="/user/sign-up" element={!user ? <SignUp /> : <Navigate to={"/"} />} />
          <Route path="/greenbeck" element={<GreenBeck />} />
          <Route path="/experiment" element={<Experiment />} />
          <Route path="/query" element={<Query />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:id" element={<ReportDetails />} />
      </Routes>
    </>
  )
}

export default App;
