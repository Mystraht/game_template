/*
 * Initialise le jeu, lance tout les loader et démarre la gameLoop
 */
define([
	"src/utils/debug/Debug",
	"src/game/game/GameManager",
	"src/utils/loader/SpriteLoader",
	"src/utils/loader/SoundLoader"
],
function (
	Debug,
	GameManager,
	SpriteLoader,
	SoundLoader
) {
	var game_name = function () {

	}


	/*
	 * Initialise le jeu, lance tous les loaders puis démarre la gameloop
	 */
	game_name.prototype.init = function () {
		Debug.success("Game initialised.");
		SpriteLoader.init();
		SoundLoader.init();
		GameManager.init();
	}


	return new game_name();
});