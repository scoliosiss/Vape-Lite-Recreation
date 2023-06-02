import { c, n } from "../../gui/guiutils"
import { BP, autotool, mc, swapback } from "../Utils"
let leftclickisdown=false; let rightclickisdown=false; let leftclicked = false; let rightclicked = false;
let blockatpos = ""
let funnylook = ""; let cumming = false; const Blocks = Java.type("net.minecraft.init.Blocks"); let epicing = false;
const C07PacketPlayerDigging = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging")
const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
register("clicked", (cum, cum2, cum3, cum4) => {
    if (Client.currentGui.get() == null) {
        if (cum3 == 0 && cum4) {leftclickisdown=true; leftclicked=true}
        else if (cum3 == 0) leftclickisdown=false
        if (cum3 == 1 && cum4) {rightclickisdown=true; rightclicked=true}
        else if (cum3 == 1) rightclickisdown=false
    }
})

register("tick", (ticks) => {
    if (c("autotool")) {
        if (leftclickisdown) {
            autotool()
            if (cumming) {cumming = false}
            let lookingAt = Player.lookingAt(); 
            if (lookingAt.getClass() === Block) {
                if (c("fast break")) {
                    funnylook = new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ())
                    cumming=true
                    blockatpos=mc.field_71441_e.func_180495_p(funnylook).func_177230_c();
                    done=false
                    blockatpos=mc.field_71441_e.func_180495_p(funnylook).func_177230_c();
                    if (!blockatpos.toString().includes("air") && !done) {
                        new Thread(() => {
                            if (!epicing) {ticker=ticks}
                            ticks2=ticks-ticker
                            epicing=true
                            damage = blockatpos.func_180647_a(Player.getPlayer(), World.getWorld(), funnylook) * ticks2 * n("fast break speed")
                            if (damage >= 1) {
                                Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.STOP_DESTROY_BLOCK, funnylook, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z)));
                                World.getWorld().func_180501_a(funnylook, Blocks.field_150350_a.func_176223_P(), 256)
                                done=true
                                epicing=false
                                World.getWorld().func_175698_g(funnylook);
                            }
                        }).start()
                    }
                }
            }
        }
        else {
            done=true
            epicing=false
            damage=0
            ticks=0
        }
        swapback()
    }
})