var express = require('express');
var router = express.Router();

var objectID = require('mongodb').ObjectID;
var collection = require( '../../../mongoConnection' );
var COL = 'favorite';

router.post('/', function(req, res, next){
	console.log("NODE");
	console.dir(req.params.data)
	collection(COL).insertOne(req.body);
});

module.exports = router;
