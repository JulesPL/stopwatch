import { Ticker } from "./Ticker"
import eventManager from "../helpers/EventManager"
import stopwatchEvent from "./StopwatchEvent"

export class Stopwatch {
    constructor () {
        this._lapTimeTicker = new Ticker()
        this._totalTimeTicker = new Ticker()
        this.recordedLaps = []

        this.time = {
            currentLap : this._lapTimeTicker.time,
            total      : this._totalTimeTicker.time
        }

        for (var event in stopwatchEvent) {
            if (stopwatchEvent.hasOwnProperty(event)) {
                eventManager.addEvent(stopwatchEvent[event])
            }
        }
    }

    start () {
        this._lapTimeTicker.startTicking((time) => {
            this.time.currentLap = time
            eventManager.triggerEventListeners(stopwatchEvent.updateCurrentLapTime, this)
        })

        this._totalTimeTicker.startTicking((time) => {
            this.time.total = time
            eventManager.triggerEventListeners(stopwatchEvent.updateTotalTime, this)
        })
    }

    stop () {
        this._lapTimeTicker.stopTicking()
        this._totalTimeTicker.stopTicking()
    }

    reset () {
        this._lapTimeTicker.reset()
        this._totalTimeTicker.reset()
        this.recordedLaps = []
        eventManager.triggerEventListeners(stopwatchEvent.stopwatchDidReset, this)
    }

    recordLap () {
        this.recordedLaps.push(this._lapTimeTicker.time)
        eventManager.triggerEventListeners(stopwatchEvent.updateRecordedLaps, this)

        this._lapTimeTicker.reset()
        this.time.currentLap = this._lapTimeTicker.time
        eventManager.triggerEventListeners(stopwatchEvent.updateCurrentLapTime, this)
    }
}
