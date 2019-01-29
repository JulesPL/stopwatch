import { TimeView } from "./TimeView"
import { Time } from "../model/time"
import eventManager from "../helpers/EventManager"
import stopwatchEvent from "../model/StopwatchEvent"

export class LapTimeView extends TimeView {
    constructor (DOMData, controller = null) {
        super(DOMData, controller)

        eventManager.addEventListener(stopwatchEvent.updateCurrentLapTime, (stopwatch) => {
            const time = new Time(stopwatch.time.currentLap)
            this.updateTime(time)
        })
    }
}
