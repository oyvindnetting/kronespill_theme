import Phaser from 'phaser'

var isMobile = navigator.userAgent.indexOf('Mobile')
if (isMobile === -1) {
  isMobile = navigator.userAgent.indexOf('Tablet')
}
var config

if (isMobile === -1) {
  config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 1020,
    height: 1312,
    isMobile: isMobile,
	localStorageName: 'phaseres6webpack',
	
    physics: {
      default: 'matter',
      matter: {
        enableSleeping: true,
        debug: false

      }
    }
  }
} else {

  config = {
    type: Phaser.AUTO,
    isMobile: isMobile,

	scale: {
		parent: 'phaser-game',
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: window.innerWidth,
		height: window.innerHeight
	},
	autoCenter: 1,
	scaleMode: 3,
    physics: {
      default: 'matter',
      matter: {
        enableSleeping: true,
        debug: false
      }
    }
  }
}

export default config