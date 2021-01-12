import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header className="App-header">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="mr-auto">
            <img
              src={'https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg'}
              width="100"
              height="auto"
              className="App-logo d-inline-block align-top"
              alt="DailyPay logo"
            />
          </Navbar.Brand>
          <div className="navbar-title">
            Movie Awards 2021
        </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;