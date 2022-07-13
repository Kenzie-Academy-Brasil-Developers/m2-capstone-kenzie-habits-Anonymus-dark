export default class tabelaEvent {

    constructor(){

        this.tabela__body = document.querySelector(".tabela__body")

        this.tabela__body.addEventListener("click", this )
    }

    handleEvent( event ){

        const { target:{ name, className, checked } } = event

        this.checkbox( checked, name )

        this.editar( event, className )        

    }

    checkbox( checked, name ){  

        if( name === "habit_status" ){
            
            console.log( checked)

        }

    }

    editar( event, className ){
        
        if( className === "editarHabit__botaoEditar" || className === "botaoEditar__imagem" ){
         
        }
    }
}