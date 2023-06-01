import { c, categoryrn, formatproperly, r } from "./guiutils";
import { configGui, drawbut } from "./newgui";

let always = true

register("command", function() {configGui.open();}).setName("opengui").setAliases("coolgui")


register("renderHotbar", (event) => {if (configGui.isOpen()) cancel(event)})
register("renderChat", (event) => {if (configGui.isOpen()) cancel(event)})

register("step", () => {if (configGui.isOpen()) Scoreboard.setShouldRender(false); else Scoreboard.setShouldRender(true);})
register("renderOverlay", function() {
  if (configGui.isOpen()) {
    Renderer.drawRect(Renderer.color(10,10,10,150), 0,0,Renderer.screen.getWidth(),Renderer.screen.getHeight())
    new drawbut(5, 5, 150, 25, "search bar", "", "5", always).togglebutton();
    new drawbut(5, 30, 200, 50, "combat", "", "1", always).togglebutton();
    new drawbut(5, 30, 200, 50, "visual", "", "1", always).togglebutton();
    new drawbut(5, 30, 200, 50, "utility", "", "1", always).togglebutton();

    new drawbut(210, 55, 300, 25, "AimAssist", "", "2", categoryrn("combat")).togglebutton();
    new drawbut(210, 55, 300, 25, "Horizontal Speed", "", "4", categoryrn("combat") && r("AimAssist")).togglebutton(1,500);
    new drawbut(210, 55, 300, 25, "Vertical", "", "3", categoryrn("combat") && r("AimAssist")).togglebutton();
    new drawbut(210, 55, 300, 25, "Min Distance", "", "4", categoryrn("combat") && r("AimAssist")).togglebutton(0,6);
    new drawbut(210, 55, 300, 25, "Max Distance", "", "4", categoryrn("combat") && r("AimAssist")).togglebutton(1,6);
    //new drawbut(210, 55, 300, 25, "Max Angle", "", "4", categoryrn("combat") && r("AimAssist")).togglebutton(10,180);
    new drawbut(210, 55, 300, 25, "Click Aim", "", "3", categoryrn("combat") && r("AimAssist")).togglebutton();
    new drawbut(210, 55, 300, 25, "Break blocks", "", "3", categoryrn("combat") && r("AimAssist")).togglebutton();
    //new drawbut(210, 55, 300, 25, "Use item whitelist", "", "2", categoryrn("combat") && r("AimAssist")).togglebutton();
    new drawbut(210, 55, 300, 25, "Aim while on target", "", "3", categoryrn("combat") && r("AimAssist")).togglebutton();

    new drawbut(210, 55, 300, 25, "AutoClicker", "", "2", categoryrn("combat")).togglebutton();
    new drawbut(210, 55, 300, 25, "CPS", "", "4", categoryrn("combat") && r("AutoClicker")).togglebutton(1,20);
    new drawbut(210, 55, 300, 25, "Hold to click", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    new drawbut(210, 55, 300, 25, "Blockhit", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    //new drawbut(210, 55, 300, 25, "Inventory fill", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    new drawbut(210, 55, 300, 25, "Auto clicker break blocks", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    //new drawbut(210, 55, 300, 25, "Trigger", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    new drawbut(210, 55, 300, 25, "Combo assist", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    //new drawbut(210, 55, 300, 25, "Item whitelist", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    new drawbut(210, 55, 300, 25, "Extra randomization", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();
    new drawbut(210, 55, 300, 25, "Jitter", "", "3", categoryrn("combat") && r("AutoClicker")).togglebutton();

    new drawbut(210, 55, 300, 25, "Backtrack", "", "2", categoryrn("combat")).togglebutton();
    new drawbut(210, 55, 300, 25, "Backtrack time", "", "4", categoryrn("combat") && r("backtrack")).togglebutton(1,10);

    new drawbut(210, 55, 300, 25, "Reach", "", "2", categoryrn("combat")).togglebutton();
    new drawbut(210, 55, 300, 25, "reach distance", "", "4", categoryrn("combat") && r("Reach")).togglebutton(3,6);
    new drawbut(210, 55, 300, 25, "randomize reach chance", "", "3", categoryrn("combat") && r("Reach")).togglebutton();
    new drawbut(210, 55, 300, 25, "randomize reach percent", "", "4", categoryrn("combat") && r("Reach") && c("randomize reach chance")).togglebutton(1,100);

    new drawbut(210, 55, 300, 25, "Velocity", "", "2", categoryrn("combat")).togglebutton();
    new drawbut(210, 55, 300, 25, "x modifier", "", "3", categoryrn("combat") && r("Velocity")).togglebutton();
    new drawbut(210, 55, 300, 25, "x modifier percent", "", "4", categoryrn("combat") && r("Velocity")).togglebutton(-2,2);
    new drawbut(210, 55, 300, 25, "y modifier", "", "3", categoryrn("combat") && r("Velocity")).togglebutton();
    new drawbut(210, 55, 300, 25, "y modifier percent", "", "4", categoryrn("combat") && r("Velocity")).togglebutton(-2,2);
    new drawbut(210, 55, 300, 25, "randomize antikb chance", "", "3", categoryrn("combat") && r("Velocity")).togglebutton();
    new drawbut(210, 55, 300, 25, "randomize antikb percent", "", "4", categoryrn("combat") && r("Velocity")).togglebutton(1,100);


    new drawbut(210, 55, 300, 25, "NameTags", "", "2", categoryrn("visual")).togglebutton();
    //new drawbut(210, 55, 300, 25, "Tracers", "", "2", categoryrn("visual")).togglebutton();
    new drawbut(210, 55, 300, 25, "StorageESP", "", "2", categoryrn("visual")).togglebutton();
    new drawbut(210, 55, 300, 25, "ESP", "", "2", categoryrn("visual")).togglebutton();
    //new drawbut(210, 55, 300, 25, "Fullbright", "", "2", categoryrn("visual")).togglebutton();

    new drawbut(210, 55, 300, 25, "Scaffold", "", "2", categoryrn("utility")).togglebutton();
    new drawbut(210, 55, 300, 25, "Only looking down", "", "3", categoryrn("utility") && r("scaffold")).togglebutton();
    new drawbut(210, 55, 300, 25, "Blocks only", "", "3", categoryrn("utility") && r("scaffold")).togglebutton();
    new drawbut(210, 55, 300, 25, "lookingatblock", "", "3", categoryrn("utility") && r("scaffold")).togglebutton();

    new drawbut(210, 55, 300, 25, "ChestSteal", "", "2", categoryrn("utility")).togglebutton();
    new drawbut(210, 55, 300, 25, "delay between clicks", "", "4", categoryrn("utility") && r("cheststeal")).togglebutton(1,500);

    //new drawbut(210, 55, 300, 25, "Throwpot", "", "2", categoryrn("utility")).togglebutton();
    //new drawbut(210, 55, 300, 25, "Refill", "", "2", categoryrn("utility")).togglebutton();
    new drawbut(210, 55, 300, 25, "Sprint", "", "2", categoryrn("utility")).togglebutton();

    new drawbut(210, 55, 300, 25, "WTap", "", "2", categoryrn("utility")).togglebutton();
  }
})

/*
missing:
Throwpot | idk what this is
Refill | idk what this is

Tracers | i dont like tessalator
Fullbright | idk how to set gamma in ct

inventory fill on autoclicker | idk what this is
trigger on autoclicker | idk what this is
Item whitelist on autoclicker and aimassist | idk what this is
max angle on aimassist | pretty useless because u can just set the rotation speed as a whole
*/