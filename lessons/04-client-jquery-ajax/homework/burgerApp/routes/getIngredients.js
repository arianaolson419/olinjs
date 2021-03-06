var path = require('path');
var Ingredient = require("../models/ingredientModel");

var routes = {}

routes.getIngredients = function(req, res) {
	res.render("home");
}

routes.postIngredients = function(req, res) {
	var body = req.body;
	Ingredient.create({name: body.name, amount: true, price: body.price}, function (err, data){
		res.json(data)
	});
}

module.exports = routes;