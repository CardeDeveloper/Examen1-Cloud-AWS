var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen CLOUD' });
});

router.get('/autor', function(req, res, next) {
  res.json({ alumno: 'OACA' , servicio:"ECS en AWS");
});


module.exports = router;
