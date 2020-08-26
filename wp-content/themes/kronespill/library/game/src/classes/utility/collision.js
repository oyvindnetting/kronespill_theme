class Collision {

	static checkCollide(object1, object2) {
		var distX = Math.abs(object1.x - object2.x);
		var distY = Math.abs(object1.y - object2.y);

		if (distX < object2.width / 2) {
			if (distY < object2.height / 2) {
				return true;
			}
		}
		return false;

	}
}

export default Collision