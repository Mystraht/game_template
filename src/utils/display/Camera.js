/*
 * Caméra du jeu
 * function move, zoom, etc
 * TO DO : Fonction move et fonction center
 */
define([
	"src/utils/math/Vector2"
],
function (
	Vector2
) {
	var Camera = function () {
		this.x = 0;
		this.y = 0;
		this.zoom = 1;
	}


	/**
	 * Fonction qui permet d'appliquer la camera sur des paramètres donnée et renvoi les paramètres
	 */
	Camera.prototype.apply = function (position, width, height) {
		return {
			position : new Vector2(position.x - this.x, position.y - this.y),
			width : this.zoom * width,
			height : this.zoom * height
		}
	}


	/**
	 * Permet de bouger la camera de position, si speed est à 0, la camera bouge instantannément
	 * Work in progress
	 */
	Camera.prototype.move = function (x, y, speed) {
		if (typeof(speed) == "undefined") speed = 0;
		this.x = x;
		this.y = y;
	}

	return new Camera();
});