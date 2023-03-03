import axios from 'axios'

const BASE_URL = 'http://localhost:5000'
const Axios = axios.create({baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}, 
)

export default Axios