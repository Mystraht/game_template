/**
 * Gère le Canvas, le resize etc
 */
define([
	"jquery",
	"src/utils/debug/Debug",
	"src/utils/Config"
],
function (
	$,
	Debug,
	Config
) {
	var Canvas = function () {
		
	}


	/**
	 * Initialise le Canvas et met sa taille en fonction de la taille stocké dans le fichier config ou full screen
	 */
	Canvas.prototype.init = function () {
		Debug.success("Canvas inisitalised.");
		if (Config.fullScreen) $('#gameContainer').append('<Canvas width="' + window.innerWidth + '" height="' + window.innerHeight + '" id="CanvasContainer"></Canvas>');
		else $('#gameContainer').append('<Canvas width="' + Config.WINDOW_WIDTH + '" height="' + Config.WINDOW_HEIGHT + '" id="CanvasContainer"></Canvas>');
		this.Canvas = $('#CanvasContainer')[0];
		this.context = this.Canvas.getContext("2d");
		window.addEventListener("resize", this.resize.bind(this));
	}


	/**
	 * Netois le Canvas, à mettre en début de gameloop
	 */
	Canvas.prototype.cleanCanvas = function () {
		this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	}


	/**
	 * Resize automatiquement le Canvas si le jeu est en full screen
	 */
	Canvas.prototype.resize = function (e) {
		if (Config.fullScreen) {
			this.Canvas.width = window.innerWidth;
			this.Canvas.height = window.innerHeight;
		}
	}


	return new Canvas();
});