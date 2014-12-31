/**
 * Permet de stocké la position de l'objet, sa rotation et son echelle.
 * Peut contenir un renderer et un collider
 */
define([
	"src/utils/math/Vector2",
	"src/utlis/game/Collider",
	"src/utils/display/Renderer"
],
function (
	Vector2,
	Collider,
	Renderer
) {
	/**
	 * Constructeur
	 * @position Vecteur de la position 
	 * @rotation Rotation en radian
	 * @scale Echelle de l'objet
	 */
	var GameObject = function (params) {
		this.position = params.position || new Vector2(0, 0);
		this.rotation = params.rotation || 0;
		this.scale = params.scale || 1;
	}


	/**
	 * Ajoute un renderer au GameObject
	 * @rendererParams Objet contenant les paramètre du renderer
	 */
	GameObject.prototype.addRenderer = function (rendererParams) {
		this.renderer = new Renderer(rendererParams);
	}


	/**
	 * Ajoute un Collider au GameObject
	 * @colliderParams Objet contenant les paramètre du collider
	 */
	GameObject.prototype.addCollider = function (colliderParams) {
		this.collider = new Collider(colliderParams);
	}


	return GameObject;
});