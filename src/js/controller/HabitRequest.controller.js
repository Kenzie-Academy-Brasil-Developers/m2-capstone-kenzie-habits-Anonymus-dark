import Request from "../models/request.models.js"

export default class HabitRequest extends Request{

// this.token ou this.url ou this.header
    static teste(){

        console.log( this.token, this.url, this.header )

    }
}