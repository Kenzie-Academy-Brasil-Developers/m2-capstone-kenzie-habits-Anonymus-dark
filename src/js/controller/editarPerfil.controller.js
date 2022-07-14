
import UserRequest from "../controller/UserRequest.controller.js"

async function editar() {
    const btnEditar = document.getElementById("editarPerfil");
    const entradaNome = document.getElementById("formEditarNome");
    const entradaImagem = document.getElementById("formEditarFoto");
  
    btnEditar.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const data = {};
  
      const elementos = [entradaNome, entradaImagem];
  
      elementos.forEach((elemento) => {
        if (elemento.value !== "") {
          data[elemento.name] = elemento.value;
        }
      });
      console.log(data);
  
      await UserRequest.updateProfile(data)
    });
  }
  
  editar();