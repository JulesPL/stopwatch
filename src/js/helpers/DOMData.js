export class DOMData {
    constructor (containerSelector, templateSelector) {
        this.$container = document.querySelector(containerSelector)
        this.html = document.querySelector(templateSelector).innerHTML
    }
}
