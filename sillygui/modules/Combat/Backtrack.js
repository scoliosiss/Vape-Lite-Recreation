import { c, n } from "../../gui/guiutils"
import { check_angle_needed_to_look_at_coordinates, check_if_can_see_entity, check_if_player_is_bot, distance_to_player, is_looking_near_coordinates, mc } from "./../Utils";
import RenderLib from "../../../RenderLib"

let leftclickisdown=false; let rightclickisdown=false; let leftclicked = false; let rightclicked = false;
register("clicked", (cum, cum2, cum3, cum4) => {
    if (Client.currentGui.get() == null) {
        if (cum3 == 0 && cum4) {leftclickisdown=true; leftclicked=true}
        else if (cum3 == 0) leftclickisdown=false
        if (cum3 == 1 && cum4) {rightclickisdown=true; rightclicked=true}
        else if (cum3 == 1) rightclickisdown=false
    }
})

let positionarray = []; let locked = false; let entitytoattack = ""; let closest=1000000

register("tick", () => {
    if (World.isLoaded() && Client.currentGui.get() == null && c("backtrack")) {
        try {
            if (positionarray.length > n("Backtrack time")*3) {
                positionarray.splice(0,3)
            }
            if (locked) {
                positionarray.push(entitytoattack.getX())
                positionarray.push(entitytoattack.getY())
                positionarray.push(entitytoattack.getZ())
            }
            if (leftclicked) {
                leftclicked=false
                for (let i = 0; i < positionarray.length; i+=3) {
                    if (is_looking_near_coordinates(positionarray[i]-0.25, positionarray[i+1], positionarray[i+2]-0.25, entitytoattack.getWidth(), entitytoattack.getHeight())) {
                        if (Player.lookingAt().getClass() != Entity) {
                            mc.field_71439_g.func_71038_i();
                            mc.field_71442_b.func_78764_a(mc.field_71439_g, entitytoattack.getEntity())
                            return;
                        }
                    }
                }
            }
            entitylist = World.getAllEntitiesOfType(net.minecraft.entity.EntityLivingBase)
            reach=3
            for (let i = 0; i < entitylist.length; i++) {
                distancetobad=distance_to_player(entitylist[i].getX(), entitylist[i].getY(), entitylist[i].getZ())
                if (distancetobad > 0.2 && distancetobad < reach && !entitylist[i].isDead() && !entitylist[i].hasNoClip() && entitylist[i].getEntity().func_110143_aJ() > 0 && !entitylist[i].getEntity().toString().includes("EntityArmorStand") && check_if_player_is_bot(entitylist[i]) && check_if_can_see_entity(entitylist[i])) {
                    if (distancetobad < closest) {
                        closest=distancetobad
                        entitytoattack=entitylist[i]
                    }
                }
                if (i == entitylist.length-1) {
                    if (entitytoattack!="") {
                        locked=true
                    }
                    else {closest=10000;locked=false;positionarray.splice(""); return;}
                }
            }
            if (distance_to_player(entitytoattack.getX(), entitytoattack.getY(), entitytoattack.getZ()) > 6 || entitytoattack.isDead() || entitytoattack.hasNoClip() || entitytoattack.getEntity().func_110143_aJ() <= 0  || !check_if_player_is_bot(entitytoattack) || !check_if_can_see_entity(entitytoattack)) {locked=false;closest = 10000; entitytoattack=""; positionarray.splice("");return;}
        }
        catch(error) {
            locked=false
            ChatLib.chat(error)
        }
    }
})

register("renderWorld", () => {
    if (locked && c("backtrack") && Client.currentGui.get() == null) {
        for (let i = 0; i < positionarray.length; i+=3) {
            RenderLib.drawInnerEspBox(positionarray[i], positionarray[i+1], positionarray[i+2], entitytoattack.getWidth(), entitytoattack.getHeight(), 0.3,0,0.7, 0.2, true)
        }
    }
})