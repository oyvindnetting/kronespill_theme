import ToggleButton from './toggleButton'
import Constants from '../constants'

class SoundButtons extends Phaser.GameObjects.Container {
  constructor (config) {
    super(config.scene)
    this.scene = config.scene
    let G = new Constants()

    this.musicButton = new ToggleButton({
      scene: this.scene,
      backKey: 'toggleBack',
      onIcon: 'musicOn',
      offIcon: 'musicOff',
      event: G.TOGGLE_MUSIC

    })

    this.sfxButton = new ToggleButton({
      scene: this.scene,
      backKey: 'toggleBack',
      onIcon: 'sfxOn',
      offIcon: 'sfxOff',
      event: G.TOGGLE_SOUND

    })

    this.add(this.musicButton)


    this.musicButton.x = this.musicButton.width
    this.musicButton.y = this.musicButton.height

    this.sfxButton.x = this.musicButton.width
    this.sfxButton.y = this.musicButton.height

    if (window.game.model.musicOn === false) {
      this.musicButton.toggle()
    }
    if (window.game.model.soundOn === false) {
      this.sfxButton.toggle()
    }
    this.scene.add.existing(this)
  }
}

export default SoundButtons