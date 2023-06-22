import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "662bd6a7c2464caabbc1836ab5086bca",
        language: "ko-KR"
    }
})

export default instance;