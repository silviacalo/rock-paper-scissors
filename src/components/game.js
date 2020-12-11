import { useState } from 'react';
import Score from './score.js';
import Buttons from './buttons.js';

function Game() {
  const [score, setScore] = useState(0);
  return (
    <>
      <div className="row">
        <div className="col-6 offset-3">
          <Score score={score}/>
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default Game;