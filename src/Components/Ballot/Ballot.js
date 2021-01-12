import { useState, useEffect } from 'react';

import store from '../../store';
import BallotCategory from '../BallotCategory/BallotCategory';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Ballot = () => {
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selections, setSelections] = useState({});
  const [success, setSuccess] = useState(false);

  function foundError() {
    if (error && error.length) return true;
    return false;
  }

  function setIsLoaded() {
    store.dispatch({ type: 'loading/complete' });
  }

  // Load data on init
  useEffect(() => {
    fetch('/api/getBallotData')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded();
          setCategories(result.items);
        },
        (error) => {
          setIsLoaded();
          setError(error);
        }
      )
  }, []);

  // Nominee selection handler
  function selectionHandler(catId, nomId) {
    let newSelections = { ...selections };

    newSelections[catId] = nomId;
    setSelections(newSelections);

    setError(null); // Reset error

    console.log('newSelections', newSelections); // Left this in just to show off :]
  }

  // Form submit
  function submitForm() {
    let errorFound = false;

    // Validate
    if (categories && categories.length) {
      if (Object.keys(selections).length < categories.length) {
        errorFound = true;
        setError('You must make a selection for each category.');
      }
    }

    if (!errorFound)
      setSuccess(true);
  }

  return (
    <div className='ballot'>
      {success &&
        <Modal
          show
          size="lg"
          backdrop="static"
          keyboard={false}
          animation={false}
          centered
        >
          <Modal.Header className="bg-light">
            <Modal.Title className="text-success">Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="px-3 py-5 bg-dark text-center">
              <p>Your nominations have been submitted. You will recieve your Movie Awards 2021 invitation with 2 (two) admission tickets within 2 to 4 weeks. Please do not hesitate to call our Customer Service support line to hold the tickets at Will Call, or with any further questions.</p>
              <p>Thank you for your time.</p>
            </div>
          </Modal.Body>
        </Modal>
      }
      {(categories && categories.length) ?
        categories.map((cat, index) => {
          return (
            <BallotCategory key={`cat-${cat.id}`} cat={cat} saveSelection={selectionHandler} />
          );
        })
        : <div className="py-5 text-center">No ballot categories found.  Please run `yarn backend` and refresh this page.</div>
      }
      {foundError() &&
        <div className="py-5 text-center text-danger">{error}</div>
      }
      {(categories && categories.length) &&
        <div className="pt-4 text-center">
          <Button variant="primary" size="lg" onClick={submitForm}>
            Submit Nominations
          </Button>
        </div>
      }
    </div >
  )
}

export default Ballot;