
import Constants from '../constants'

class Model {
  constructor () {
	this._score = 0
	this._coinsLeft = 10
  this._soundOn = true
  this._musicOn = true
	this._coinInMotion = false
	this.gameOver = false
	this.G = new Constants()
  }

  set score (val) {
    this._score = val

    game.emitter.emit(this.G.SCORE_UPDATED)
  }

  get score () {
    return this._score
  }
  
  set coinsLeft (val) {
    this._coinsLeft = val
	this.gameOver = false
	
	if (this._coinsLeft < 1) {
		this.gameOver = true

	}
    game.emitter.emit(this.G.COINS_LEFT_UPDATED)
  }

  get coinsLeft () {
    return this._coinsLeft
  }
  

  set musicOn (val) {
    this._musicOn = val
    game.emitter.emit(this.G.MUSIC_CHANGED)
  }

  get musicOn () {
    return this._musicOn
  }

  set soundOn (val) {
    this._soundOn = val
    game.emitter.emit(this.G.SOUND_CHANGED)
  }

  get soundOn () {
    return this._soundOn
  }
}

export default Model
