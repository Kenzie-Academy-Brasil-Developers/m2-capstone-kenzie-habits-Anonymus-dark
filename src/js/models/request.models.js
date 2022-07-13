export default class Request {

    static url = "https://habits-kenzie.herokuapp.com/api"

    static token = localStorage.getItem( "@habits-kenzie:token" )

    static header = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${this.token}`
    }
}