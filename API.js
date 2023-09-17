import axios from 'axios'

const apiBase = axios.create({
    baseUrl: 'https://save-eats.cyclic.cloud/v1/saveeats'
})

export default apiBase