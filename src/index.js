import { Actions } from "./app/utils/actions";
import Traffic from "./app/app";

(function () {
    const trafficLightVertical = $(".traffic-lights--vertical");
    const trafficLightHorizontal = $(".traffic-lights--horizontal");

    const actionsHorizontal = new Actions(trafficLightHorizontal);
    const actionsVertical = new Actions(trafficLightVertical);

    const newTraffic = new Traffic(actionsHorizontal, actionsVertical);

    newTraffic.vertical();
})();
