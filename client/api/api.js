import request from 'superagent'

const baseUrl = 'https://api.mevo.co.nz/public'

// Creating request to access mevo vehicle JSON
export function getVehicles() {
    return request.get(baseUrl + '/vehicles/all')
        .then(response => {
            console.log(response.text)
            return response.text
        })
}

// And again for homeZones
export function homeZones() {
    return request.get(baseUrl + '/home-zones/all')
        .then(response => {
            // console.log(response.text)
            return response.text
        })
}
