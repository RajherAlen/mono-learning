import { Actions } from "./utils/actions";
import Duration from "./utils/duration";

const trafficLightVertical = $(".traffic-lights--vertical");
const trafficLightHorizontal = $(".traffic-lights--horizontal");

const actionsHorizontal = new Actions(trafficLightHorizontal);
const actionsVertical = new Actions(trafficLightVertical);

const duration = new Duration(6000, 1000, 1000, 1500);

class Traffic {
	constructor() {}

	horizontal() {
		actionsHorizontal.start();

		setTimeout(() => {
			actionsHorizontal.set();
		}, duration.green);

		setTimeout(() => {
			actionsHorizontal.additional();
		}, duration.yellow);

		setTimeout(() => {
			actionsHorizontal.stop();
		}, duration.additional);

		setTimeout(() => {
			this.vertical();
		}, duration.red);
	}

	vertical() {
		actionsVertical.start();

		setTimeout(() => {
			actionsVertical.set();
		}, duration.green);

		setTimeout(() => {
			actionsVertical.additional();
		}, duration.yellow);

		setTimeout(() => {
			actionsVertical.stop();
		}, duration.additional);

		setTimeout(() => {
			this.horizontal();
		}, duration.red);
	}
}

export default Traffic;
