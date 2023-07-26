import axios from 'axios';
//https://cardapioback-api.onrender.com
const api = axios.create({
  // baseURL: 'http://localhost:3333'
  baseURL: 'https://backend-production-c28a.up.railway.app'
})

export { api };