const express = require("express");
const router = express.Router();
const usuarioController = require('./controllers/usuarios');
const ocorrenciaController = require('./controllers/ocorrencias');

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo");
};

// USUÁRIOS
router.get('/usuarios', usuarioController.listar);
router.post('/usuarios', usuarioController.cadastrar);
router.put('/usuarios/:id', usuarioController.atualizar);
router.delete('/usuarios/:id', usuarioController.excluir);
router.post('/usuarios/login', usuarioController.login);

// OCORRÊNCIAs
router.get('/ocorrencias', ocorrenciaController.listar);
router.post('/ocorrencias', ocorrenciaController.cadastrar);
router.put('/ocorrencias/:id', ocorrenciaController.atualizar);
router.delete('/ocorrencias/:id', ocorrenciaController.excluir);

module.exports = router;