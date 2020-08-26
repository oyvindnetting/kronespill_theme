import G from '../constants'

class MediaManager {
  constructor (config) {
    this.scene = config.scene
    window.game.emitter.on(G.PLAY_SOUND, this.playSound, this)
    window.game.emitter.on(G.MUSIC_CHANGED, this.musicChanged, this)
  }
  musicChanged () {
    if (this.background) {
      if (window.game.model.musicOn == false) {
        this.background.stop()
        console.log('stop')
      } else {
        this.background.play()
        console.log('play')
      }
    }
  }

  playSound (key) {

	console.log("play sound")
    if (window.game.model.soundOn) {
      var sound = this.scene.sound.add(key)
      sound.play()
    }
  }

  setBackgroundMusic (key) {
    if (window.game.model.musicOn) {
      this.background = this.scene.sound.add(key, {
        volume: 0.5,
        loop: true
      })
      this.background.play()
    }
  }

	  stopBackgroundMusic (key) {
    if (window.game.model.musicOn) {
        window.game.model.musicOn = false
      this.background.destroy()
    }
  }
}

export default MediaManager
