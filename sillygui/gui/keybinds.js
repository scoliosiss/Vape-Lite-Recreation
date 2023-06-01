import { prefix,  c, configlist, splittext } from "./guiutils";
import { enabledfeatures } from "./newgui";

let guisopen = true;
register("postGuiRender" , (mx, my, gui) => {
    if (gui instanceof com.chattriggers.ctjs.engine.langs.js.JSGui) {guisopen=true}
    else {guisopen=false;}
}); 
register("guiClosed", () => {guisopen=false;}) 
export function baimassistbbindtog() {
if (guisopen) {
baimassistbfortnite1 = splittext(configlist.toString(), `baimassistbbind`, `baimassistb;`);
idfkbaimassistb = baimassistbfortnite1.charAt(0);
keynumbaimassistb = baimassistbfortnite1.replace(idfkbaimassistb, "");
keynumbaimassistb -= 0}
return {k: idfkbaimassistb, n: keynumbaimassistb}
};
let idfkbaimassistb = ""; let keynumbaimassistb = ""; let baimassistbfortnite1 = ""; let baimassistbpressed = false;

register("tick", () => {
baimassistbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(baimassistbbindtog().n)) {return;}
if (Keyboard.isKeyDown(baimassistbbindtog().n) && baimassistbbindtog().n !== 13) {
if (!baimassistbpressed){baimassistbpressed = true;
if (c("aimassist")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("AimAssist")}
else {enabledfeatures.splice(enabledfeatures.indexOf('AimAssist'), 1);}
configlist.push(silly.replace("baimassistb"+toggle, "baimassistb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"AimAssist")}
} else baimassistbpressed = false
}
});


export function bautoclickerbbindtog() {
if (guisopen) {
bautoclickerbfortnite1 = splittext(configlist.toString(), `bautoclickerbbind`, `bautoclickerb;`);
idfkbautoclickerb = bautoclickerbfortnite1.charAt(0);
keynumbautoclickerb = bautoclickerbfortnite1.replace(idfkbautoclickerb, "");
keynumbautoclickerb -= 0}
return {k: idfkbautoclickerb, n: keynumbautoclickerb}
};
let idfkbautoclickerb = ""; let keynumbautoclickerb = ""; let bautoclickerbfortnite1 = ""; let bautoclickerbpressed = false;

register("tick", () => {
bautoclickerbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bautoclickerbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bautoclickerbbindtog().n) && bautoclickerbbindtog().n !== 13) {
if (!bautoclickerbpressed){bautoclickerbpressed = true;
if (c("autoclicker")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("AutoClicker")}
else {enabledfeatures.splice(enabledfeatures.indexOf('AutoClicker'), 1);}
configlist.push(silly.replace("bautoclickerb"+toggle, "bautoclickerb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"AutoClicker")}
} else bautoclickerbpressed = false
}
});


export function breachbbindtog() {
if (guisopen) {
breachbfortnite1 = splittext(configlist.toString(), `breachbbind`, `breachb;`);
idfkbreachb = breachbfortnite1.charAt(0);
keynumbreachb = breachbfortnite1.replace(idfkbreachb, "");
keynumbreachb -= 0}
return {k: idfkbreachb, n: keynumbreachb}
};
let idfkbreachb = ""; let keynumbreachb = ""; let breachbfortnite1 = ""; let breachbpressed = false;

register("tick", () => {
breachbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(breachbbindtog().n)) {return;}
if (Keyboard.isKeyDown(breachbbindtog().n) && breachbbindtog().n !== 13) {
if (!breachbpressed){breachbpressed = true;
if (c("reach")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Reach")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Reach'), 1);}
configlist.push(silly.replace("breachb"+toggle, "breachb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Reach")}
} else breachbpressed = false
}
});


export function bvelocitybbindtog() {
if (guisopen) {
bvelocitybfortnite1 = splittext(configlist.toString(), `bvelocitybbind`, `bvelocityb;`);
idfkbvelocityb = bvelocitybfortnite1.charAt(0);
keynumbvelocityb = bvelocitybfortnite1.replace(idfkbvelocityb, "");
keynumbvelocityb -= 0}
return {k: idfkbvelocityb, n: keynumbvelocityb}
};
let idfkbvelocityb = ""; let keynumbvelocityb = ""; let bvelocitybfortnite1 = ""; let bvelocitybpressed = false;

register("tick", () => {
bvelocitybbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bvelocitybbindtog().n)) {return;}
if (Keyboard.isKeyDown(bvelocitybbindtog().n) && bvelocitybbindtog().n !== 13) {
if (!bvelocitybpressed){bvelocitybpressed = true;
if (c("velocity")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Velocity")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Velocity'), 1);}
configlist.push(silly.replace("bvelocityb"+toggle, "bvelocityb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Velocity")}
} else bvelocitybpressed = false
}
});


