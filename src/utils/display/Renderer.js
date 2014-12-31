/**
 * Utilisé par Graphics pour faire le rendu
 */
define([
	"src/utils/math/Vector2"
],
function (
	Vector2
) {
	/**
	 * Constructeur
	 * @position Vecteur de la position
	 * @pivot Vecteur de la position du point de pivot
	 * @sposition Vecteur de la position de l'image source qui va être coupé de l'image
	 * @rotation Rotation de l'image
	 * @image Nom de l'image
	 * @width Largeur de l'image
	 * @height Hauteur de l'image
	 * @swidth Largeur de l'image coupé
	 * @sheight Hauteur de l'image coupé
	 * @scale Echelle de l'image
	 * @canvasParam Paramètre additionnel pour le rendu (alpha etc)
	 * @useCamera Si l'objet utilise la camera ou non
	 */
	var Renderer = function (params) {
		this.position = params.position || new Vector2(0, 0);
		this.pivot = params.pivot || new Vector2(0, 0);
		this.sposition = params.sposition || false;
		this.width = params.width || 1;
		this.height = params.height || 1;
		this.swidth = params.width || false;
		this.sheight = params.width || false;
		this.rotation = params.rotation || 0;
		this.image = params.image || "default";
		this.scale = params.scale || 1;
		this.canvasParams = params.canvasParams || {};
		this.useCamera = params.useCamera || true;
	}


	return Renderer;
});