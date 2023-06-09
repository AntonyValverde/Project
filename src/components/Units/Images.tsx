import { useState } from 'react';

const image = () => {
  const [flipped, setFlipped] = useState(false);

  const flipImage = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flip-container ${flipped ? 'flipped' : ''}`} onClick={flipImage}>
      <div className="flipper">
        <div className="front">
          <img src="imagen1.jpg" alt="/1.png" />
        </div>
        <div className="back">
          <img src="imagen2.jpg" alt="/2.png" />
        </div>
      </div>
    </div>
  );
};

export default image;