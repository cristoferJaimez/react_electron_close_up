import '../../css/ProgressBar.css';
function ProgressBar() {
    return (
      <div className="">
          <div className="box">
              <div className="percent">
                  <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>20<span>%</span></h2>
                  </div>
              </div>
              <h2 className="text">Progress</h2>
          </div>
      </div>
    );
  }
  
  export default ProgressBar;
  