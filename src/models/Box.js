const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }] /**armazena os Id dos arquivos do Box */
}, {
        timestamps: true,
    });

module.exports = mongoose.model('Box', Box);