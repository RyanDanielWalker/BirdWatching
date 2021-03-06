import React from 'react';
import NavigationDropdown from './NavigationDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h1>Bird Watching</h1>
          </Col>
          <Col>
            <NavigationDropdown />
          </Col>
        </Row>
      </Container>
    </React.Fragment >
  );
}

export default Header;