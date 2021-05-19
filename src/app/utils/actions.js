export class Actions {
	startClass = "traffic-lights--start";
	setClass = "traffic-lights--set";
	additionalClass = "traffic-lights--additional";

	constructor(current) {
		this.currentLight = current;
	}

	start() {
		this.currentLight.addClass(this.startClass);
	}

	set() {
		this.currentLight.removeClass(this.startClass);
		this.currentLight.addClass(this.setClass);
	}

	stop() {
		this.currentLight.removeClass(this.additionalClass);
	}

	additional() {
		this.currentLight.removeClass(this.setClass);
		this.currentLight.addClass(this.additionalClass);
	}
}
