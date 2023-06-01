import { c, n } from "../../gui/guiutils"

let hurtime = 0;

register("tick", () => {
    if (c("Velocity")) {
        if (Player.getPlayer().field_70737_aN == 10 && (!c("randomize antikb chance") || Math.random() < n("randomize antikb percent")/100)) {
            if (c("x modifier")) {
                Client.getMinecraft().field_71439_g.field_70159_w *= n("x modifier percent")
                Client.getMinecraft().field_71439_g.field_70179_y *= n("x modifier percent")
            }
            if (c("y modifier")) {
                Client.getMinecraft().field_71439_g.field_70181_x *= n("y modifier percent")
            }
        }
        hurttime=Player.getPlayer().field_70737_aN
    }
})