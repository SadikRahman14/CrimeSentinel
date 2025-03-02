// import { useState } from 'react'
// import { Routes, Route, Navigate } from "react-router-dom";
// import './App.css'
// import LandingPage from './pages/landingPage.jsx';
// import GreenBeck from './pages/greenbeck.jsx';
// import Experiment from './pages/practice.jsx';
// import Experiments from './pages/graph.jsx';
// import Login from './pages/login.jsx';
// import SignUp from './pages/signUp.jsx';
// import HeatMap from "./pages/HeatMap";

// function App() {

//   return (
//     <>
//       <Routes>
//           <Route path="/" element={<LandingPage />} /> 
//           <Route path="/user/login" element={<Login />} /> 
//           <Route path="/user/sign-up" element={<SignUp />} /> 
//           <Route path="/greenbeck" element={<GreenBeck />} />
//           <Route path="/practice" element={<Experiment />} />
//           <Route path="/graph" element={<Experiments />} />
//           <Route path="/HeatMap" element={<HeatMap />} />
//       </Routes>
//     </>
//   )
// }

// export default App;

import React from "react";
import Home from "./pages/Home";
import RecentCrimes from "./pages/RecentCrimes";
import CrimeCategories from "./pages/CrimeCategories";
import CommunitySafety from "./pages/CommunitySafety";
import CommunityFeedback from "./pages/CommunityFeedback";
import NewsBlog from "./pages/NewsBlog";
import Footer from "./pages/Footer"; 


function App() {
  return (
    <div className="App">
      <Home />
      <RecentCrimes />
      <CrimeCategories />
      <CommunitySafety /> 
      <CommunityFeedback />
      <NewsBlog />
      
      {}
      <Footer />
    </div>
  );
}

export default App;


