
const { Router }                = require('express');
const { check }                 = require('express-validator');
const { getPromptResponse }     = require('../controllers/gptController');
const { validarCampos }         = require('../middlewares/validadorCampos');


const router = Router();


router.post('/',
    [
        check('prompt', 'Se requiere el prompt').not().isEmpty(),
        // check('apiKey', 'Se requiere la apiKey').not().isEmpty(),
        validarCampos 
    ],
    getPromptResponse
);

module.exports = router;


