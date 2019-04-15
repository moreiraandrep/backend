const Box = require('../models/Box');

class BoxController {
    async store(req, res) { /**req = requisição; res = resposta */
        const box = await Box.create({ title: req.body.title });

        return res.json(box);
    }

    async show(req, res) { //retorna a Box e todos os arquivos que estão dentro dela
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } } //retorna os registros decrescente, os mais novos primeiro
        });

        return res.json(box);
    }
}

module.exports = new BoxController();