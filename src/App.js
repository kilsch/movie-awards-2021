import { connect } from "react-redux";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Ballot from './Components/Ballot/Ballot';

const App = ({ isLoading }) => {
  return (
    <div className={"App text-light " + (isLoading ? 'loading' : 'loaded')}>
      <Header />
      <div className="App-body py-5">
        <Container>
          <Row>
            <Ballot />
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  const isLoading = state.isLoading;
  return { isLoading };
};

export default connect(mapStateToProps)(App);
