import { BaseView } from "./BaseView"

export class StopwatchControlsView extends BaseView {
    constructor (DOMData, controller) {
        super(DOMData, controller)

        this.classNames.hide = "hidden"
        this.classNames.disabled = "disabled"

        this.$startBtn = document.getElementById("startBtn")
        this.$stopBtn = document.getElementById("stopBtn")
        this.$resetBtn = document.getElementById("resetBtn")
        this.$lapBtn = document.getElementById("lapBtn")

        this.addEventListener(this.$startBtn, "click", "handleClickStartButton")
        this.addEventListener(this.$lapBtn, "click", "handleClickLapButton")
        this.addEventListener(this.$stopBtn, "click", "handleClickStopButton")
        this.addEventListener(this.$resetBtn, "click", "handleClickResetButton")
    }

    hideAllBtns () {
        this.$startBtn.classList.add(this.classNames.hide)
        this.$lapBtn.classList.add(this.classNames.hide)
        this.$stopBtn.classList.add(this.classNames.hide)
        this.$resetBtn.classList.add(this.classNames.hide)

        return this
    }

    showStartBtn () {
        this.$startBtn.classList.remove(this.classNames.hide)
        return this
    }

    showLapBtn (disable = true) {
        this.$lapBtn.classList.remove(this.classNames.hide)

        if (disable) {
            this.$lapBtn.classList.add(this.classNames.disabled)
            this.$lapBtn.setAttribute("disabled", "true")
        } else {
            this.$lapBtn.classList.remove(this.classNames.disabled)
            this.$lapBtn.removeAttribute("disabled")
        }

        return this
    }

    showStopBtn () {
        this.$stopBtn.classList.remove(this.classNames.hide)
        return this
    }

    showResetBtn () {
        this.$resetBtn.classList.remove(this.classNames.hide)
        return this
    }
}
