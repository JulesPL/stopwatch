function validateEvent (event) {
    const eventType = typeof event
    if (eventType !== "string") {
        throw TypeError(`Parameter 'event' is of type ${eventType}. It needs to be of type 'string'.`)
    }
}

function validateListener (listener) {
    const listenerType = typeof listener
    if (listenerType !== "function") {
        throw TypeError(`Parameter 'listener' is of type ${listenerType}. It needs to be of type 'function'.`)
    }
}

class EventManager {
    constructor () {
        // Dictionary of events
        // Keys are strings (event-names)
        // values are arrays (listeners)
        this._events = {}
    }

    // Checks if an event already exists
    // @param - event: String
    hasEvent (event) {
        return typeof this._events[event] !== "undefined"
    }

    // Adds a new event
    // Does nothing if an event by that name already exists
    // @param - event: String
    // @throws - TypeError
    addEvent (event) {
        validateEvent(event)

        if (this.hasEvent(event)) {
            return
        }

        this._events[event] = []
    }

    // Removes a specific event
    // Does nothing if that event doesn't exist
    // @param - event: String
    // @throws - TypeError
    removeEvent (event) {
        validateEvent(event)

        // TODO: Remove the event
    }

    // Add an event-listener for a specific event
    // Creates the event if it doesn't already exist
    // @param - event: String
    // @param - listener: Function
    // @throws - TypeError
    addEventListener (event, listener) {
        validateListener(listener)
        this.addEvent(event)
        this._events[event].push(listener)
    }

    // Removes an event-listener from an event
    // Does nothing if an event doesn't exist to remove
    // @param - event: String
    // @param - listener: Function
    // @throws - TypeError
    removeEventListener (event, listener) {
        validateEvent(event)
        validateListener(listener)

        if (!this.hasEvent(event)) {
            console.warn(`Can't remove the event listener because it does not exist!`)
            return
        }

        // TODO: Find the listener and remove it
    }

    // Triggers event-listeners for an event with a subject
    // Does nothing if event does not exist
    // @param - event: String
    // @param - data: Object
    // @throws - TypeError
    triggerEventListeners (event, data) {
        validateEvent(event)

        if (!this.hasEvent(event)) {
            return
        }

        this._events[event].forEach((listener) => {
            listener(data)
        })
    }
}

// TODO: Use the newer ECMA export methods
module.exports = new EventManager()
