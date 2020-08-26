
import Phaser from 'phaser'

import BootScene from './scenes/Boot'
import GameScene from './scenes/Game'
import GameOverScene from './scenes/GameOver'
import Model from './classes/mc/model'
import config from './config'

const gameConfig = Object.assign(config, {
  scene: [BootScene, GameScene, GameOverScene]
})

class Game extends Phaser.Game {
  constructor () {
    super(gameConfig)
  }
}

window.game = new Game()
window.game.model = new Model()

