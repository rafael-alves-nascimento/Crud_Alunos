import Axios from "axios"

const api = Axios.create({
    baseURL: "http://localhost:3005/alunos/"
});

export default api;