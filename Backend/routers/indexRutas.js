// const express = require('express');
// const router = express.Router();
const { Router } = require('express');
const router = Router();
const folderControllers = require('../controllers/folderControllers');
const todoControllers = require('../controllers/todoControllers');
const {Todo} = require('../db');


//Ruta de creacion de folder
router.post('/new-folder',
    folderControllers.createNewFolder
)
//Ruta de creacion de todo
router.post('/',async (req,res)=>{

    const {name}=req.body;
    
    const todoNew = await Todo.create({name});
    
    
    
    return res.send(todoNew)
}
)
//Ruta de cambios de todo
router.put('/todo/:id', 
    todoControllers.changeStateTodo
);
//Ruta de eliminacion de todo
router.delete('/todo/:id', 
    todoControllers.deleteTodo
);

router.get('/',async (req,res)=>{


    
    
    return res.send("SOY TODO")
}
)

module.exports= router;