export function bbacktrackbbindtog() {
if (guisopen) {
bbacktrackbfortnite1 = splittext(configlist.toString(), `bbacktrackbbind`, `bbacktrackb;`);
idfkbbacktrackb = bbacktrackbfortnite1.charAt(0);
keynumbbacktrackb = bbacktrackbfortnite1.replace(idfkbbacktrackb, "");
keynumbbacktrackb -= 0}
return {k: idfkbbacktrackb, n: keynumbbacktrackb}
};
let idfkbbacktrackb = ""; let keynumbbacktrackb = ""; let bbacktrackbfortnite1 = ""; let bbacktrackbpressed = false;

register("tick", () => {
bbacktrackbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bbacktrackbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bbacktrackbbindtog().n) && bbacktrackbbindtog().n !== 13) {
if (!bbacktrackbpressed){bbacktrackbpressed = true;
if (c("backtrack")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Backtrack")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Backtrack'), 1);}
configlist.push(silly.replace("bbacktrackb"+toggle, "bbacktrackb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Backtrack")}
} else bbacktrackbpressed = false
}
});


export function bnametagsbbindtog() {
if (guisopen) {
bnametagsbfortnite1 = splittext(configlist.toString(), `bnametagsbbind`, `bnametagsb;`);
idfkbnametagsb = bnametagsbfortnite1.charAt(0);
keynumbnametagsb = bnametagsbfortnite1.replace(idfkbnametagsb, "");
keynumbnametagsb -= 0}
return {k: idfkbnametagsb, n: keynumbnametagsb}
};
let idfkbnametagsb = ""; let keynumbnametagsb = ""; let bnametagsbfortnite1 = ""; let bnametagsbpressed = false;

register("tick", () => {
bnametagsbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bnametagsbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bnametagsbbindtog().n) && bnametagsbbindtog().n !== 13) {
if (!bnametagsbpressed){bnametagsbpressed = true;
if (c("nametags")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("NameTags")}
else {enabledfeatures.splice(enabledfeatures.indexOf('NameTags'), 1);}
configlist.push(silly.replace("bnametagsb"+toggle, "bnametagsb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"NameTags")}
} else bnametagsbpressed = false
}
});


export function btracersbbindtog() {
if (guisopen) {
btracersbfortnite1 = splittext(configlist.toString(), `btracersbbind`, `btracersb;`);
idfkbtracersb = btracersbfortnite1.charAt(0);
keynumbtracersb = btracersbfortnite1.replace(idfkbtracersb, "");
keynumbtracersb -= 0}
return {k: idfkbtracersb, n: keynumbtracersb}
};
let idfkbtracersb = ""; let keynumbtracersb = ""; let btracersbfortnite1 = ""; let btracersbpressed = false;

register("tick", () => {
btracersbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(btracersbbindtog().n)) {return;}
if (Keyboard.isKeyDown(btracersbbindtog().n) && btracersbbindtog().n !== 13) {
if (!btracersbpressed){btracersbpressed = true;
if (c("tracers")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Tracers")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Tracers'), 1);}
configlist.push(silly.replace("btracersb"+toggle, "btracersb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Tracers")}
} else btracersbpressed = false
}
});


export function bstorageespbbindtog() {
if (guisopen) {
bstorageespbfortnite1 = splittext(configlist.toString(), `bstorageespbbind`, `bstorageespb;`);
idfkbstorageespb = bstorageespbfortnite1.charAt(0);
keynumbstorageespb = bstorageespbfortnite1.replace(idfkbstorageespb, "");
keynumbstorageespb -= 0}
return {k: idfkbstorageespb, n: keynumbstorageespb}
};
let idfkbstorageespb = ""; let keynumbstorageespb = ""; let bstorageespbfortnite1 = ""; let bstorageespbpressed = false;

register("tick", () => {
bstorageespbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bstorageespbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bstorageespbbindtog().n) && bstorageespbbindtog().n !== 13) {
if (!bstorageespbpressed){bstorageespbpressed = true;
if (c("storageesp")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("StorageESP")}
else {enabledfeatures.splice(enabledfeatures.indexOf('StorageESP'), 1);}
configlist.push(silly.replace("bstorageespb"+toggle, "bstorageespb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"StorageESP")}
} else bstorageespbpressed = false
}
});


