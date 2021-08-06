const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const TodoRoutes=require('./indexRutas')
// const DietsTypes= require('./Diets')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/todo',TodoRoutes);



module.exports = router;
