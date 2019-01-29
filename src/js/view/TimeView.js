import { BaseView } from "./BaseView"
import { Time } from "../model/time"
import eventManager from "../helpers/EventManager"
import stopwatchEvent from "../model/StopwatchEvent"

export class TimeView extends BaseView {
    constructor (DOMData, controller = null) {
        super(DOMData, controller)

        this._prevTime = new Time(0)
        this._setupDOMRefs()

        eventManager.addEventListener(stopwatchEvent.stopwatchDidReset, (stopwatch) => {
            this.$container.innerHTML = this.initialHTML
            this._setupDOMRefs()
        })
    }

    _setupDOMRefs () {
        this.$minutes = this.$container.querySelector(".minutes")
        this.$seconds = this.$container.querySelector(".seconds")
        this.$milliseconds = this.$container.querySelector(".milliseconds")
    }

    updateTime (time) {
        if (time.minutes !== this._prevTime.minutes) {
            this.$minutes.textContent = time.toString().minutes
        }

        if (time.seconds !== this._prevTime.seconds) {
            this.$seconds.textContent = time.toString().seconds
        }

        if (time.milliseconds !== this._prevTime.milliseconds) {
            this.$milliseconds.textContent = time.toString().milliseconds
        }

        this._prevTime = time
    }
}
