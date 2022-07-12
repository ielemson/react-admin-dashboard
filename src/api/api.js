import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'))

// console.log(token)
export default axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL: "https://api.oxiltravel.com/api",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
         Authorization: `Bearer ${token}`
    }
})
 