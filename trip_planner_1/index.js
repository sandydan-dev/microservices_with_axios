require("dotenv").config()
const axiosInstance = require('./lib/axios')

axiosInstance
    .get("/health").then((result) => {
        console.log("Health Data ", result.data)
    }).catch((err) => {
        console.log("Error fetching the axios health ", err)
    });
//------------
const getFlight = async (origin, destination) => {
    try {
        const response = await axiosInstance.get('/flights/search', {
            params: {
                origin: origin,
                destination: destination
            }
        })
        return response.data
    } catch (error) {
        console.log("Error fetching the flight ", error)
    }
}

getFlight('bengaluru', 'dehradun')
    .then((flights) => {
        console.log("Flights Data ", flights);
    })
    .catch((err) => {
        console.error("Error fetching flights:", err);
    });


