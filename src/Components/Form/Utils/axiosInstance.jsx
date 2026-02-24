import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:5001/api",
    timeout:3000,
    withCredentials:true
})

axiosInstance.interceptors.request.use(
    (config)=>{
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