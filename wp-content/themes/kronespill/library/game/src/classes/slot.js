class Slot {

	constructor (config) {



		this.scene = config.scene
		this.slot = config.slot
		this.newSlot = this.scene.matter.add.sprite(this.slot.x, this.slot.y, 'sprites', this.slot.image, {
			shape: this.slot.shapes[this.slot.shape]
		})

		

	
		this.newSlot.depth = 1
	}

}

export default Slot

