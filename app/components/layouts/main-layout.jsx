import React from 'react';
import { Link } from 'react-router';
import Navbar from '../views/navbar';
import Welcome from '../Welcome';
import Footer from '../views/Footer';
// Stateless Functional Component for page layout.
// Structure:
//Bootstrap Grid
// Stateful Nav Bar
// Static Welcome
// Stateful Resume
// Stateful User Drafts
// Static Footer
export default function (props) {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="row container-fluid">
          <Welcome />
          <Footer />
        </div>
      </main>
    </div>
  );
}
