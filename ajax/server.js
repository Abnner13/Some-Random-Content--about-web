const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './Upload');
    },

    file: (req, file, callback) => {
        callback(null,`${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {

    upload(req, res, err => {
        if(err) {
            return res.end("Ocurred an error");
        }

        res.end('Concluido com sucesso!');
    })
});

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, _ => console.log("iniciando..."))
