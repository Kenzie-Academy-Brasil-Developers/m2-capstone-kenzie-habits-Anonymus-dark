import HabitRequest from "../controller/HabitRequest.controller.js"
import Habito from "../models/cardHabito.model.js"

export default class HabitosAPI {

    static async renderiarHabitos(){

        const todosHabitos = await HabitRequest.readAll()

        const tabela = document.querySelector(".tabela__body")

        tabela.innerHTML = ""
        
        todosHabitos.forEach( Habito.criar )
    }
}