/*
* GameLoop du jeu. Stock les fonctions de base du jeu (Pause, resume)
*/
define([
	"jquery",
	"underscore",
	"howler",
	"src/utils/debug/Debug",
	"src/utils/debug/Stats",
	"src/utils/game/Time",
	"src/utils/math/Vector2",
	"src/utils/display/Camera",
	"src/utils/display/Canvas",
	"src/utils/display/Graphics",
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/assetsmanager/SoundManager",
	"src/game/controller/Controller",
	"src/game/controller/Keyboard",
	"src/game/controller/GamePad",
	"src/utils/display/Renderer"
],
function (
	$,
	_,
	howler,
	Debug,
	Stats,
	Time,
	Vector2,
	Camera,
	Canvas,
	Graphics,
	SpriteManager,
	SoundManager,
	Controller,
	Keyboard,
	GamePad,
	Renderer
) {
	var GameManager = function () {
		
	}


	/**
	 * Initialisation du jeu.
	 */
	GameManager.prototype.init = function () {
		Debug.success("GameManager initialised.");
		Stats.init();
		rot = 0;
		Canvas.init();
		Controller.init();
		Keyboard.init();
		GamePad.init();
		Time.init();
		gameloop();
	}


	/**
	 * Execute toutes les updates des managers
	 */
	function update () {
		GamePad.update();
	}


	/**
	 * Execute toutes les collisions
	 */
	function collider () {

	}


	/**
	 * Met à jours les animations
	 */
	function animate () {

	}


	/**
	 * Permet de dessinner sur le canvas.
	 */
	function render () {
		Camera.move(0, 0);
		rot += Math.PI;
		Graphics.fillRect(100, 100, 300, 300, 1); // debug
		Graphics.fillRect(1700, 1000, 300, 300, 1);
		Graphics.fillRect(0, 0, 300, 300, 1);
		
		var objectTest = new Renderer({
			position : new Vector2(800, 300),
			pivot : new Vector2(50, 50),
			width : 100,
			height : 100,
			image : "chrome",
			scale : 5,
			rotation : 2,
			useCamera : true
		});

		objectTest.rotation = this.rot;
		Graphics.renderObject(objectTest);
	}


	/**
	 * Gameloop principal du jeu
	 */
	function gameloop () {
		Stats.begin();
		Time.updatedt();
		Canvas.cleanCanvas();
		update();
		collider();
		animate();
		render();
		Stats.end();
		window.requestAnimationFrame(gameloop);
	}


	/**
	 * Enlève la pause du jeu
	 */
	GameManager.prototype.resume = function () {
		/**
		 * TO DO : Resume puis enlever l'écran de pause
		 */
	}


	/**
	 * Met le jeu en pause
	 */
	GameManager.prototype.pause = function () {
		/**
		 * TO DO : Mettre la pause puis loadScreen l'écran de pause
		 */
	}


	return new GameManager();
});