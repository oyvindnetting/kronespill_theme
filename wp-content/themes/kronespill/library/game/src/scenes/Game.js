
import Phaser, {
	Bodies,
	Constraint
} from 'phaser'
import Matter from 'matter-js'


import AlignGrid from '../classes/utility/alignGrid'
import Align from '../classes/utility/align'
import MediaManager from '../classes/utility/mediaManager'
import Controller from '../classes/mc/controller'
import Constants from '../classes/constants'
import ScoreBox from '../classes/comps/scoreBox'
import SoundButtons from '../classes/ui/soundButtons'

import FlatButton from '../classes/ui/flatButton'
import Slot from '../classes/slot'

import WPAPI from 'wpapi'


var nextCoin = true;


export default class extends Phaser.Scene {
	constructor() {
		super({
			key: 'GameScene'
		})
	}

	init() {
		this.currentScore = 0
		this.coinsLeft = window.game.model.coinsLeft

		this.currentSpeed = 0
		this.shootPower = 0

		this.coinInMotion = false
	
	}


	preload() {


/*
		this.load.image('shootButton', shooterButton)
		this.load.image('shooterButtonYellow', shooterButtonYellow)
		this.load.image('shooterButtonRed', shooterButtonRed)
		this.mediaManager = new MediaManager({
			scene: this
		});


		
		this.wp = new WPAPI({
			endpoint: window.WP_API_Settings.endpoint,
			nonce: window.WP_API_Settings.nonce
		});



		this.apiPromise = WPAPI.discover('http://kronespill.local/').then(function (site) {
			return site.auth({
				username: 'kronespill',
				password: 'fisk3Boll'
			});
		});
*/
	}

	create() {


		game.input.mouse.capture = true;

		// define our objects

		let shapes = this.cache.json.get('shapes')

		var emitter = window.game.emitter
		window.game.controller = new Controller()

		var background = this.add.sprite(0, 0, 'bakgrunn').setOrigin(0);
		

		this.hand = this.matter.add.sprite(1000, 390, 'sprites','Hand.png', {

			isStatic: true

		})
		this.hand.setInteractive();


		var lines = this.matter.add.sprite(85, 390, 'sprites','Lines.png', {
			shape: shapes.Lines,
			isStatic: true

		})


		lines.setPosition(window.game.config.width / 2,830);


		this.newCoin = this.matter.add.sprite(300, 100, 'sprites', 'Coin.png', {
			shape: shapes.Coin
		})


		/* Popluate coins - make more accurate */
		this.populateCoins(this)
		this.populateSlots(this)
		this.populateFlippers(this)

		//	this.anchor  = this.matter.add.circle(780, 50, 10, {isStatic:true})


		//		this.elastic =  this.matter.add.joint(this.anchor, this.newCoin, 30, 0.4)

		//		this.matter.add.mouseSpring();

		/*		this.matter.add.sprite(760, 50, 'sprites', 'trigger_wall.png', {
					shape: shapes.trigger_wall,
					isSensor: false
				})

				this.matter.add.sprite(770, 160, 'sprites', 'trigger_angle.png', {
					shape: shapes.trigger_angle,
					isSensor: false
				})
	
		window.game.mediaManager = new MediaManager({
			scene: this
		})

	

		window.game.model.gameOver = false

		var gridConfig = {
			rows: 5,
			cols: 5,
			scene: this
		}

		this.alignGrid = new AlignGrid(gridConfig)

*/
		this.matter.world.setBounds(100, 50, window.game.config.width - 200, window.game.config.height - 250)

		let G = new Constants()



/*



		this.btnStart = new FlatButton({
			scene: this,
			key: 'shootButton',
			text: 'SKYT',
			event: 'shoot_coin',
			game: window.game,
			textConfig: {
				fontFamily: 'Roboto',
				fontSize: '18px',
				color: '#000000',
				stroke: '#000000',

			}
		})



		this.btnStart.depth = 2
		this.btnScaleX = this.btnStart.scaleX
		this.btnScaleY = this.btnStart.scaleY
		this.alignGrid.placeAtIndex(1, this.btnStart)



		this.yellowButton = this.add.image(0, 0, 'shooterButtonYellow')
		this.alignGrid.placeAtIndex(1, this.yellowButton)
		this.yellowButton.depth = 1

		this.redButton = this.add.image(0, 0, 'shooterButtonRed')
		this.alignGrid.placeAtIndex(1, this.redButton)
		this.redButton.depth = 0




		let slotGap = window.game.config.width / G.slots.length
		xIndex = slotGap / 2


		G.slots.forEach(slot => {
			slot.shapes = shapes
			slot.x = xIndex
			let newSlot = new Slot({
				scene: this,
				slot: slot
			});
			xIndex += slotGap
		})


		// Set up static objects
		var bottom = this.matter.add.sprite(400, 930, 'sprites', 'bottom.png', {
			isStatic: true,
			isSensor: false
		})

		this.scoreBox = new ScoreBox({
			scene: this
		})

		this.alignGrid.placeAtIndex(2, this.scoreBox)

		var soundButtons = new SoundButtons({
			scene: this
		})



		game.emitter.on('hit_slot', this.hitSlot, this)

		this.matter.world.on('collisionstart', function (event) {


			var pairs = event.pairs;


			for (var i = 0; i < pairs.length; i++) {
				var bodyA = pairs[i].bodyA;
				var bodyB = pairs[i].bodyB;

				if (bodyA.label === 'slotSensor') {

				}
				if (bodyA.label === 'slotSensor') {

					//  We only want sensor collisions
					if (pairs[i].isSensor) {

						var slotBody;
						var coinBody;

						if (bodyA.isSensor) {
							slotBody = bodyB;
							coinBody = bodyA;
						} else if (bodyB.isSensor) {
							slotBody = bodyA;
							coinBody = bodyB;
						}


						if (coinBody.parent.label === 'slot_5') {
							console.log("Hit 5!")

							game.emitter.emit('hit_slot', 5, coinBody)

						} else if (coinBody.parent.label === 'slot_3') {
							console.log("Hit 3!")

							game.emitter.emit('hit_slot', 3, coinBody)

						} else if (coinBody.parent.label === 'slot_10') {
							console.log("Hit 10!")

							game.emitter.emit('hit_slot', 10, coinBody)

						}

					}
				}
			}

		}, this)
		*/
	}

