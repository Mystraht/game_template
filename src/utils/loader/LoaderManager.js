/**
 * Fait le lien entre tous les loaders pour récuperer le chargement total
 */
define([
	"src/utils/loader/SoundLoader",
	"src/utils/loader/SpriteLoader"
],
function (
	SoundLoader,
	SpriteLoader
) {
	var LoaderManager = function () {
		
	}


	/*
	 * Permet de savoir l'état de progression total du chargement des assets
	 */
	LoaderManager.prototype.getProgress = function () {
		return (SoundLoader.getProgress() + SpriteLoader.getProgress()) / 2;
	}


	return new LoaderManager();
});