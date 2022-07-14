import HabitRequest from "./HabitRequest.controller.js"

HabitRequest

export default class EditarHabito {

    constructor() {

        this.modal = document.querySelector('.modal')

        this.modal.addEventListener('click', this)
    }

    async handleEvent(event) {

        event.preventDefault()

        const innerText = event.target.innerText

        const className = event.target.className
        // console.log(event.target)
        // console.log(event.path[5].id)
        if (innerText === 'X') {
            const modal = document.querySelector('.modal')
            modal.style.display = 'none'
        }

        if(className === "container"){
            const modal = document.querySelector('.modal')
            modal.style.display = 'none'
        }
        if(innerText === "Excluir"){
            
            const id = event.path[5].id
            const modalExcluir = document.querySelector('.fundo-background')
            
            this.modal.style.display = 'none'
            modalExcluir.style.display = 'flex'
            modalExcluir.id = id
            
            // window.location.href = "../../../index.html"
        }
        if(innerText === 'Salvar alterações'){
            const data = {}
            const formValue = [...event.srcElement.form]
            formValue.forEach((input) =>{
                if(input.value !== ''){
                    data[input.name] = input.value
                }
            })
        }
    }

}