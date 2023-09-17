const DestinosController = require('../controllers/DestinosController.js');
const { Router } = require('express')

const router = Router();

router
    .get('/destinos', DestinosController.getAllDestinos)
    .get('/destinos/:id', DestinosController.getDestino)
    .get('/destinos-home', DestinosController.getLastDestinos)
    .post('/destinos', DestinosController.postDestino)
    .put('/destinos/:id', DestinosController.putDestino)
    .delete('/destinos/:id', DestinosController.deleteDestino)

module.exports=router