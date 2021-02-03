import React from 'react'
import { getVehicles, homeZones } from '../api/api'

class Mevo extends React.Component {

    // using compDidMount to load data through state
    // allowing on refresh to show update
    state = {
        vehicleLocation: {},
        homeZones: {}
    }

    // Mevo data
    componentDidMount() {
        this.vehicleData()
        // .then((data) => {
        //     this.setState({
        //         vehicleLocation: JSON.parse(data)
        //     })
        // })
    }

    vehicleData = () => {
        console.log('this works')
        getVehicles()
            .then(vehicleLocation => {
                this.setState({
                    vehicleLocation
                }
                )
            })
    }

    // Will have to use Markers to show mevo vehicles
    render() {

        const vehicle = this.state.vehicleLocation
        // const home = this.state.homeZones
        return (
            <>
                <h2>mevo data</h2>
                <p>{vehicle.position}</p>

            </>
        )
    }
}

export default Mevo;