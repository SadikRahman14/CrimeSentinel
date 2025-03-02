import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import './App.css'
import LandingPage from './pages/landingPage.jsx';
import GreenBeck from './pages/greenbeck.jsx';
import Experiment from './pages/practice.jsx';
import Experiments from './pages/graph.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signUp.jsx';
import Victims from "./pages/Victims";  // Import Victims component
import Offenders from "./pages/Offenders";  // Import Offenders component
import Witnesses from "./pages/Witnesses";
import Analytics from './pages/Analytics';

import HeatMap from "./pages/HeatMap";

import Query from './pages/query.jsx';


function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/user/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
          <Route path="/user/sign-up" element={!user ? <SignUp /> : <Navigate to={"/"} />} />
          <Route path="/greenbeck" element={<GreenBeck />} />

          <Route path="/practice" element={<Experiment />} />
          <Route path="/graph" element={<Experiments />} />
          <Route path="/HeatMap" element={<HeatMap />} />

          <Route path="/experiment" element={<Experiment />} />
          <Route path="/query" element={<Query />} />
          <Route path="/victims" element={<Victims />} />
          <Route path="/offenders" element={<Offenders />} />
          <Route path="/witnesses" element={<Witnesses />} />
          <Route path="/analytics" element={<Analytics />} />

      </Routes>
    </>
  )
}

export default App;



