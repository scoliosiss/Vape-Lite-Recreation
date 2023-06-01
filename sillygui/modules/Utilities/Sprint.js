import { c } from "../../gui/guiutils"
import { Sprint } from "../Utils"

register("tick", () => {
    if (c("sprint")) {
        if (!Keyboard.isKeyDown(Sprint.getKeyCode())) Sprint.setState(true)
    }
})