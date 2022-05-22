export const User = {
    name: 'string',
    surname: 'string',
    address: 'string',
    phone: 'string',
    email: 'string',
    postalCode: 'string',
    city: 'string',
    number: 'string',
    id: 'string',
    test: [{
        name: 'string',
        arr: ['string', 'name', { email: 'string' }],
        latlong: {
            lat: 'number',
            long: 'number',
            email: 'string'
        }
    }]
}

// override with casual definition
export const UserOverrides = {
    lat: 'latitude',
    long: 'longitude'
}
