import tabelaEvent from "../controller/tabelaEvento.controller.js"
import HabitosAPI from "../controller/renderizarHabitos.controller.js"
import FiltroMain from "../controller/filtroMain.controller.js"
import EditarHabito from "../controller/modalEditarHabito.controller.js"
import ModalExcluir from "../controller/modalExcluir.controller.js"

const botoesTabela = new tabelaEvent()

const navegacaoTabela = new FiltroMain()

const navegacaoModalEditar = new EditarHabito()

const navegacaoModalExcluir = new ModalExcluir()

HabitosAPI.renderiarHabitos()


