import { setCorrectingInterval, clearCorrectingInterval } from "correcting-interval"

function validateCallback (callback) {
    const callbackType = typeof callback
    if (callbackType !== "function") {
        throw TypeError(`Parameter 'callback' is of type ${callbackType}. It needs to be of type 'function'.`)
    }
}

export class Ticker {
    constructor (tickRate = 10) {
        this._tickRate = tickRate // In milliseconds
        this._elapsedTime = 0 // In milliseconds
        this._intervalID = null
        this._isTicking = false
    }

    get time () {
        return this._elapsedTime
    }

    startTicking (callback) {
        if (this.isTicking) {
            return
        }

        this._intervalID = setCorrectingInterval(() => {
            this._elapsedTime += this._tickRate
            callback(this.time)
        }, this._tickRate)

        this._isTicking = true
        return
    }

    stopTicking () {
        if (!this._isTicking) {
            return
        }

        clearCorrectingInterval(this._intervalID)

        this._id = null
        this._isTicking = false
        return
    }

    reset () {
        this._elapsedTime = 0
        return
    }
}
