import axios from "axios";
// konfigurasi awal untuk komunikasi dengan API backend
const customFetch = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        Accept: "application/json"
    }
})

export default customFetch;