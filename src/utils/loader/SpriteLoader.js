/**
* Load toutes les images et differents spritesheet du jeu
*/
define([
	"underscore",
	"src/utils/debug/Debug",
	"src/utils/assetsmanager/SpriteManager"
],
function (
	_,
	Debug,
	SpriteManager
) {
	var SpriteLoader = function () {
		this.baseFolder = "assets/img/"
		this.list = [
			{
				name: "chrome",
				path: this.baseFolder + "sprite/compatible_chrome.gif"
			},
			{
				name: "ie",
				path: this.baseFolder + "sprite/compatible_ie.gif"
			},
			{
				name: "firefox",
				path: this.baseFolder + "sprite/compatible_firefox.gif"
			}
		]

		this.totalToLoad = this.list.length;
		this.currentLoaded = 0;
	}


	/**
	 * Charge toutes les images puis les stock dans spriteManager
	 */
	SpriteLoader.prototype.init = function () {
		Debug.success("SpriteLoader initialised.");
		for (var i = 0; i < this.list.length; i++) {
			var image = new Image();
			image.src = this.list[i].path;
			image.onload = function () {
				this.currentLoaded++;
			}.bind(this);
			SpriteManager.push(this.list[i].name, image);
		}
	}


	/**
	 * Return la progression du chargement des sons (0 à 1)
	 */
	SpriteLoader.prototype.getProgress = function () {
		return this.currentLoaded / this.totalToLoad;
	}


	return new SpriteLoader();
});