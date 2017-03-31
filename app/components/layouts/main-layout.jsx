import React from 'react';
import { Link } from 'react-router';
import Welcome from '../Welcome';

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
      <main>
        <Welcome />
      </main>
       
    </div>
   
  );
}
