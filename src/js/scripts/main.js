import HabitRequest from "../controller/HabitRequest.controller.js"
import tabelaEvent from "../controller/tabelaEvento.controller.js"
import Habito from "../models/cardHabito.model.js"

Habito.criar({
    "habit_id": 655,
    "habit_title": "teste myke",
    "habit_description": "apenas um post para testar no insomia",
    "habit_category": "saude",
    "habit_status": true
})

const botoesTabela = new tabelaEvent()