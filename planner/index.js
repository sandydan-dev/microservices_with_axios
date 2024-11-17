const axiosInstance = require('./lib/axios.js')

require('dotenv').config()

console.log(process.env.CLIENT_KEY)
console.log(process.env.CLIENT_SECRET)

// check if the environment variables are set
axiosInstance.get('/health')
    .then((response) => {
        console.log('Health Data ', response.data)
    }).catch((error) => {
        console.log("Getting Error health data ", error);
    });

// create and endpoint to get flight data like origin and destination data

const getFlightsData = async (origin, destination) => {
    try {
        console.log("origin ", origin, " destination ", destination)
        const response = await axiosInstance.get('/flights/search', {
            params: {
                origin: origin,
                destination: destination
            }
        })
        return response.data
    } catch (error) {
        console.log("cancel flights data ", error);
    }
}


getFlightsData('Mumbai', "Deharadhun")
    .then((result) => {
        console.log("flights data ", result)

    }).catch((err) => {

        console.log("Error getting flights data ", err);
    });