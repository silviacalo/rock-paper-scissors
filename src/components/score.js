function Score({score}) {
  return (
    <div className="header">
      <div className="d-flex justify-content-between align-items-center">
        <div className="header__title">
          Rock <br/>
          Paper <br/>
          Scissors
        </div>
        <div className="header__box-score d-flex flex-column align-items-center justify-content-between">
          <div>
            Score
          </div>
          <div className="header__number">
            {score}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;