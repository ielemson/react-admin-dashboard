import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'))

// console.log(token)
export default axios.create({
    // baseURL: "https://api.topnotchengineering.com/api",
    baseURL: "https://api.oxiltravel.com/api",
})
 