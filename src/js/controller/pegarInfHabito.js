import HabitRequest from "../controller/HabitRequest.controller.js"


export default class PegarInfHabito {
    constructor() {
        this.titulo = document.querySelector('#formLabelTitulo')
        this.descricao = document.querySelector('#formLabelDescricao')
        this.categoria = document.querySelector('#formLabelCategoria')
        this.botao = document.querySelector("#criarHabitoForm")
        this.sair = document.querySelector('#exit')
        this.total = document.querySelector('#backgroundCriarHabit')

        this.botao.addEventListener('submit', this)
        this.sair.addEventListener('click', () => {
            this.total.style.display = 'none'
        })
    }
    handleEvent() {
        const tudo = {
            "habit_title": this.titulo.value,
            "habit_description": this.descricao.value,
            "habit_category": this.categoria.value
        }
        HabitRequest.createHabit(tudo)
        window.reload()
    }
}