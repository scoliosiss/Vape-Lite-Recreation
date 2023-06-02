import { c, n } from "../../gui/guiutils"
import { LeftClick, RightClick, mc } from "../Utils"

let leftclickisdown=false; let rightclickisdown=false; let leftclicked = false; let rightclicked = false;
register("clicked", (cum, cum2, cum3, cum4) => {
    if (Client.currentGui.get() == null) {
        if (cum3 == 0 && cum4) {leftclickisdown=true; leftclicked=true}
        else if (cum3 == 0) leftclickisdown=false
        if (cum3 == 1 && cum4) {rightclickisdown=true; rightclicked=true}
        else if (cum3 == 1) rightclickisdown=false
    }
})

let times = 0; let cps = 0; let go =true
register("tick", () => {
    if (c("AutoClicker") && times < cps && (leftclickisdown || !c("Hold to click")) && (c("Blockhit") || !Player.getPlayer().func_71039_bw()) && (!c("Auto clicker break blocks") || Player.lookingAt().getClass() != Block)) {
        if (c("Extra randomization") && Math.random() <= 0.05) {
            times-=1
            cps-=0.5
            LeftClick.invoke(mc)
            return;
        }
        if (c("Jitter")) {
            times=40
            new Thread(() => {
                for (let i = 0; i <= cps; i++) {
                    Thread.sleep(50)
                    LeftClick.invoke(mc)
                    ChatLib.chat(i)
                }
                return;
            }).start()
        }
        if (c("Combo assist") && Player.getPlayer().field_82175_bq) {
            new Thread(() => {
                if (go) {
                    go=false
                    LeftClick.invoke(mc)
                    times++
                    Thread.sleep(10)
                    go=true
                }
            }).start()
            return;
        }
        if (Math.random() < cps/20) {
            LeftClick.invoke(mc)
            times++
        }
    }
    cps=n("CPS")
})

register("step", () => {
    times=0
}).setFps(1)