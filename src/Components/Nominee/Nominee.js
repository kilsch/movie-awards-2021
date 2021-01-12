import React, { useState } from 'react';

import './Nominee.scss';
import Button from 'react-bootstrap/Button';

const Nominee = ({ nom, selectedNominee, onSelect }) => {
  const [isHovered, setHovered] = useState(false);

  function handleHover() {
    setHovered(!isHovered);
  }

  function handleSelect() {
    onSelect(nom.id);
  }

  return (
    <div className={"nominee text-center border py-3 px-1 mb-3" + 
        " " + (selectedNominee === nom.id ? "is-selected" : "not-selected") +
        " " + (selectedNominee === null ? "none-selected" : "other-selected") +
        (isHovered ? " hover" : "")}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      <div className="nominee-title px-2">{nom.title}</div>
      <div className="nominee-img mb-4">
        <img
          src={nom.photoUrL}
          width="100"
          height="auto"
          alt={nom.title + " poster"}
        />
      </div>
      <Button disabled={selectedNominee === nom.id} variant={selectedNominee === nom.id ? "dark" : "primary"} onClick={handleSelect}>
        {selectedNominee === nom.id ? "Selected" : "Select"}
      </Button>
    </div>
  )
}

export default Nominee;