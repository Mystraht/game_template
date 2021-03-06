/**
 * Gestion du Keyboard, modifie les attributs de la class Controller
 */
define([
	"src/utils/debug/Debug",
	"src/game/controller/Controller"
],
function (
	Debug,
	Controller
) {
	var Keyboard = function () {
		// Constante des keycodes
		this.LEFT_KEYCODE = 37;
		this.RIGHT_KEYCODE = 39;
		this.UP_KEYCODE = 38;
		this.DOWN_KEYCODE = 40;
	}


	/**
	 * Ajoute les event de touche
	 */
	Keyboard.prototype.init = function () {
		Debug.success("Keyboard initialised.")
		window.addEventListener("keydown", keyDown, true);
		window.addEventListener("keyup", keyUp, true);
	}


	/**
	 * Appellé au moment ou une touche est pressé, cela met l'état de la touche correspondant à 1
	 */
	function keyDown (e) {
		changeKeyState(e.keyCode, 1);
	}


	/**
	 * Appellé au moment ou une touche est pressé, cela met l'état de la touche correspondant à 0
	 */
	function keyUp (e) {
		changeKeyState(e.keyCode, 0);
	}


	/**
	 * Change le statu d'une touche (Appuyé ou non)
	 */
	function changeKeyState(keyCode, state) {
		switch(keyCode) {
			case this.LEFT_KEYCODE:
				Controller.left = state;
				break;
			case this.RIGHT_KEYCODE:
				Controller.right = state;
				break;
			case this.UP_KEYCODE:
				Controller.up = state;
				break;
			case this.DOWN_KEYCODE:
				Controller.down = state;
				break;
		}
	}


	return new Keyboard();
});