class Constants {
	constructor() {
		this.SET_SCORE = 'setScore'
		this.SCORE_UPDATED = 'scoreUpdated'

		this.COINS_LEFT = 'setCoinsleft'
		this.COINS_LEFT_UPDATED = 'coinsLeftUpdated'

		this.UP_POINTS = 'upPoints'
		this.PLAY_SOUND = 'playSound'
		this.MUSIC_CHANGED = 'musicChanged'
		this.TOGGLE_SOUND = 'toggleSound'
		this.TOGGLE_MUSIC = 'toggleMusic'

		this.debugConfig = {
			enableSleeping: true,
			debug: false
		}

		/* Tweens */
		this.slotTween = (obj) => {
			return {
				targets: obj,
				scale: 1.2,
				ease: 'Cubic.easeOut',
				duration: 600,
				repeat: 0,
				yoyo: true
			}
		}

		this.scoreTween = (obj) => {
			return {
				targets: obj,
	
				scale: 1.2,
				ease: 'Cubic.easeOut',
				duration: 100,
				repeat:0,
				yoyo: true
			}
		}


		/* Constructs */

		this.walls = [

			{
				x: 50,
				y: 790
			},					{
				x: 50,
				y: 780
			},			{
				x: 50,
				y: 770
			},
			{
				x: 100,
				y: 750
			},
			{
				x: 150,
				y: 740
			},
			{
				x: 200,
				y: 730
			},
			{
				x: 250,
				y: 720
			},
			{
				x: 300,
				y: 710
			},
			{
				x: 350,
				y: 700
			},
			{
				x: 400,
				y: 700
			},
			{
				x: 450,
				y: 710
			},
			{
				x: 500,
				y: 720
			},
			{
				x: 550,
				y: 730
			},
			{
				x: 600,
				y: 740
			},
			{
				x: 650,
				y: 750
			},
			{
				x: 700,
				y: 760
			},
			{
				x: 700,
				y: 780
			},
			{
				x: 700,
				y: 790
			},


		]

		this.slots = [{
				x: 100,
				y: 250,
				image: 'slot3.png',
				shape: 'slot3'

			},
			{
				x: 200,
				y: 250,
				image: 'slot5.png',
				shape: 'slot5'
			},
			{
				x: 300,
				y: 250,
				image: 'slot3.png',
				shape: 'slot3'

			},
			{
				x: 400,
				y: 250,
				image: 'slot10.png',
				shape: 'slot10'

			},
			{
				x: 500,
				y: 250,
				image: 'slot3.png',
				shape: 'slot3'

			},
			{
				x: 600,
				y: 250,
				image: 'slot5.png',
				shape: 'slot5'
			},
			{
				x: 700,
				y: 250,
				image: 'slot3.png',
				shape: 'slot3'

			}
		]
	}
}

export default Constants