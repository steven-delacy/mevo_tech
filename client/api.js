import request from 'superagent'

const superagent = require('superagent');

const mevoUrl = 'https://api.mevo.co.nz/vehicles/all'

export function getVehicles() {
    return request
        .get('/vehicles/all')

        .then(res => res.body)
}

export function getHomeZone() {
    return request
        .get('/home-zones/all')
        .then(res => res.body)
}