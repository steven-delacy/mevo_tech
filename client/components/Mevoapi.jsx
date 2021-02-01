import React from 'react'
import request from 'superagent'


request.get('https://api.mevo.co.nz/vehicles/all')
    .then(res => {
        console.log(res.body)
    })

request.get('https://api.mevo.co.nz/home-zones/all')
    .then(res => {
        
    })

const Mevoapi = () => {

    console.log('render')

    return (

        <h1>HI!</h1>

    )
}


export default Mevoapi;