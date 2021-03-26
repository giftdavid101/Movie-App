import axios from 'axios'

const mvRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: process.env.REACT_APP_API_BASE_LINK,
        language:'en-US',
    }
})

mvRequest.interceptors.request.use((config)=>{
    console.log(config)
    return config
},(err)=>{return Promise.reject(err)})

export default mvRequest;