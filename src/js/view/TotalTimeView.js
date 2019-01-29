import { TimeView } from "./TimeView"
import { Time } from "../model/time"
import eventManager from "../helpers/EventManager"
import stopwatchEvent from "../model/StopwatchEvent"

export class TotalTimeView extends TimeView {
    constructor (DOMData, controller = null) {
        super(DOMData, controller)

        eventManager.addEventListener(stopwatchEvent.updateTotalTime, (stopwatch) => {
            const time = new Time(stopwatch.time.total)
            this.updateTime(time)
        })
    }
}
