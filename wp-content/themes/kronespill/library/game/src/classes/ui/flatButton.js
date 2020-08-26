/* eslint-disable constructor-super */
/* eslint-disable no-multiple-empty-lines */
import Phaser from 'phaser'
import configMain from '../../config'

class FlatButton extends Phaser.GameObjects.Container {
  constructor(config) {
    if (!config.scene) {
      console.log('Missing scene!')
      return
    }
    if (!config.key) {
      console.log('Missing key!')
      return
    }
    super(config.scene)

	this.coinspeed = 0
    this.config = config
    this.scene = config.scene
    this.back = this.scene.add.image(0, 0, config.key)

    this.add(this.back)

    if (config.x) {
      this.x = config.x
    }

    if (config.y) {
      this.y = config.y
    }
    this.scene.add.existing(this)

    if (config.text) {
      if (config.textConfig) {
		this.text1 = this.scene.add.text(0, 0, config.text, config.textConfig)

        this.text1.setOrigin(0.5, 0.5)
        this.add(this.text1)
      } else {
        this.text1 = this.scene.add.text(0, 0, config.text)
        this.text1.setOrigin(0.5, 0.5)
        this.add(this.text1)
      }
    }

    if (config.event) {

      this.back.setInteractive()
      this.back.on('pointerdown', this.pressed, this)
    }

	if (config.event) {


		this.back.on('pointerup', this.up, this)
	  }
  

    // eslint-disable-next-line eqeqeq
    if (configMain.isMobile == -1) {

      this.back.on('pointerover', this.over, this)
      this.back.on('pointerout', this.out, this)
    }
  }

  over() {
 
  }

  out() {

  }

  pressed() {

	window.game.model.shoot = true
	 
    if (this.config.params) {
      game.emitter.emit(this.config.event, this.config.params)
    } else {
      game.emitter.emit(this.config.event)
    }
  }

  up() {

  }
}

export default FlatButton