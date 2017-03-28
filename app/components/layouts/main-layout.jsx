import React from 'react';
import { Link } from 'react-router';

// Stateless Functional Component for page layout.
// Add Nav Bar here.
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>

      <li><Link to="/login" activeClassName="active">Login</Link></li>
      <li><Link to="/signup" activeClassName="active">Logout</Link></li>
      <li><Link to="/logout" activeClassName="active">Signup</Link></li>
      <main>
        {props.children}
      </main>
    </div>
    );
}
