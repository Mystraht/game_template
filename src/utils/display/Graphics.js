/**
 * Classe qui permet de gerer le resize, appliquer la caméra pour les elements graphiques du jeu et prend en charge la gestion du multilangue
 * TO DO : fillText avec gestion de la langue
 * TO DO : Refaire la fonction drawImage par renderObject
 */
define([
	"src/utils/debug/Debug",
	"src/utils/Config",
	"src/utils/display/Camera",
	"src/utils/display/Canvas",
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/math/Vector2"
],
function (
	Debug,
	Config,
	Camera,
	Canvas,
	SpriteManager,
	Vector2
) {
	var Graphics = function () {

	}


	/**
	 * Fonction fillRect du canvas avec la camera qui peut s'appliquer.
	 */
	Graphics.prototype.fillRect = function (x, y, width, height, useCamera) {
		if (typeof(useCamera) == "undefined") useCamera = true;
		var result = this.transform({
			position : new Vector2(x, y),
			width : width,
			height : height,
			useCamera : useCamera
		});
		Canvas.context.fillRect(result.position.x, result.position.y, result.width, result.height);
	}
	

	/*
	 * Dessine le contenu d'un renderer
	 */
	Graphics.prototype.renderObject = function (renderer) {
		var image = SpriteManager.get(renderer.image);
		// On applique le resize et la camera (si active)
		var result = this.transform({
			position : new Vector2(renderer.position.x, renderer.position.y),
			pivot : renderer.pivot,
			width : renderer.width,
			height : renderer.height,
			useCamera : renderer.useCamera
		});

		Canvas.context.save();

		scaledPivot = result.pivot;
		scaledPivot = scaledPivot.scale(renderer.scale);

		Canvas.context.translate(result.position.x, result.position.y);	
		Canvas.context.rotate(renderer.rotation);

		if (renderer.sposition == false) {
			Canvas.context.drawImage(image, -scaledPivot.x, -scaledPivot.y, result.width * renderer.scale, result.height * renderer.scale);
		} else {
			
		}
		Canvas.context.restore();
	}


	/**
	 * Applique la caméra et le resize sur des coordonnées
	 * @position Vecteur de la position
	 * @width Largeur
	 * @height Hauteur
	 * @useCamera Si la camera doit être appliqué ou non
	 */
	Graphics.prototype.transform = function (params) {
		if (typeof params.pivot == "undefined") params.pivot = new Vector2(0, 0);
		var result = {};

		/**
		 * On applique la caméra sur la position si useCamera = true
		 */
		if (params.useCamera) {
			result = Camera.apply(params.position, params.width, params.height);
		} else {
			result = {
				position : params.position,
				width : params.width,
				height : params.height
			}
		}
		result.pivot = new Vector2(params.pivot.x, params.pivot.y);
		result = this.resize(result);
		return result;
	}


	/**
	 * Redimentionne l'element en fonction de la taille de la fenêtre en prenant en compte les safe zones
	 */
	Graphics.prototype.resize = function (params) {
		var ratio = Math.min(Canvas.Canvas.height / Config.SAFE_ZONE_HEIGHT, Canvas.Canvas.width / Config.SAFE_ZONE_WIDTH);
		var margin = Math.max(Canvas.Canvas.height / Config.SAFE_ZONE_HEIGHT, Canvas.Canvas.width / Config.SAFE_ZONE_WIDTH);

		params.position.x *= ratio;
		params.position.y *= ratio;
		params.width *= ratio;
		params.height *= ratio;
		params.pivot.x *= ratio;
		params.pivot.y *= ratio;

		/*if (Canvas.Canvas.height / Config.SAFE_ZONE_HEIGHT > Canvas.Canvas.width / Config.SAFE_ZONE_WIDTH && Canvas.Canvas.width / Canvas.Canvas.height < 16 / 9) {
			params.y += (margin - ratio) * Config.SAFE_ZONE_HEIGHT;
		}*/

		return params;
	}


	return new Graphics();
});