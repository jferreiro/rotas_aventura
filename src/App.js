import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TourForm from './TourForm';
import LandingPage from './LandingPage'; 

// Component to display the list of tours
const TourList = ({ tours }) => (
  <div>
    <h2>Tour List</h2>
    <ul>
      {tours.map((tour, index) => (
        <li key={index}>
          <strong>{tour.name}</strong> - {tour.location} ({tour.duration} days, {tour.distance} kms) - Difficulty: {tour.difficultyLevel} <br/>
          <strong>Description:</strong> {tour.description} <br/>
          {tour.specialHighlights && <><strong>Highlights:</strong> {tour.specialHighlights} <br/></>}
          {tour.requiredEquipment && <><strong>Equipment:</strong> {tour.requiredEquipment} <br/></>}
          {tour.estimatedCost && <><strong>Estimated Cost:</strong> {tour.estimatedCost} EUR <br/></>}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [tours, setTours] = useState([]);

  const addTour = (tour) => {
    setTours([...tours, tour]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Tour Form Route */}
          <Route 
            path="/submit-tour/en" 
            element={
              <div>
                <TourForm addTour={addTour} />
                <TourList tours={tours} />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;