import React from 'react'
import request from 'superagent'


class Mevoapi extends React.Component {

    componentDidMount() {
        console.log('componentDidMount')
        this.getVehicles()
    }

    // Creating request to access mevo vehicle JSON
    getVehicles() {
        request.get('https://api.mevo.co.nz/public/vehicles/all')
            .then(res => {
                const vehicles = response.body 
            })
    }

    // And again for homeZones
    homeZone() {
        request.get('https://api.mevo.co.nz/home-zones/all')
            .then(res => {
            })
    }


    render() {
        console.log('render')
        return (
            <>
                
                
            </>
        )
    }
}


export default Mevoapi;