requirejs.config ({
	baseUrl : "",
	paths : {
		"jquery" : "libs/jquery/jquery.min",
		"howler" : "libs/howler.min",
		"underscore" : "libs/underscore-min",
		"stats" : "libs/debug/stats.min",
		"datgui" : "libs/debug/dat.gui.min"
	},
	shim : {
		"jquery" : {
			exports : "$"
		},
		"howler" : {
			exports : "Howl"
		},
		"underscore" : {
			exports : "_"
		},
		"stats" : {
			exports : "Stats"
		},
		"datgui" : {
			exports : "dat.gui"
		}
	},
	urlArgs : "d=" + Date.now()
});


define([
	"src/game/Game"
], function (
	game
) {
	game.init();
});