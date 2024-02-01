import express from 'express'
const router = express.Router()
import {  criarCerveja, getCervejas, atualizarCerveja, apagarCerveja, getCervejaPeloId } from '../controllers/cervejas.js'

router.post('/cervejas', criarCerveja)
router.get('/cervejas', getCervejas)
router.get('/cervejas/:id', getCervejaPeloId)
router.put('/cervejas/:id', atualizarCerveja)
router.delete('/cervejas/:id', apagarCerveja)

export { router }