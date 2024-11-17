# Work with third party micro-services

- create a new folder like trip_planner, then cd trip_planner
- initialize NPM pakages using npm init -y
- install required packages using npm install express cors sequelize axios pg dotenv

- " https://trip-planner-invact.vercel.app/api/v1/auth/register" use this like to get client_key and client_secret keys
- use postman or google to get these things.
- getting keys from postman or google is like this
  client_key:"5fa8d0f7-36e5-4ada-92f6-cc6875cc1059"
  client_secret:"7a90510a-4658-4769-a9d6-92137d8d746b"

- create a lib/axios.js file into the lib folder to create a axios instance

- in the axios.js file create instance of axios like this
  const axiosInstance = axios.create({
  baseURL: "https://trip-planner-invact.vercel.app/api/v1",
  headers: {
  CLIENT_KEY: process.env.CLIENT_KEY,
  CLIENT_SECRET: process.env.CLIENT_SECRET

      }

  })
- in the lib/axios.js file use the axios instance to make a request to the server to get the user data like this