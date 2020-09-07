
import Constants from '../constants'

class Controller {
  constructor () {
	let G = new Constants()
    game.emitter.on(G.SET_SCORE, this.setScore)
    game.emitter.on(G.SET_COINSLEFT, this.setCoinsleft)
    game.emitter.on(G.UP_POINTS, this.upPoints)
    game.emitter.on(G.TOGGLE_SOUND, this.toggleSound)
    game.emitter.on(G.TOGGLE_MUSIC, this.toggleMusic)
    game.emitter.on(G.SHOOT_COIN, this.shootCoin)
  }

  toggleSound (val) {
    console.log('Toogle Sound')
    window.game.model.soundOn = val
  }

  toggleMusic (val) {
    window.game.model.musicOn = val
  }

  shootCoin (val) {
    window.game.model.coinInMotion = val
  }

  setScore (score) {
    window.game.model.score = score
  }

  setCoinsleft (coinsLeft) {
    window.game.model.coinsLeft = coinsLeft
  }


  upPoints (points) {
    var score = window.game.model.score
    score += points
    window.game.model.score = score
  }
}

export default Controller
