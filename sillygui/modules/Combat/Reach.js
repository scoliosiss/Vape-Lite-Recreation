import { c, n } from "../../gui/guiutils";
import { entity_in_range, is_looking_near_entity, mc } from "../Utils";

let leftclickisdown=false; let rightclickisdown=false; let leftclicked = false; let rightclicked = false;
register("clicked", (cum, cum2, cum3, cum4) => {
    if (Client.currentGui.get() == null) {
        if (cum3 == 0 && cum4) {leftclickisdown=true; leftclicked=true}
        else if (cum3 == 0) leftclickisdown=false
        if (cum3 == 1 && cum4) {rightclickisdown=true; rightclicked=true}
        else if (cum3 == 1) rightclickisdown=false
    }
})

register("tick", () => {
    if (leftclicked && Client.currentGui.get() == null) {
        leftclicked=false
        if (!c("randomize reach chance") || Math.random() < n("randomize reach percent")/100) {
            if (c("Reach") && Player.lookingAt().getClass() != Entity) {
                new Thread(() => {
                    if (is_looking_near_entity(n("reachdistance"))) {
                        Thread.sleep(10)
                        mc.field_71439_g.func_71038_i();
                        mc.field_71442_b.func_78764_a(mc.field_71439_g, entity_in_range().getEntity())
                    }
                }).start()
            }
        }
    }
})