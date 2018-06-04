//
// Represents an image component

import View from './View'

export default class ImageView extends View {

    /** The High Fidelity overlay type */
    get type() { return "image" }

    /** The URL of the image to display*/
    get imageURL() { return this.getProperty("imageURL") || "" }
    set imageURL(v) { this.setProperty("imageURL", v) }

}
