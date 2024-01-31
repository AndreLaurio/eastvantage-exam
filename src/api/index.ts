import axios from "axios";

export function httpGetUser() {
    return axios.get("https://randomuser.me/api")
        .then(response => response.data)
        .catch(error => error?.response.dta)
}