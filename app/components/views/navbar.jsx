import React from 'react';
import { Link } from 'react-router';


const Navbar = React.createClass({
  render: function() {
    return (
            <nav className="black-nav">

                    <span className="brand">
                        <Link to="/">Clean Resume Services</Link>
                    </span>

                <div>
                    <ul className="pull-right">
                        <li><Link to="/login">Login</Link></li>
                      <li>  <Link to="/logout">Sign-Up</Link> </li>
                    </ul>
                </div>
            </nav>
        );
  }
});
export default Navbar;
