const trafficLight = $(".traffic-lights");

const trafficLightVertical = $(".traffic-lights--vertical");
const trafficLightHorizontal = $(".traffic-lights--horizontal");

const startClass = "traffic-lights--start";
const setClass = "traffic-lights--set";

const green = 5000;
const yellow = green + 2500;
const additional = yellow + 3500;
const stop = additional + 1500;

class Traffic {
	constructor() {}

	start(removeStart, addStart, side) {
		removeStart.removeClass(`traffic-lights--additional--${side}`);
		removeStart.removeClass(startClass);
		addStart.addClass(startClass);
	}

	set(trafficLight) {
		trafficLight.removeClass(startClass);
		trafficLight.addClass(setClass);
	}

	additional(trafficLight, side) {
		trafficLight.removeClass(setClass);
		trafficLight.addClass(`traffic-lights--additional--${side}`);
	}

	stop(side) {
		trafficLight.removeClass(`traffic-lights--additional--${side}`);
	}

	startTrafficLights() {
		this.vertical();
	}

	horizontal() {
		this.start(trafficLightVertical, trafficLightHorizontal, "left");

		setTimeout(() => {
			this.set(trafficLightHorizontal);
		}, green);

		setTimeout(() => {
			this.additional(trafficLightHorizontal, "right");
		}, yellow);

		setTimeout(() => {
			this.stop("right");
		}, additional);

		setTimeout(() => {
			this.start();
		}, stop);
	}

	vertical() {
		this.start(trafficLightHorizontal, trafficLightVertical, "right");

		setTimeout(() => {
			this.set(trafficLightVertical);
		}, green);

		setTimeout(() => {
			this.additional(trafficLightVertical, "left");
		}, yellow);

		setTimeout(() => {
			this.stop("left");
		}, additional);

		setTimeout(() => {
			this.horizontal();
		}, stop);
	}
}

const newTraffic = new Traffic();

newTraffic.startTrafficLights();
