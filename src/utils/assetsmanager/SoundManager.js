/**
 * Manager qui gère les sons
 */
define([
	"howler"
],
function (
	howler
) {
	var SoundManager = function () {
		// Volume général
		this.volume = {
			global: 100,
			sfx: 90,
			music: 90
		}

		this.list = [];
		this.currentMusicInstance = null;
	}


	/*
	 * Joue un son, peut avoir un callback appellé quand le son ce termine
	 */
	SoundManager.prototype.play = function (name, onend) {
		if (onend == "undefined") onend = null;

		var currentSound = -1;
		for (var i = 0; i < this.list.length; i++) {
			if (this.list[i].name == name) {
				currentSound = this.list[i];
				break;
			}
		}

		if (currentSound == -1) throw new Error("SoundManager : Sound \"" + name + "\" does not exist.");

		var volumeType = this.volume[currentSound.type] * (this.volume.global / 100);
		var volumeSound = currentSound.volume * (volumeType / 100);
		volumeSound /= 100;

		// Callback
		if (onend != null) {
			currentSound.instance._onend = [onend];
		}
		currentSound.instance.volume(volumeSound);
		
		var instance = currentSound.instance.play();

		// Empeche le multichannel si la source audio est une musique
		if (currentSound.type == "music") {
			if (this.currentMusicInstance != null) {
				this.currentMusicInstance.stop();
			}
			this.currentMusicInstance = instance;
		}

		return instance;
	}


	/*
	 * Stop un son
	 */
	SoundManager.prototype.stop = function (name) {
		for (var i = 0; i < this.list.length; i++) {
			if (this.list[i].name == name) {
				this.list[i].instance.stop();
				break;
			}
		}
	}


	/*
	 * Stop tout les sons en cours
	 */
	SoundManager.prototype.stopAll = function () {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].instance.stop();
		}
	}


	return new SoundManager();
});