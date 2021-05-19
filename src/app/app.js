import { Actions } from "./utils/actions";
import Duration from "./utils/duration";

const trafficLightVertical = $(".traffic-lights--vertical");
const trafficLightHorizontal = $(".traffic-lights--horizontal");

const duration = new Duration(6000, 1000, 1000, 1500);

const actionsHorizontal = new Actions(trafficLightHorizontal);
const actionsVertical = new Actions(trafficLightVertical);

class Traffic {
	constructor() {}

	horizontal() {
		actionsHorizontal.activateLights();

		setTimeout(() => {
			this.vertical();
		}, duration.red);
	}

	vertical() {
		actionsVertical.activateLights();

		setTimeout(() => {
			this.horizontal();
		}, duration.red);
	}
}

export default Traffic;
