define([
],
function (
) {
	/**
	 * Configuration du jeu.
	 */
	var Config = function () {
		/**
		 * Information du jeu
		 */
		this.version = "0.0.0";
		this.language = "fr";

		/**
		 * Reglage écran
		 */
		this.fullScreen = false;
		this.ratio = 16 / 9;
		this.WINDOW_WIDTH = 1136; // Si fullScreen = false
		this.WINDOW_HEIGHT = 640; // *
		this.SAFE_ZONE_WIDTH = 2048;
		this.SAFE_ZONE_HEIGHT = 1366;

		/*
		 * Outils de debug
		 */
		 this.debug = true; // Active/Desactive les log dans la console
		 this.guiDebug = false; // Active/Desactive la gui de debugging
		 this.fps = false; // Active/Desactive le compteur de fps
		 this.ms = false; // Active/Desactive le compteur de ms par frame
		 this.showHitbox = false; // Active/Desactive l'affichage des hitbox
		 this.showPivot = false; // Active/Desactive l'affichage des points de pivots
	}


	return new Config();
});