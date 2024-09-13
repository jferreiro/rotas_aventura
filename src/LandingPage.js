import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Rotas & Aventura</h1>
      <p>Plan your next adventure!</p>

      {/* Add a button to navigate to the tour submission form */}
      <Link to="/submit-tour/en">
        <button>Submit a Tour</button>
      </Link>
    </div>
  );
}

export default LandingPage;