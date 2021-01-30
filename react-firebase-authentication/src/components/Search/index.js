import React from 'react';
import Airplanes from '../API';
import Api from '../API';

const App = () => {

  return(
    <>
    <div className="Hero">
          <div className="HeroContainer">
            <h1>Search</h1>
                           
        </div>
        
     <Airplanes/>

      <div className="ResultWindow">
        <div className="ResultWindowContainer">
          <h1>results</h1>
        </div>
        
      </div> 
    </div>
    </>
  )
  }
 
export default App;