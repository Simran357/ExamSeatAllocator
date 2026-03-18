import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:5002/api",
    timeout:10000,
    withCredentials:true
})

axiosInstance.interceptors.request.use(
    (config)=>{
        console.log("config",config)
     const jwtToken = sessionStorage.getItem("jwtToken")
     console.log("the jwtToken is getting from instance",jwtToken)
     if(jwtToken){
     config.headers.authorization = `Bearer ${jwtToken}`

     }
         return config

    }
)


axiosInstance.interceptors.response.use((response)=>{
    return response
})


export default axiosInstance