import React from 'react';
import ReactDOM from 'react-dom'


// Class imports 
import Mapbox from './Mapbox'


class App extends React.Component {

  render() {

    return (
      <div>
        <div className="mapbox-container">

          <Mapbox />

        </div>
      </div>
    )
  }
}

export default App;