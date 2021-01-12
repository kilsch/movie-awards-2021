import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './BallotCategory.scss';
import Nominee from '../Nominee/Nominee';

const BallotCategory = ({ cat, saveSelection }) => {
  const [selectedNominee, setSelectedNominee] = useState(null);

  function selectHandler(nomId) {
    setSelectedNominee(nomId);
    saveSelection(cat.id, nomId); // Update parent
  }

  return (
    <div className='ballotCategory'>
      <Card bg="primary" className="mb-4">
        <Card.Header>
          {cat.title}
        </Card.Header>
        <Card.Body className="bg-light rounded-bottom">
          <Row>
            {cat.items && cat.items.length
              ? cat.items.map((nom, index) => {
                return (
                  <Col key={`nom-${nom.id}`} sm={6} md={4} lg={4} className='nominee-wrapper'>
                    <Nominee nom={nom} selectedNominee={selectedNominee} onSelect={selectHandler} />
                  </Col>
                );
              })
              : "No nominees found for this category."}
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BallotCategory;