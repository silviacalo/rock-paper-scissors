import Game from './components/game.js';

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Game/>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
        Coded by 
        {/* eslint-disable-next-line */}
        <a href="#">Silvia Calonghi</a>.
      </div>
    </div>
  );
}

export default App;
