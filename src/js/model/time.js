export class Time {
    constructor (milliseconds) {
        this.totalMilliseconds = milliseconds
        this.minutes = 0
        this.seconds = 0
        this.milliseconds = 0

        this._populateTimeData()
    }

    _populateTimeData () {
        const MSCONVERSIONS = [ 60000, 1000, 1 ]
        const diff = []

        MSCONVERSIONS.forEach((unit, index) => {
            if (index === 0) {
                diff[0] = Math.floor(this.totalMilliseconds / unit)
                diff[1] = this.totalMilliseconds % MSCONVERSIONS[0]
                return
            }

            const remainder = diff[diff.length - 1]

            diff[diff.length - 1] = Math.floor(remainder / unit)

            if (index === MSCONVERSIONS.length - 1) {
                return
            }

            diff[diff.length] = remainder % unit
        })

        this.minutes = diff[0]
        this.seconds = diff[1]
        this.milliseconds = diff[2]
    }

    toString () {
        const minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
        const seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds
        const milliseconds = (this.milliseconds < 10
            ? "0" + this.milliseconds
            : this.milliseconds.toString()).substring(0, 2)

        return {
            minutes,
            seconds,
            milliseconds
        }
    }
}
