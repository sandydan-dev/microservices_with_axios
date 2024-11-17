require("dotenv").config()
const axiosInstance = require('./lib/axios')
// get health check
axiosInstance.get('/health', () => {
    console.log('health check passed')
})
    .then((response) => {
        console.log("Health Data ", response.data)
    })
//----------------------------------------

const getConcertsByArtistAndCity = async (artist, city) => {
    try {
        console.log(`Searching for concerts by ${artist} in ${city}`);

        const response = await axiosInstance.get('/concerts/search', {
            params: {
                artist: artist,
                city: city
            }
        })
        console.log(`API response status: ${response.status}`);
        console.log(`Response data:`, response.data);

        return response;
    } catch (error) {
        console.error(error)
        console.log('Failed to get concerts search data ', error.message)
    }
}
getConcertsByArtistAndCity("Taylor", "Las Vegas")
    .then((result) => {
        console.log("concerts data", result)
    }).catch((err) => {
        console.log("error to get reponse artist and city ", err)
    });