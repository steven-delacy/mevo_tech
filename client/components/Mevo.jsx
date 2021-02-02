import React from 'react'
import { getVehicles, homeZones } from '../api/api'


class Mevo extends React.Component {

    state = {

    }

    // using compDidMount to load data through state
    // allowing on refresh to show update
    componentDidMount() {
        console.log('got the data')
        this.getMevoData()
    }

    getMevoData = () => {
        getVehicles()
            .then(vehicles => {
                this.setState({
                    vehicles: vehicles,
                })
            })
        }


        // Will have to use Markers to show mevo vehicless

    render() {
        return (
            <>
                <h2> Mevo Data</h2>
                {this.state}
            </>
        )
    }
}


export default Mevo;