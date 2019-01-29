import { Time } from "../model/time"
import { BaseView } from "./BaseView"
import eventManager from "../helpers/EventManager"
import stopwatchEvent from "../model/StopwatchEvent"

export class LapsTableView extends BaseView {
    constructor (DOMData, controller = null) {
        super(DOMData, controller)

        this.$container.innerHTML = ""

        this._minimumLapRows = 7
        this._currentLapRows = 0

        this.addEmptyRows()

        eventManager.addEventListener(stopwatchEvent.updateRecordedLaps, this.updateRows.bind(this))

        eventManager.addEventListener(stopwatchEvent.stopwatchDidReset, (stopwatch) => {
            this.$container.innerHTML = ""
            this._currentLapRows = 0
            this.addEmptyRows()
        })
    }

    addEmptyRows () {
        while (this._currentLapRows < this._minimumLapRows) {
            const rowHTML = this.initialHTML.replace("placeholderLabel", "").replace("placeholderTime", "")
            this.$container.innerHTML += rowHTML
            this._currentLapRows++
        }
    }

    updateRows ({ recordedLaps }) {
        this.$container.innerHTML = ""
        this._currentLapRows = 0

        recordedLaps.forEach((lapTime, lapIndex) => {
            const lapNumber = lapIndex + 1
            const time = new Time(lapTime)
            const timeString = time.toString()
            const timeHTML = `${timeString.minutes}:${timeString.seconds}.${timeString.milliseconds}`
            const rowHTML = this.initialHTML
                .replace("placeholderLabel", `Lap ${lapNumber}`)
                .replace("placeholderTime", timeHTML)

            this.$container.innerHTML += rowHTML
            this._currentLapRows++
        }, this)

        this.addEmptyRows()
    }
}
