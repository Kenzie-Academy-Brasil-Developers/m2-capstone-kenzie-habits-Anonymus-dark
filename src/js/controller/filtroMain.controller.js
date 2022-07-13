import HabitosAPI from "../controller/renderizarHabitos.controller.js"

export default class FiltroMain {

    constructor(){

        this.navegacao = document.querySelector(".funcoesTabela__navegacao")

        this.navegacao.addEventListener("click", this )
    }

    handleEvent( event ){ 

        const { target:{ innerText } } = event

        this.carrgarTodos( innerText )

        this.carrgarConcluidos( innerText )
    }

    carrgarTodos( innerText ){

        if( innerText === "Todos" ){

            HabitosAPI.renderiarHabitos()
        }

    }

    carrgarConcluidos( innerText ){

        if( innerText === "Concluidos" ){
            
            HabitosAPI.renderizarHabitosConcluidos()
        }

    }
}