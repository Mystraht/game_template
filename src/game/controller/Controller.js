/**
 * Contient tout les état des touches (appuyé ou non)
 */
define([
	"src/utils/debug/Debug",
	"src/utils/display/Canvas"
],
function (
	Debug,
	Canvas
) {
	var Controller = function () {
		// Etat actuel des touches
		this.left = 0;
		this.right = 0;
		this.up = 0;
		this.down = 0;
	}


	/**
	 * Initialise le controller
	 */
	Controller.prototype.init = function () {
		Debug.success("Controller initialised.");
	}


	return new Controller();
})