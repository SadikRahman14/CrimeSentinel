// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import CrimeReports from './components/crimeReports';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Crime Sentinel</h1>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/crime-reports" element={<CrimeReports />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
