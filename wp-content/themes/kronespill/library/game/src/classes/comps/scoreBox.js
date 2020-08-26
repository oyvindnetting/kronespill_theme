import Constants from '../constants'

class ScoreBox extends Phaser.GameObjects.Container {
  constructor (config) {
    super(config.scene)
    this.scene = config.scene
    this.text1 = this.scene.add.text(0, 0, 'POENG: 0')
    this.text1.setOrigin(0.5, 0.5)
    this.add(this.text1)

	console.log(window.game.model.coinsLeft)
    this.text2 = this.scene.add.text(0, 20, 'MYNTSALDO: 10')
    this.text2.setOrigin(0.5, 0.5)
    this.add(this.text2)
	this.scene.add.existing(this)

	let G = new Constants()
    window.game.emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this)
    window.game.emitter.on(G.COINS_LEFT_UPDATED, this.coinsLeftUpdated, this)
  }

  scoreUpdated () {
	this.text1.setText('POENG: ' + window.game.model.score)

  }

  coinsLeftUpdated () {

	this.text2.setText('MYNTSALDO: ' + window.game.model.coinsLeft)
  }
}
export default ScoreBox
