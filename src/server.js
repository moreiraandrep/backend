const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('Connection', socket => {
    socket.on('ConnectRoom', box => {
        socket.join(box);
    })
});

mongoose.connect(
    'mongodb+srv://andre:andre123@cluster0-jcvtc.mongodb.net/omnibox?retryWrites=true',
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  //permite o envio de arquivos para nossa aplicação
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

server.listen(3333);