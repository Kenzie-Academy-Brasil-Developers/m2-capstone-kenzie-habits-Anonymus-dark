import tabelaEvent from "../controller/tabelaEvento.controller.js"
import HabitosAPI from "../controller/renderizarHabitos.controller.js"
import FiltroMain from "../controller/filtroMain.controller.js"
import EditarHabito from "../controller/modalEditarHabito.controller.js"

const botoesTabela = new tabelaEvent()

const navegacaoTabela = new FiltroMain()

const navegacaoModalEditar = new EditarHabito()

HabitosAPI.renderiarHabitos()


