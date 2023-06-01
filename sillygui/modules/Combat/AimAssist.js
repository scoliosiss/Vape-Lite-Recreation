import { c, n } from "../../gui/guiutils"
import { distance_to_player, slowly_look_to_coordinates } from "../Utils"

let leftclickisdown=false; let rightclickisdown=false; let leftclicked = false; let rightclicked = false;
register("clicked", (cum, cum2, cum3, cum4) => {
    if (Client.currentGui.get() == null) {
        if (cum3 == 0 && cum4) {leftclickisdown=true; leftclicked=true}
        else if (cum3 == 0) leftclickisdown=false
        if (cum3 == 1 && cum4) {rightclickisdown=true; rightclicked=true}
        else if (cum3 == 1) rightclickisdown=false
    }
})

let done = false
register("tick", () => {
    if (c("aimassist") && (!c("Click Aim") || leftclicked) && (!c("Break blocks") || Player.lookingAt().getClass() != Block) && (c("Aim while on target") || Player.lookingAt().getClass() != Entity)) {
        leftclicked=false
        if (!done) {
            done=true
            let allentitys = World.getAllPlayers()
            for (let i = 0; i < allentitys.length; i++) {
                distance=distance_to_player(allentitys[i].getX(), allentitys[i].getY(), allentitys[i].getZ())
                if (distance < n("max Distance") && distance > n("Min Distance")) {
                    random=Math.random()/3
                    slowly_look_to_coordinates(allentitys[i].getX()+random/10, allentitys[i].getY()-random/10, allentitys[i].getZ()-random/10, n("Horizontal Speed"), c("Vertical"))
                }
            }
            done=false
        }
    }
})