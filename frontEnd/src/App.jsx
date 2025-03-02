import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/landingPage.jsx';
import GreenBeck from './pages/greenbeck.jsx';
import Experiment from './pages/practice.jsx';
import Experiments from './pages/graph.jsx';
import Experimentt from './pages/case.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signUp.jsx';

import Victims from "./pages/Victims";
import Offenders from "./pages/Offenders";  
import Witnesses from "./pages/Witnesses";
import Analytics from './pages/Analytics';


import HeatMap from "./pages/HeatMap";
import CrimeCases from "./pages/CrimeCases"; 

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
          <Route path="/case" element={<Experimentt />} />
          <Route path="/HeatMap" element={<HeatMap />} />


          <Route path="/experiment" element={<Experiment />} />
          <Route path="/query" element={<Query />} />
          <Route path="/victims" element={<Victims />} />
          <Route path="/offenders" element={<Offenders />} />
          <Route path="/witnesses" element={<Witnesses />} />
          <Route path="/analytics" element={<Analytics />} />

          <Route path="/crime-cases" element={<CrimeCases />} />  

      </Routes>
    </>
  );
}

export default App;
