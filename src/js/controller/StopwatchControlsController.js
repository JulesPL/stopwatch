import eventManager from "../helpers/EventManager"

export class StopwatchControlsController {
    constructor (model) {
        this.stopwatch = model
    }

    handleClickStartButton (view, event) {
        this.stopwatch.start()
        view.hideAllBtns().showStopBtn().showLapBtn(false)
    }

    handleClickLapButton (view, event) {
        this.stopwatch.recordLap()
    }

    handleClickStopButton (view, event) {
        this.stopwatch.stop()
        view.hideAllBtns().showStartBtn().showResetBtn()
    }

    handleClickResetButton (view, event) {
        this.stopwatch.reset()
        view.hideAllBtns().showStartBtn().showLapBtn()
    }
}
