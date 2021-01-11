import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Ballot from './Components/Ballot/Ballot';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App text-light">
      <Header />
      <Container className="App-body py-5">
        <Row>
          <Col>
            <Ballot />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
