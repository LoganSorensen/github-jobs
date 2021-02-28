import axios from 'axios'

export const jobsAPI = () => {
    return axios.create({
        baseURL:
        "https://tranquil-bayou-42049.herokuapp.com/https://jobs.github.com/"
    })
}