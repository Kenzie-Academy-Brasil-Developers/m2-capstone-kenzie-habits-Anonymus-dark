


const titulo = document.querySelector('#formLabelTitulo')
const descricao = document.querySelector('#formLabelDescricao')
const categoria = document.querySelector('#formLabelCategoria')

const botao = document.querySelector('#btnForm')
console.log(botao)
botao.addEventListener((event)=>{
    event.preventDefault()
    console.log(titulo.value)
})