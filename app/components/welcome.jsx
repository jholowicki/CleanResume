import React from 'react';

const Welcome = React.createClass({
  render: function () {
    return (
      <div className="row">
      <div className="row extra">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="welcome-page container">
            <h1>Clean Resume Services</h1>
            <p>This is the welcome page selling our services.</p>
          </div>

        </div>
        <div className="col-md-4"></div>
      </div>
     </div> 

    );
  }
});

export default Welcome;