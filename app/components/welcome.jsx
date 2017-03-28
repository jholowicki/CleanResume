import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

const welcome = React.createClass({
  render: function() {
    return (
    <Row>
      <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}>
        <div className="welcome-page">
        <h1>Clean Resume Company</h1>
        <p>This is the welcome page selling our services.</p>
        
      </div>
      </Col>
      <Col xs={6} md={4}></Col>
    </Row>

    );
  }
});

export default welcome;