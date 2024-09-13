import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TourForm from './TourForm';
import LandingPage from './LandingPage'; // Optional placeholder

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Tour Form Route */}
          <Route path="/submit-tour/en" element={<TourForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;