import { default as Axios } from "axios";

const get = (url: string, config: any) => 
    Axios.get(url,config)
        .then((data) => data)

const apiURL = "http://localhost:8080"
const getProducts = () => get(apiURL+'/products',{})

const Api = {
    getProducts
}

export default Api;