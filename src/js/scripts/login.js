class pegarDadosDoUsuario{
    static dadosLogin(event){
        event.preventDefault()
        const data = {}
        const formDados = document.querySelectorAll('.linhas')
        data.email = formDados[0].value
        data.password = formDados[1].value
        console.log(data)
}
}

const botao = document.querySelector('#botaoLogin')
botao.addEventListener('click', pegarDadosDoUsuario.dadosLogin)













