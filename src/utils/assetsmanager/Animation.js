/**
 * Permet de crée une animation disponible via un spriteSheet.
 * Cette classe va contenir toute les function animPause, onAnimEnd, setState etc et tout les differents spriteSheet
 */
 define([
 ],
 function (
 ) {
 	/*
 	 * Constructeur
 	 * @animationName Nom de l'animation
 	 */
 	var Animation = function (animationName) {
 		this.name = animationName
 		this.list = [{
			name: "player",
			animSpeed: 1000,
			key: [{
				x: 10,
				y: 10,
				width: 16,
				height: 16
			}, {
				x: 16,
				y: 16,
				width: 16,
				height: 16	
			}]
 		}]
 	}
 	

 	return Animation;
 });