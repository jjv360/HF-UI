//
// Represents a button component

import Label from './Label'

export default class Button extends Label {

    constructor() {
        super()

        // Setup view
        this.backgroundColor = { red: 0, green: 100, blue: 200 }
        this.backgroundAlpha = 1
        this.color = { red: 255, green: 255, blue: 255 }
        this.text = "Button"

    }

}