export function bespbbindtog() {
if (guisopen) {
bespbfortnite1 = splittext(configlist.toString(), `bespbbind`, `bespb;`);
idfkbespb = bespbfortnite1.charAt(0);
keynumbespb = bespbfortnite1.replace(idfkbespb, "");
keynumbespb -= 0}
return {k: idfkbespb, n: keynumbespb}
};
let idfkbespb = ""; let keynumbespb = ""; let bespbfortnite1 = ""; let bespbpressed = false;

register("tick", () => {
bespbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bespbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bespbbindtog().n) && bespbbindtog().n !== 13) {
if (!bespbpressed){bespbpressed = true;
if (c("esp")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("ESP")}
else {enabledfeatures.splice(enabledfeatures.indexOf('ESP'), 1);}
configlist.push(silly.replace("bespb"+toggle, "bespb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"ESP")}
} else bespbpressed = false
}
});


export function bfullbrightbbindtog() {
if (guisopen) {
bfullbrightbfortnite1 = splittext(configlist.toString(), `bfullbrightbbind`, `bfullbrightb;`);
idfkbfullbrightb = bfullbrightbfortnite1.charAt(0);
keynumbfullbrightb = bfullbrightbfortnite1.replace(idfkbfullbrightb, "");
keynumbfullbrightb -= 0}
return {k: idfkbfullbrightb, n: keynumbfullbrightb}
};
let idfkbfullbrightb = ""; let keynumbfullbrightb = ""; let bfullbrightbfortnite1 = ""; let bfullbrightbpressed = false;

register("tick", () => {
bfullbrightbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bfullbrightbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bfullbrightbbindtog().n) && bfullbrightbbindtog().n !== 13) {
if (!bfullbrightbpressed){bfullbrightbpressed = true;
if (c("fullbright")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Fullbright")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Fullbright'), 1);}
configlist.push(silly.replace("bfullbrightb"+toggle, "bfullbrightb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Fullbright")}
} else bfullbrightbpressed = false
}
});


export function bscaffoldbbindtog() {
if (guisopen) {
bscaffoldbfortnite1 = splittext(configlist.toString(), `bscaffoldbbind`, `bscaffoldb;`);
idfkbscaffoldb = bscaffoldbfortnite1.charAt(0);
keynumbscaffoldb = bscaffoldbfortnite1.replace(idfkbscaffoldb, "");
keynumbscaffoldb -= 0}
return {k: idfkbscaffoldb, n: keynumbscaffoldb}
};
let idfkbscaffoldb = ""; let keynumbscaffoldb = ""; let bscaffoldbfortnite1 = ""; let bscaffoldbpressed = false;

register("tick", () => {
bscaffoldbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bscaffoldbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bscaffoldbbindtog().n) && bscaffoldbbindtog().n !== 13) {
if (!bscaffoldbpressed){bscaffoldbpressed = true;
if (c("scaffold")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Scaffold")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Scaffold'), 1);}
configlist.push(silly.replace("bscaffoldb"+toggle, "bscaffoldb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Scaffold")}
} else bscaffoldbpressed = false
}
});


export function bcheststealbbindtog() {
if (guisopen) {
bcheststealbfortnite1 = splittext(configlist.toString(), `bcheststealbbind`, `bcheststealb;`);
idfkbcheststealb = bcheststealbfortnite1.charAt(0);
keynumbcheststealb = bcheststealbfortnite1.replace(idfkbcheststealb, "");
keynumbcheststealb -= 0}
return {k: idfkbcheststealb, n: keynumbcheststealb}
};
let idfkbcheststealb = ""; let keynumbcheststealb = ""; let bcheststealbfortnite1 = ""; let bcheststealbpressed = false;

register("tick", () => {
bcheststealbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bcheststealbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bcheststealbbindtog().n) && bcheststealbbindtog().n !== 13) {
if (!bcheststealbpressed){bcheststealbpressed = true;
if (c("cheststeal")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("ChestSteal")}
else {enabledfeatures.splice(enabledfeatures.indexOf('ChestSteal'), 1);}
configlist.push(silly.replace("bcheststealb"+toggle, "bcheststealb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"ChestSteal")}
} else bcheststealbpressed = false
}
});


