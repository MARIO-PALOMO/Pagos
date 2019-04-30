var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/conexion', controllers.Conexion.Conexion);
router.get('/conexionDatafast', controllers.PagoDatafast.Conexion);

module.exports = router;