	populateCoins(obj) {

		let shapes = this.cache.json.get('shapes')

		for (let i = 0;i < window.game.config.width - 500; i+=30) {
			let a = obj.matter.add.sprite(i+300, 600, 'sprites', 'Coin.png', {
				shape: shapes.Coin
			})
			 a = obj.matter.add.sprite(i+300, 650, 'sprites', 'Coin.png', {
				shape: shapes.Coin
			})
			a = obj.matter.add.sprite(i+300, 700, 'sprites', 'Coin.png', {
				shape: shapes.Coin
			})
			a = obj.matter.add.sprite(i+300, 750, 'sprites', 'Coin.png', {
				shape: shapes.Coin
			})
			a = obj.matter.add.sprite(i+300, 800, 'sprites', 'Coin.png', {
				shape: shapes.Coin
			})
	 
		}
	}

	populateSlots(obj) {

		let shapes = this.cache.json.get('shapes')
		
		let a = obj.matter.add.sprite(200, 290, 'sprites', 'Slot1.png', {
			shape: shapes.Slot1,
			isStatic: true
		})

		a = obj.matter.add.sprite(305, 290, 'sprites', 'Slot2.png', {
			shape: shapes.Slot2,
			isStatic: true
		})

		a = obj.matter.add.sprite(410, 290, 'sprites', 'Slot3.png', {
			shape: shapes.Slot3,
			isStatic: true
		})

		a = obj.matter.add.sprite(515, 290, 'sprites', 'Slot4.png', {
			shape: shapes.Slot4,
			isStatic: true
		})


		a = obj.matter.add.sprite(620, 290, 'sprites', 'Slot5.png', {
			shape: shapes.Slot5,
			isStatic: true
		})


		a = obj.matter.add.sprite(725, 290, 'sprites', 'Slot6.png', {
			shape: shapes.Slot6,
			isStatic: true
		})

		a = obj.matter.add.sprite(830, 290, 'sprites', 'Slot7.png', {
			shape: shapes.Slot7,
			isStatic: true
		})
	}

	populateFlippers(obj) {
		
		let shapes = this.cache.json.get('shapes')

		let a = obj.matter.add.sprite(190, 1000, 'sprites', 'Flipperleft.png', {
			shape: shapes.Flipperleft,
			isStatic: true
		})
	}

	hitSlot(val, slotObj) {

		this.currentScore += val
		window.game.model.score = this.currentScore
		this.coinsLeft += val

		let G = new Constants()
		//	var sound = this.sound.add('meow')
		//	sound.play()


		this.tweens.add(G.slotTween(slotObj.parent.gameObject))
		this.tweens.add(G.scoreTween(this.scoreBox))


		window.game.controller.setCoinsleft(this.coinsLeft)
		window.game.controller.setScore(this.currentScore)
	}

	resetCoin() {
		this.coinInMotion = false;
		console.log(this.coinInMotion)
	}

	shootCoin(obj) {
		
		let shapes = this.cache.json.get('shapes')

	

		if (!this.coinInMotion) {
			this.coinInMotion = true;
			this.newCoin = obj.matter.add.sprite(780, 100, 'sprites', 'Coin.png', {
				shape: shapes.Coin
			})
	
			let veloX = Math.random() * 20
			let veloY = this.currentSpeed + (Math.random() * 4)
	
	
			this.newCoin.setVelocityX(-veloX)
			this.newCoin.setVelocityY(-veloY / 4)



			this.time.addEvent({
				delay: 500,
				callback: ()=>{
					console.log("test")
					console.log(this.coinInMotion)
					this.coinInMotion = false
				},
				loop: false
			})
		}


		// site is now configured to use authentication
	/*
		let currentUser = this.wp.users().me((data) => {
			return data
		})

		console.log(currentUser)


		let shapes = this.cache.json.get('shapes')
		this.newCoin = this.matter.add.sprite(780, 0, 'sprites', 'Coin.png', {
			shape: shapes.coin
		})


		let veloX = this.currentSpeed
		let veloY = this.currentSpeed + (Math.random() * 10)


		this.newCoin.setVelocityX(-veloX)
		this.newCoin.setVelocityY(-veloY / 2)

		if (this.coinsLeft < 10) {
			this.coinsLeft = 11
					this.scene.start('GameOver')

		}

		/*
				
				// Save results
				this.apiPromise.then(function( site ) {

					
					site.result().create({
				
						title: 'Result '+Date.now(),
						content: 'player results',
						fields: {
							kronespill_points:  parseInt(window.game.model.score),
							kronespill_registered_datetime: Date.now(),
							kronespill_game_mode: 'classic'
						},
			
						status: 'publish'
					}).then(function( response ) {
						// "response" will hold all properties of your newly-created post,
						// including the unique `id` the post was assigned on creation
						console.log(response.id);
					})

				})
	
		this.coinsLeft = this.coinsLeft - 1

		window.game.controller.setCoinsleft(this.coinsLeft)
	
		*/


	}




	update() {
		var obj = this
	


		  this.hand.on('pointerdown', function() {
			// do something to the cookie
			obj.shootCoin(obj)

	
		 }, this.hand);



	}

}