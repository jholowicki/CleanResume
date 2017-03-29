import React from 'react';
import { Link } from 'react-router';

const Navbar = React.createClass({
  render: function() {
    return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <Link to="/" className="navbar-brand page-scroll" >Clean Resume Services</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link className="page-scroll" to="/login" >Login</Link>
                    </li>
                    <li>
                        <Link className="page-scroll" to="/signup">Sign-Up</Link>
                    </li>
                    <li>
                        <Link className="page-scroll" to="/logout" >Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        );
  }
});
export default Navbar;
