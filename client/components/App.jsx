import React from 'react';
import ReactDOM from 'react-dom'


// Class imports 
import Mapbox from './Mapbox'
import Mevo from './Mevo'


class App extends React.Component {

  render() {
    return (
      <div>
        <div className="mapbox-container">

          <Mapbox />
          
          
        </div>
        <Mevo />
      </div>
    )
  }
}

export default App;