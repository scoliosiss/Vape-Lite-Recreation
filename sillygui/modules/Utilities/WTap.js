import { c } from "../../gui/guiutils"
import { Shift, Sprint, WalkBackward, WalkForward, WalkLeft, WalkRight } from "../Utils"

let stopped = false
register("tick", () => {
    if (c("wtap")) {
        if (Player.lookingAt().getClass() == Entity && Player.getPlayer().field_82175_bq) {
            if (!stopped) {
                stopped=true
                WalkForward.setState(false)
                Sprint.setState(false)
                WalkBackward.setState(true)
                Shift.setState(true)
            }
        }
        else if (stopped) {
            stopped=false
            WalkForward.setState(Keyboard.isKeyDown(WalkForward.getKeyCode()))
            WalkBackward.setState(Keyboard.isKeyDown(WalkBackward.getKeyCode()))
            WalkLeft.setState(Keyboard.isKeyDown(WalkLeft.getKeyCode()))
            WalkRight.setState(Keyboard.isKeyDown(WalkRight.getKeyCode()))
            Sprint.setState(Keyboard.isKeyDown(Sprint.getKeyCode()))
            Shift.setState(Keyboard.isKeyDown(Shift.getKeyCode()))
        }
    }
})