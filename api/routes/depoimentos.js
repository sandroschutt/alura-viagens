const DepoimentosController = require('../controllers/DepoimentosController.js');
const { Router } = require('express')

const router = Router();

router
    .get('/depoimentos', DepoimentosController.getAllDepoimentos)
    .get('/depoimentos/:id', DepoimentosController.getDepoimento)
    .get('/depoimentos-home', DepoimentosController.getLastDepoimentos)
    .post('/depoimentos', DepoimentosController.postDepoimentos)
    .put('/depoimentos/:id', DepoimentosController.putDepoimentos)
    .delete('/depoimentos/:id', DepoimentosController.deleteDepoimentos)

module.exports=router