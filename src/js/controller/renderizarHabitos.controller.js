import HabitRequest from "../controller/HabitRequest.controller.js"
import Habito from "../models/cardHabito.model.js"

export default class HabitosAPI {

    static tabela = document.querySelector(".tabela__body")

    static async renderiarHabitos(){

        const todosHabitos = await HabitRequest.readAll()

        HabitosAPI.tabela.innerHTML = ""
        
        todosHabitos.forEach( Habito.criar )
    }

    static async renderizarHabitosConcluidos(){

        const todosHabitos = await HabitRequest.readAll()
        
        const habitosConcluidos = todosHabitos.filter( objHabito => objHabito.habit_status === true )

        HabitosAPI.tabela.innerHTML = ""

        habitosConcluidos.forEach( Habito.criar )
    }
}