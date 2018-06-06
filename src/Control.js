//
// Controls are views which respond to user input

import View from './View.js'

export default class Control extends View {

    /** Constructor */
    constructor() {
        super()

        // Bind handler functions
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onMouseDown = this.onMouseDown.bind(this)

    }

    /** Called when the overlay is added to the screen */
    onVisible() {

        // Add listener
        Controller.mouseMoveEvent.connect(this.onMouseMove)
        Controller.mousePressEvent.connect(this.onMouseDown)

    }

    /** Called when the overlay is removed from the screen */
    onHidden() {

        // Add listener
        Controller.mouseMoveEvent.disconnect(this.onMouseMove)
        Controller.mousePressEvent.disconnect(this.onMouseDown)

    }

    /** Called when the mouse moves */
    onMouseMove(event) {

        // Check if within our bounds
        var within = event.x >= this.options.x && event.x < this.options.x + this.options.width && event.y >= this.options.y && event.y < this.options.y + this.options.height

        // Send events
        if (this.wasWithin && !within) this.onMouseLeave(event)
        else if (!this.wasWithin && within) this.onMouseEnter(event)
        this.wasWithin = within

    }

    /** Called when the mouse button is pressed */
    onMouseDown(event) {

        // If pointer is within the view, call event
        if (this.wasWithin)
            this.onMouseDownInside(event)

    }

    /** Called when the mouse button is pressed inside the view */
    onMouseDownInside(event) {

    }

    /** Called when the mouse enters the view */
    onMouseEnter(event) {

    }

    /** Called when the mouse exits the view */
    onMouseLeave(event) {

    }

}
