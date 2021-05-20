import Duration from "./utils/duration";

const duration = new Duration(6000, 1000, 1000, 1500);

class Traffic {
	constructor(horizontal, vertical) {
		this.horizontalFunc = horizontal;
		this.verticalFunc = vertical;
	}

	horizontal() {
		this.horizontalFunc.activateLights();

		setTimeout(() => {
			this.vertical();
		}, duration.red);
	}

	vertical() {
		this.verticalFunc.activateLights();

		setTimeout(() => {
			this.horizontal();
		}, duration.red);
	}
}

export default Traffic;
