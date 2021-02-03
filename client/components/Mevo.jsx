import React from 'react'
import { getVehicles, homeZones } from '../api/api'


class Mevo extends React.Component {

    state = {
        vehicleLocation: {},

    }

    // using compDidMount to load data through state
    // allowing on refresh to show update
    componentDidMount() {
        this.vehicleData()

        // .then((data) =>{
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

        const MevoApi = this.state.vehicleLocation 

        return (
            <>
                <h2>mevo data</h2>
                

            </>
        )
    }
}


export default Mevo;