export const Profile = {
    name: 'string',
    surname: 'string',
    address: 'string',
    address2: 'string',
    phone: 'string',
    email: 'string',
    postalCode: 'string',
    city: 'string',
    number: 'string',
    id: 'string',
    base: ['New York', 'Toronto'],
    test: [{
        'Testing': 'Testing', name: 'string', arr: ['string', 'name'],
        latlong: {
            lat: 'number',
            long: 'number',
            email: 'string',
        }
    }],
}

// override with casual definition
export const ProfileOverrides = {
    lat: 'latitude',
    long: 'longitude'
}
