const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

/**Dentro da API Rest existem 4 métodos principais:
 * GET usado pra buscar alguma informação da nossa API
 * POST usado quando for criar alguma coisa
 * PUT usado pra editar alguma coisa
 * DELETE usado para deletar algo
 */

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes; //exportando a variavel routes para ser importada no server.js