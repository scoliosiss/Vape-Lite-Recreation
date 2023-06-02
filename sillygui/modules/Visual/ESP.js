import RenderLib from "../../../RenderLib"
import { c } from "../../gui/guiutils"
import { check_if_player_is_bot } from "../Utils"

register("renderWorld", (pticks) => {
    let players = World.getAllPlayers()
    for (let i = 0; i < players.length; i++) {
        if (players[i].getName() != Player.getName() && check_if_player_is_bot(players[i])) {
            if (c("nametags")) {
                Tessellator.drawString(players[i].getName(), smoothrenderbox(players[i], pticks).x,smoothrenderbox(players[i], pticks).y+2.5,smoothrenderbox(players[i], pticks).z, Renderer.color(200, 200, 200, 200), true, 0.05,false)
            }
            if (c("tracers")) {
                //Tessellator.bindTexture(img);
                //Tessellator.begin()
                //.translate(Player.getX(), Player.getY(), Player.getZ())
                //.pos(Player.getX()-players[i].getX(), Player.getY()-players[i].getY(), Player.getZ()+players[i].getZ())
                //.draw();
            }
            if (c("esp")) {
                RenderLib.drawInnerEspBox(smoothrenderbox(players[i], pticks).x,smoothrenderbox(players[i], pticks).y,smoothrenderbox(players[i], pticks).z, 0.7,1.9, 0.2,0.6,0.6,0.4,true)
            }
        }
    }
})

//register("gameload", () => {
//    if (c("fullbright")) {
//        net.minecraft.client.gui.GuiVideoSettings.field_146499_g.field_74333_Y = 100000
//    }
//})

register('renderWorld', () => {
    if (c("StorageESP")) {
        World.getAllTileEntitiesOfType(net.minecraft.tileentity.TileEntityChest).forEach( (i) => {
            RenderLib.drawInnerEspBox(i.x+0.5,i.y,i.z+0.5,0.8,0.8,0.4,0.1,0.8,0.6,true)
        })
    }
});

function smoothrenderbox(player, pticks) {
    if (pticks != undefined && World.isLoaded()) {
        let lastX = player.getLastX()
        let lastY = player.getLastY()
        let lastZ = player.getLastZ()
        let currentX = player.getX()
        let currentY = player.getY()
        let currentZ = player.getZ()
        return {x: (lastX + (currentX - lastX) * pticks), y: (lastY + (currentY - lastY) * pticks), z: (lastZ + (currentZ - lastZ) * pticks)}
    }
}