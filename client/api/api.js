import request from 'superagent'

const baseUrl = 'https://api.mevo.co.nz/public'

// Creating request to access mevo vehicle JSON
/** API call to fetch mevo vehicle locations
 * @returns JSON array of vehicle locations
 */
export function fetchVehicles() {
    return request.get(baseUrl + '/vehicles/all')
        .accept("application/json")
        .then(response => {
            return response.body
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
