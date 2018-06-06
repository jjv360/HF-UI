//
// This class manages sending pointer events to views, including mouse hover, mouse move etc.

/** @private Manages sending touch interaction events to views */
export default class PointerEvents {

    /** Construct a new pointer event handler class for the specified view */
    constructor(view) {

        // Store view
        this.view = view

        // Register listeners
        this.onUpdate = this.onUpdate.bind(this)
        Controller.mouseMoveEvent.connect(this.onMouseMove)
        Script.scriptEnding.connect(this.free.bind(this))

    }

    /** Call when shutting down */
    free() {

        // Remove listeners
        Script.mouseMoveEvent.disconnect(this.onUpdate)

    }

    /** Called by HF when the mouse moves */
    onMouseMove(event) {

        // Notify view
        this.view.onMouseMove(event)

    }

}
