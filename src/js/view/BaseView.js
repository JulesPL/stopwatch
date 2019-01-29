import { DOMData } from "../helpers/DOMData"

export class BaseView {
    constructor (DOMData, controller = null) {
        this.initialHTML = DOMData.html

        this.$container = DOMData.$container
        this.$container.innerHTML = this.initialHTML

        this.classNames = {}

        this.controller = controller
    }

    // TODO: Add validation for parameters
    addEventListener ($el, eventType, listener) {
        $el.addEventListener(eventType, this.controller[listener].bind(this.controller, this), false)
    }
}
