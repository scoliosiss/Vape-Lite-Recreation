import { c, n, prefix } from "../../gui/guiutils";

let stop = 0
register("tick", () => {
    if (c("ChestSteal")) {
        new Thread(() => {
            let inv = Player.getOpenedInventory() // makes inv into variable
            try {
                if (Player?.getOpenedInventory().toString().includes("type=container") && !Player?.getOpenedInventory().toString().includes("name=container")) { // checks if gui is a chest
                    for (let i = 0; i < inv.getSize()-36; i++) { // making "i" a variable
                        let item = inv.getStackInSlot(i); // makes item into variable
                        if (item !== null) { // checks if items an item
                            Thread.sleep(n("delay between clicks")); // delay to stop you being kicked for "bad client inventory move"
                            inv.click(i, true, "LEFT"); // clicks every slot in the chest with an item in it
                        }
                        if (i >= inv.getSize()-37 && Client.currentGui.get() != null && stop < 2) {
                            stop+=1
                            return;
                        }
                    }
                }
            }
            catch (error) {
                ChatLib.chat(error)
            }
        }).start()
        if (stop >= 2) {
            stop=0
            ChatLib.chat(`${prefix} > &4Chest Stealer: &adone`)
            Client.currentGui.close(); // closes gui when inv is empty
        }
    }
})