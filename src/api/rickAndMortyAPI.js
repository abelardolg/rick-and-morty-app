
import axios from "axios";

const rickAndMortyAPI = axios.create({
    baseURL: "http://localhost:200/api"
})

export default rickAndMortyAPI;