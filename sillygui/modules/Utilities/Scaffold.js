import { c } from "../../gui/guiutils";
import { Shift, onedgeofblock } from "../Utils";

register("tick", () => {
    if (c("scaffold")){
        oneedge = onedgeofblock()
        if (Keyboard.isKeyDown(Shift.getKeyCode())) {Shift.setState(true)}
        else if (
            (!Keyboard.isKeyDown(Shift.getKeyCode()) && !oneedge) || 
            (c("Onlylookingdown") && Player.getPitch() < 60) || 
            (c("Blocksonly") && !(Player.getHeldItem()?.getItem() instanceof net.minecraft.item.ItemBlock)) || 
            (c("lookingatblock") && Player.lookingAt()?.getRegistryName() != undefined)){ 
                Shift.setState(false);
            }
        else if (
            (oneedge && Player.getPlayer().field_70122_E) && 
            (!c("Onlylookingdown") || Player.getPitch() > 60) && 
            (!c("Blocksonly") || Player.getHeldItem()?.getItem() instanceof net.minecraft.item.ItemBlock) && 
            (!c("lookingatblock") || Player.lookingAt()?.getRegistryName() == undefined)) {
                Shift.setState(true);
            }
    }
})