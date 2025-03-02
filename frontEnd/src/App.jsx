import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LandingPage from './pages/landingPage.jsx';
import GreenBeck from './pages/greenbeck.jsx';
import Experiment from './pages/practice.jsx';
import Experiments from './pages/graph.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signUp.jsx';
import HeatMap from "./pages/HeatMap";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/user/login" element={<Login />} /> 
          <Route path="/user/sign-up" element={<SignUp />} /> 
          <Route path="/greenbeck" element={<GreenBeck />} />
          <Route path="/practice" element={<Experiment />} />
          <Route path="/graph" element={<Experiments />} />
          <Route path="/HeatMap" element={<HeatMap />} />
      </Routes>
    </>
  )
}

export default App;



// import { useState } from 'react'
// import { Routes, Route, Navigate } from "react-router-dom";
//  import './App.css'
//  import Experiment from './pages/graph.jsx';

// function App() {
//   return (
//     <>
//     <Routes>
//     <Route path="/graph" element={<Experiment />} />
//     </Routes>
//     </>

//   )

// }

// export default App;

