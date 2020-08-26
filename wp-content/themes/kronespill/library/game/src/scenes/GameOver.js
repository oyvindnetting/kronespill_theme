import Phaser from 'phaser'

import Controller from '../classes/mc/controller'
import AlignGrid from '../classes/utility/alignGrid'

import FlatButton from '../classes/ui/flatButton'

import WPAPI from 'wpapi'


export default class extends Phaser.Scene {
	constructor() {
		super({
			key: 'GameOver'
		})


	}
	init() {


	}

	preload() {


	}

	create() {
		

		process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
		var wp = new WPAPI({
			endpoint: 'http://kronespill.wpengine.com/wp-json',
			username: 'kronespill',
			passord: 'fisk3Boll'
		});


		// Request methods return Promises.
		wp.users().auth( {username: 'kronespill', password: 'fisk3Boll'} ).me()
		.then(function (data) {
			// do something with the returned posts


			window.game.currentUser = data
		
		})
		.catch(function (err) {
			// handle error
			console.log("Error " + err)

		});

		const namespace = 'wp/v2';
		const playersRoute = '/result/(?P<id>)';


		var d = new Date();

		wp.results = wp.registerRoute(namespace, playersRoute);
		wp.results().auth( {username: 'kronespill', password: 'fisk3Boll'} ).create({
			// "title" and "content" are the only required properties
			title: 'Result '+d,
			fields: {
				kronespill_points: 666,
				kronespill_registered_datetime: d,
				kronespill_user: window.game.model.currentUser,
				kronespill_game_mode: 'standard'

			},
			status: 'publish',

		}).then(function (response) {
			// "response" will hold all properties of your newly-created post,
			// including the unique `id` the post was assigned on creation
	
		})


		this.add.text(350, 100, "HISCORE LISTE")

		let players = window.game.players


		this.add.text(350, 120, "Navn: " + players[0].name + " - Poeng: " + players[0].points)


		var gridConfig = {
			rows: 11,
			cols: 11,
			scene: this
		}
		this.alignGrid = new AlignGrid(gridConfig)


		var btnStart = new FlatButton({
			scene: this,
			key: 'button1',
			text: 'play again!',
			event: 'play_again',
			game: game
		})

		window.game.emitter.on('play_again', this.playAgain, this)
		this.alignGrid.placeAtIndex(93, btnStart)


	}

	playAgain() {
		this.scene.start('SplashScene')
	}

	update() {}
}