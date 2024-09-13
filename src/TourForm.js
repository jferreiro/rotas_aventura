import React, { useState } from 'react';
import './TourForm.css';

function TourForm({ addTour }) {
  const [tour, setTour] = useState({
    name: '',
    location: '',
    startingPoint: '',
    destination: '',
    duration: '',
    distance: '',
    difficultyLevel: '',
    type: [],
    recommendedSeasons: [],
    specialHighlights: '',
    requiredEquipment: '',
    estimatedCost: '',
    description: '',
    gpsRoute: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour({
      ...tour,
      [name]: value,
    });
  };

  const handleMultipleChange = (e) => {
    const { options, name } = e.target;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setTour({
      ...tour,
      [name]: selectedOptions,
    });
  };

  const handleFileChange = (e) => {
    setTour({
      ...tour,
      gpsRoute: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tour.name && tour.location && tour.difficultyLevel && tour.description) {
      addTour(tour);
      setTour({
        name: '',
        location: '',
        startingPoint: '',
        destination: '',
        duration: '',
        distance: '',
        difficultyLevel: '',
        type: [],
        recommendedSeasons: [],
        specialHighlights: '',
        requiredEquipment: '',
        estimatedCost: '',
        description: '',
        gpsRoute: null,
      });
    } else {
      alert('Please fill in required fields.');
    }
  };

  return (
    <div className="tour-form-container">
      {/* Header with Image */}
      <div className="form-header">
      <img src={`${process.env.PUBLIC_URL}/tour-header.png`} alt="Motorcycle Tour" className="header-image" />
        <h2>Submit Your Motorcycle Tour</h2>
        <p>Fill out the form below to share your amazing tour experience!</p>
      </div>

      <form onSubmit={handleSubmit} className="tour-form">
        <div className="form-group">
          <label className="required">Tour Name</label>
          <input
            type="text"
            name="name"
            value={tour.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="required">Location</label>
          <input
            type="text"
            name="location"
            value={tour.location}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Starting Point</label>
          <input
            type="text"
            name="startingPoint"
            value={tour.startingPoint}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            value={tour.destination}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={tour.duration}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Distance (kms)</label>
          <input
            type="number"
            name="distance"
            value={tour.distance}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="required">Difficulty Level</label>
          <select
            name="difficultyLevel"
            value={tour.difficultyLevel}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Experience Type</label>
          <select
            multiple={true}
            name="type"
            value={tour.type}
            onChange={handleMultipleChange}
            className="form-input"
          >
            <option value="Scenic">Scenic</option>
            <option value="Urban">Urban</option>
            <option value="Mountain">Mountain</option>
            <option value="Coastal">Coastal</option>
            <option value="Historical">Historical</option>
            <option value="Adventure">Adventure</option>
            <option value="Leisure">Leisure</option>
            <option value="Sporty">Sporty</option>
          </select>
        </div>

        <div className="form-group">
          <label>Recommended Season</label>
          <select
            multiple={true}
            name="recommendedSeasons"
            value={tour.recommendedSeasons}
            onChange={handleMultipleChange}
            className="form-input"
          >
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        <div className="form-group">
          <label>Special Highlights/Attractions</label>
          <textarea
            name="specialHighlights"
            value={tour.specialHighlights}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Required Equipment</label>
          <textarea
            name="requiredEquipment"
            value={tour.requiredEquipment}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Estimated Cost (Euro)</label>
          <input
            type="number"
            name="estimatedCost"
            value={tour.estimatedCost}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="required">Description</label>
          <textarea
            name="description"
            value={tour.description}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label>GPS Route Upload</label>
          <input
            type="file"
            name="gpsRoute"
            onChange={handleFileChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">Submit Tour</button>
      </form>
    </div>
  );
}

export default TourForm;