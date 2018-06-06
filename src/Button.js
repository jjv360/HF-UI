//
// Represents a button component

import Control from './Control'
import View from './View'

export default class Button extends Control {


    // TODO: Once autoresizing is done, add a Label instead of subclassing it */
    /** The High Fidelity overlay type */
    get type() { return "text" }

    /** Text shown in the label */
    get text() { return this.getProperty("text") || "" }
    set text(v) { this.setProperty("text", v) }

    /** Text margins */
    get leftMargin() { return this.getProperty("leftMargin") || 0 }
    set leftMargin(v) { this.setProperty("leftMargin", v) }
    get topMargin() { return this.getProperty("topMargin") || 0 }
    set topMargin(v) { this.setProperty("topMargin", v) }

    /** Font information */
    get font() { return this.getProperty("font") || { size: 17 } }
    set font(v) { this.setProperty("font", v) }




    constructor() {
        super()

        /** User-defined action when button is clicked */
        this.action = null

        // Setup view
        this.backgroundColor = { red: 0, green: 100, blue: 200 }
        this.backgroundAlpha = 1
        this.color = { red: 255, green: 255, blue: 255 }
        this.text = "Button"

        // Create highlight overlay
        this.highlightView = new View()
        this.highlightView.x = 0
        this.highlightView.y = 0
        this.highlightView.visible = false
        this.highlightView.backgroundColor = { red: 255, green: 255, blue: 255 }
        this.highlightView.backgroundAlpha = 0.5
        this.addSubview(this.highlightView)

    }

    /** Called when the mouse enters the view */
    onMouseEnter(event) {

        // Show highlight overlay
        this.highlightView.width = this.width
        this.highlightView.height = this.height
        this.highlightView.visible = true

    }

    /** Called when the mouse exits the view */
    onMouseLeave(event) {

        // Show highlight overlay
        this.highlightView.visible = false

    }

    /** Called when the mouse button is pressed inside the view */
    onMouseDownInside(event) {

        // Trigger event handlers
        if (this.action)
            this.action(event)

    }

}
