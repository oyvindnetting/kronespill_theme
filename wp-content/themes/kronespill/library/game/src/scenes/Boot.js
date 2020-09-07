import Phaser from 'phaser'
import WebFont from 'webfontloader'


import button1 from '../assets/images/ui/buttons/2/1.png'
import button2 from '../assets/images/ui/buttons/2/5.png'

import Controller from '../classes/mc/controller'
import spritesPNG from '../assets/images/sprites/knipsekassa.png'
import spritesJSON from '../assets/images/sprites/knipsekassa.json'
import shapesJSON from '../assets/images/sprites/knipsekassa_fysikkmodeller.json'
import backgroundImage from '../assets/images/sprites/Bakgrunn.jpg'


//import meowMp3 from '../assets/audio/meow.mp3'



export default class extends Phaser.Scene {
	constructor() {
		super({
			key: 'BootScene'
		})
	}

	preload() {


		process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

		
		game.emitter = new Phaser.Events.EventEmitter()

		game.controller = new Controller()

		game.players = []

		window.game = game;

		this.fontsReady = false
		this.fontsLoaded = this.fontsLoaded.bind(this)
		this.add.text(100, 100, 'loading gfx & sounds ...')


//		this.load.audio('meow', [meowMp3]);


		WebFont.load({
			google: {
				families: ['Poppins']
			},
			active: this.fontsLoaded
		})


		this.progText = this.add.text(game.config.width / 2, game.config.height / 2, '0%', {
			color: '#ffffff',
			fontSize: game.config.width / 20
		})
		this.progText.setOrigin(0.5, 0.5)

		this.load.on('progress', this.onProgress, this)

		this.load.image('button1', button1)
		this.load.image('button2', button2)


		
		this.load.image('bakgrunn',backgroundImage )
		// Load sprite sheet generated with TexturePacker
		this.atlas = this.load.atlas('sprites', spritesPNG, spritesJSON)

		// Load body shapes from JSON file generated using PhysicsEditor
		let shapes = this.load.json('shapes', shapesJSON)




	}

	update() {
		if (this.fontsReady) {
			this.scene.start('GameScene')
		}
	}

	fontsLoaded() {
		this.fontsReady = true
	}

	onProgress(value) {
		this.progText.setText(Math.floor(value * 100) + '%')

	}
}