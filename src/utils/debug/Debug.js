/**
 * La class debug permet d'apporter des fonctions supplémentaire pour le debuggage (log, sucess, warn, error)
 */
define([
	"datgui",
	"src/utils/Config"
],
function (
	dat,
	Config
) {
	/*
	 * Initialisation du gui de debug
	 * Pour acceder à une valeur taper Debug.gui.variable
	 */
	var Debug = function () {
		if (Config.guiDebug) {
			// Initialisation de datgui
			// http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
			this.datgui = new dat.GUI();
			this.guiOption = function () {
				this.textInput = 0.5;
				this.radioBox = true;
				this.button = function () {
					alert("coucou");
				};
			}
			this.gui = new this.guiOption();
			this.datgui.add(this.gui, "textInput");
			this.datgui.add(this.gui, "radioBox");
			this.datgui.add(this.gui, "button");
		}
	}

	/**
	 * Envoi un message normal (noir) dans la console
	 */
	Debug.prototype.log = function (msg) {
		if (Config.debug) console.log(msg);
	}


	/**
	 * Envoi un message en vert dans la console
	 */
	 Debug.prototype.success = function (msg) {
	 	if (Config.debug) console.log("%c" + msg, "color:green;");
	 }


	/**
	 * Envoi un message orange dans la console
	 */
	Debug.prototype.warn = function (msg) {
		if (Config.debug) console.warn(msg);
	}


	/**
	 * Envoi un message rouge dans la console
	 */
	Debug.prototype.error = function (msg) {
		if (Config.debug) console.error(msg);
	}


	return new Debug();
});