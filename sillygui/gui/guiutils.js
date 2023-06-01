export let prefix="&l&6vape v4!"
export let configlist = [];
export let categorytoggles = []
export const randomsillytext = "b" // can be any english letter or number

export function splittext(string, textstart, textend) {
    return string.split(textstart).pop().split(textend)[0];
}

export function formatproperly(string) {
    return string.toString().toLowerCase().replaceAll(" ", "").replaceAll("&", "").replaceAll("-", "").replaceAll("/", "").replaceAll("!", "")
}
export function c(configsetting) {
    if (configsetting != null) {
        conf = configlist.toString().toLowerCase()
        configsettingformated = formatproperly(randomsillytext+configsetting+randomsillytext)
        if (!conf.includes(configsettingformated)) {ChatLib.chat(`Invalid toggle! ${configsetting} doesnt exist.\nPossible problems: spelled wrong, first time loading this setting (open gui and make sure the button is visible)`); return false;}
        else if (conf.includes(`${configsettingformated}true`)) return true;
        else return false;
    }
}
export function r(subconfig) {
    conf = configlist.toString().toLowerCase()
    configsettingformated = formatproperly(randomsillytext+subconfig+randomsillytext)
    if (!conf.includes(configsettingformated)) {ChatLib.chat(`Invalid toggle! ${configsetting} doesnt exist.\nPossible problems: spelled wrong, first time loading this setting (open gui and make sure the button is visible)`); return false;}
    if (conf.includes(`${configsettingformated}righttrue`)) return true;
    else return false;
}
export function t(textconfig) {
    conf = configlist.toString()
    configsettingformated = formatproperly(randomsillytext+textconfig+randomsillytext)
    if (!conf.includes(configsettingformated)) {ChatLib.chat(`Invalid toggle! ${textconfig} doesnt exist.\nPossible problems: spelled wrong, first time loading this setting (open gui and make sure the button is visible)`); return "";}
    return splittext(conf, `${configsettingformated}text=`, `${configsettingformated};`)
}
export function n(slidersetting) {
    conf = configlist.toString()
    configsettingformated = formatproperly(randomsillytext+slidersetting+randomsillytext)
    numberasastring = splittext(conf, `,${configsettingformated}`, `${configsettingformated};`)
    numberasastring -= 0
    if (isNaN(numberasastring)) {numberasastring=0} // for no apparent reason this returns a completely random string sometimes, no fucking idea
    return numberasastring;
}
export function m(modesetting) {
    conf = configlist.toString()
    configsettingformated = formatproperly(randomsillytext+modesetting+randomsillytext)
    if (!conf.includes(configsettingformated)) {ChatLib.chat(`Invalid toggle! ${modesetting} doesnt exist.\nPossible problems: spelled wrong, first time loading this setting (open gui and make sure the button is visible)`); return 0;}
    return splittext(conf, `,${configsettingformated}`, `${configsettingformated}^`)
}
export function categoryrn(categrot) {
    if (categorytoggles.toString() == formatproperly(randomsillytext+categrot+randomsillytext)) {return true}
    else return false
}

export function ismouseovercoords(x, y, w, h) {
    if (Client.getMouseX() >= x && Client.getMouseX() <= x + w && Client.getMouseY() >= y && Client.getMouseY() <= y + h) return true
    else return false
}

const Toolkit = java.awt.Toolkit;
const DataFlavor = java.awt.datatransfer.DataFlavor;
export function getclipboard() {
    contents = Toolkit.getDefaultToolkit().getSystemClipboard().getContents(null)
    if (contents != null) {
        if (contents.isDataFlavorSupported(DataFlavor.stringFlavor)) {
            return contents.getTransferData(DataFlavor.stringFlavor);
        } else {console.log("clipboard is not text!"); return ""}
    } else {console.log("clipboard is empty"); return ""}
}