export function bthrowpotbbindtog() {
if (guisopen) {
bthrowpotbfortnite1 = splittext(configlist.toString(), `bthrowpotbbind`, `bthrowpotb;`);
idfkbthrowpotb = bthrowpotbfortnite1.charAt(0);
keynumbthrowpotb = bthrowpotbfortnite1.replace(idfkbthrowpotb, "");
keynumbthrowpotb -= 0}
return {k: idfkbthrowpotb, n: keynumbthrowpotb}
};
let idfkbthrowpotb = ""; let keynumbthrowpotb = ""; let bthrowpotbfortnite1 = ""; let bthrowpotbpressed = false;

register("tick", () => {
bthrowpotbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bthrowpotbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bthrowpotbbindtog().n) && bthrowpotbbindtog().n !== 13) {
if (!bthrowpotbpressed){bthrowpotbpressed = true;
if (c("throwpot")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Throwpot")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Throwpot'), 1);}
configlist.push(silly.replace("bthrowpotb"+toggle, "bthrowpotb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Throwpot")}
} else bthrowpotbpressed = false
}
});


export function brefillbbindtog() {
if (guisopen) {
brefillbfortnite1 = splittext(configlist.toString(), `brefillbbind`, `brefillb;`);
idfkbrefillb = brefillbfortnite1.charAt(0);
keynumbrefillb = brefillbfortnite1.replace(idfkbrefillb, "");
keynumbrefillb -= 0}
return {k: idfkbrefillb, n: keynumbrefillb}
};
let idfkbrefillb = ""; let keynumbrefillb = ""; let brefillbfortnite1 = ""; let brefillbpressed = false;

register("tick", () => {
brefillbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(brefillbbindtog().n)) {return;}
if (Keyboard.isKeyDown(brefillbbindtog().n) && brefillbbindtog().n !== 13) {
if (!brefillbpressed){brefillbpressed = true;
if (c("refill")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Refill")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Refill'), 1);}
configlist.push(silly.replace("brefillb"+toggle, "brefillb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Refill")}
} else brefillbpressed = false
}
});


export function bsprintbbindtog() {
if (guisopen) {
bsprintbfortnite1 = splittext(configlist.toString(), `bsprintbbind`, `bsprintb;`);
idfkbsprintb = bsprintbfortnite1.charAt(0);
keynumbsprintb = bsprintbfortnite1.replace(idfkbsprintb, "");
keynumbsprintb -= 0}
return {k: idfkbsprintb, n: keynumbsprintb}
};
let idfkbsprintb = ""; let keynumbsprintb = ""; let bsprintbfortnite1 = ""; let bsprintbpressed = false;

register("tick", () => {
bsprintbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bsprintbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bsprintbbindtog().n) && bsprintbbindtog().n !== 13) {
if (!bsprintbpressed){bsprintbpressed = true;
if (c("sprint")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("Sprint")}
else {enabledfeatures.splice(enabledfeatures.indexOf('Sprint'), 1);}
configlist.push(silly.replace("bsprintb"+toggle, "bsprintb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"Sprint")}
} else bsprintbpressed = false
}
});


export function bwtapbbindtog() {
if (guisopen) {
bwtapbfortnite1 = splittext(configlist.toString(), `bwtapbbind`, `bwtapb;`);
idfkbwtapb = bwtapbfortnite1.charAt(0);
keynumbwtapb = bwtapbfortnite1.replace(idfkbwtapb, "");
keynumbwtapb -= 0}
return {k: idfkbwtapb, n: keynumbwtapb}
};
let idfkbwtapb = ""; let keynumbwtapb = ""; let bwtapbfortnite1 = ""; let bwtapbpressed = false;

register("tick", () => {
bwtapbbindtog(); let toggle = "false"; let toggle2 = "true"; let color = "a";
if (!Client.Companion.isInGui()) {
if (isNaN(bwtapbbindtog().n)) {return;}
if (Keyboard.isKeyDown(bwtapbbindtog().n) && bwtapbbindtog().n !== 13) {
if (!bwtapbpressed){bwtapbpressed = true;
if (c("wtap")) toggle = "true";
else toggle = "false";
if (toggle == "false") {
toggle2 = "true"; color = "a"}
else {toggle2 = "false"; color = "c"};
keybinded = true;silly=configlist.toString();configlist.splice("");
if (toggle2 == "true") {
enabledfeatures.push("WTap")}
else {enabledfeatures.splice(enabledfeatures.indexOf('WTap'), 1);}
configlist.push(silly.replace("bwtapb"+toggle, "bwtapb"+toggle2)); ChatLib.chat(prefix+" > &"+color+"WTap")}
} else bwtapbpressed = false
}
});


