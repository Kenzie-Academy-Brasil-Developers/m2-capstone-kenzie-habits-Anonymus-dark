export default class tabelaEvent {

    constructor(){

        this.tabela__body = document.querySelector(".tabela__body")

        this.tabela__body.addEventListener("click", this )
    }

    handleEvent( event ){

        const { target:{ name, className } } = event

        this.checkbox( name )

        this.editar( className )        

    }

    checkbox( name ){

        if( name === "habit_status" ){
      
        }

    }

    editar( className ){
        
        if( className === "editarHabit__botaoEditar" || className === "botaoEditar__imagem" ){
         
        }
    }
}