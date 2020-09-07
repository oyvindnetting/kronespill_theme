import Phaser from 'phaser'

var isMobile = navigator.userAgent.indexOf('Mobile')
if (isMobile === -1) {
  isMobile = navigator.userAgent.indexOf('Tablet')
}
var config

if (isMobile === -1) {
  config = {
    type: Phaser.AUTO,
 
    isMobile: isMobile,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'content',
      width: 1020,
      height: 1312,

      max: {
          width: window.innerHeight*0.7,
          height: window.innerHeight
      }
  },

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
      mode: Phaser.Scale.FIT,
      parent: 'content',
      width: 1020,
      height: 1312,

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