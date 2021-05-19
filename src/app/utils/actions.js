import Duration from "./duration";

const duration = new Duration(6000, 1000, 1000, 1500);

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

	activateLights() {
		this.start();

		setTimeout(() => {
			this.set();
		}, duration.green);

		setTimeout(() => {
			this.additional();
		}, duration.yellow);

		setTimeout(() => {
			this.stop();
		}, duration.additional);
	}
}
