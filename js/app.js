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
	constructor(samaforVertical, semaforHorizontal) {
		this.samaforVertical = samaforVertical;
		this.semaforHorizontal = semaforHorizontal;
	}

	horizontal() {
		this.semaforHorizontal = false;
		this.samaforVertical = true;

		trafficLightVertical.removeClass("traffic-lights--additional--left");
		trafficLightVertical.removeClass(startClass);
		trafficLightHorizontal.addClass(startClass);

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
		this.samaforVertical = false;
		this.semaforHorizontal = true;

		trafficLightHorizontal.removeClass("traffic-lights--additional--right");
		trafficLightHorizontal.removeClass(startClass);
		trafficLightVertical.addClass(startClass);

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

	start() {
		this.vertical();
	}
}

const newTraffic = new Traffic(false, true);

newTraffic.start();
