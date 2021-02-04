import React from 'react';

// Class imports 
import Mapbox from './Mapbox'
import { fetchVehicles } from '../api/api'

class App extends React.Component {
  state = {
    vehicleLocations: [],
    homeZones: []
  }

  // Mevo data
  /**
   * 
   */
  componentDidMount() {
    this.getVehicleData()
  }

  /** Component calls api method to retrieve js array of vehicle positions */
  getVehicleData = () => {
    fetchVehicles()
      .then(vehicleLocations => {
        this.setState({
          vehicleLocations: vehicleLocations
        })
      })
  }

  render() {
    return (
      <div>
        <Mapbox vehicleLocations={this.state.vehicleLocations} />
      </div>
    )
  }
}

export default App;