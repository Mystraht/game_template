/**
 * Box de collision appliquable sur un objet
 */
define([
	"src/utils/math/Vector2"
],
function (
	Vector2
) {
	/**
	 * Constructeur
	 * @position Vecteur de la position de la boite de collision par rapport à l'image
	 * @pivot Vecteur du point de pivot du collider
	 * @width Largeur du collider
	 * @height Hauteur du collider
	 */
	var Collider = function (params) {
		this.position = params.position || new Vector2(0, 0);
		this.pivot = params.pivot || new Vector2(0, 0);
		this.width = params.width || 1;
		this.height = params.height || 1;
	}


	return Collider;
});