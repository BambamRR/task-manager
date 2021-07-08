const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const {mongoose} = require('./db/mongoose')
//Load in the mongoose models
const { List, Task } = require('./db/models');
// const { List } = require('./db/models/list.model')
// const { Task} = require('./db/models/task.model')

//Load middleware

app.use(bodyParser.json());

/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET/lists
 * retorna todas as listas de tarefas
 */

app.get("/lists", (req, res) => {
  //deve retornar uma array com todas as listas do banco;
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

/**
 * POST/lists
 * criar listas
 */

app.post('/lists', (req, res) => {
    //deve criar novas listas no banco do usuario(incluindo o ID)
    //as informações no campo das listas devem ser passadas via JSON req.body
    let title = req.body.title;

    let newList = new List({
        title
    })
    newList.save().then((listDoc) => {
        //uma lista completa com id
        res.send(listDoc);
    })
});

/**
 * PATCH/lists
 * atualizar lista
 */

app.patch('/lists/:id', (req, res)  => {
    //Deve atualizar as listas conforme o ID especificando o ID da lista a ser atualizada
    //gerando uma nova a partir de um campo JSON
});

/**
 * DELETE/lists
 * deleta uma lista específica
 */

app.delete('/lists/:id', (req, res) =>  {
    //deve deletar uma lista específica
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
