import {   configpath,configpath2,keybindspath ,categorysavepath ,allowscrolling ,smoothscrolling ,scrollspeed ,autosety ,searchbar ,searchbartogglename ,imagebuttons ,defaultkeybind,keybindresetkey ,guibottomline ,guifootersize ,hovertextbackgroundon ,titlebuttonsoundtoggle ,titlebuttonsounduntoggle ,mainbuttonsoundtoggle ,mainbuttonsounduntoggle,mainbuttonsoundrightclicktoggle ,mainbuttonsoundrightclicktoggle2,mainbuttonsoundrightclickuntoggle ,mainbuttonsoundrightclickuntoggle2,keybindbindsound ,keybindunbindsound , textboxandslidersound , textboxtypingsound , textboxtbackspacesound , textboxpastesound , selectorbuttonsound , selectorbuttonsoune ,maxheight , minimumheight ,betterminimumheight , titletilebutton , titletilehoverbutton , tilebutton , tilebuttonhover ,tilebuttonon , toggleontextcolor , toggleofftextcolor ,mainbutton , mainbuttonon ,hovercolor ,minitoggle ,miniminibackground ,miniminihover , miniminitoggled ,slidertoggle , slidertoggled ,slidertextcolor , textboxbutton ,  textboxtextcolor ,hovertextbackground , hoverboxtextcolor ,selectionbuttoncolor , selectionbuttonbackgroundcolor , selectionbuttonbackgroundhovercolor,selectionbuttonbackgroundtoggledcolor,guifootercolor , subbuttonsqaurex , subbuttonsqaurew , subbuttonsqaureh , subbuttonsqauretoggledsize ,  subbuttontextcenter , titlebuttonimage ,titlebuttonhoverimage , titlebuttontoggledimage , secondtitlebuttonimage ,secondtitlebuttonhoverimage ,secondtitlebuttontoggledimage , mainbuttonimage , mainbuttonhoverimage ,mainbuttontoggledimage , subbuttonbackgroundimage , subbuttonsmallsquareimage ,subbuttonsmallsquarehoverimage , subbuttonsmallsquaretoggleimage , subbuttonsmallsquareimage , subbuttonsmallsquarehoverimage ,subbuttonsmallsquaretoggleimage ,sliderbackgroundimage , sliderforegroundimage , textboxbackgroundimage ,textboxbackgroundtypedinimage , selectionbuttonbackgroundimage , selectionbuttonsmallrectangleimage,selectionbuttonhoveroverimage , selectionbuttonselectedbuttonhighlightimage,hovertextbackgroundimage , hovertextbackgroundtoggledimage , guifooterimage , truetext , falsetext ,righttruetext , rightfalsetext ,defaulttextbox , defaultnumberonslider , defaultselectionnumber , bindtext } from "./guisettings";
import { categorytoggles, configlist, formatproperly, getclipboard, ismouseovercoords, randomsillytext, splittext, t } from "./guiutils";
 
// todo:
// optimise code for reading it and changing it
// optimise code for fps (need help with this)

register("guiOpened", () => {typed = false})

export let enabledfeatures = []
let currentarray = []
let scrollonx = []
let actualcurrent = []
let resetarray = []
let bignumber = []

let biggestmin = 0
let extraheight = 0
let scroll = false
let scrolrn = ""
let file2 = ""
let scrold = 0
let scrols = 0
let numbere = 0
let guiopen = false
let showrn = false
let sillyslit = ""
let sillys6type = 0
let sillynum = 0
let sil = false
let file = FileLib.read(configpath, configpath2);
export const configGui = new Gui();

register("gameLoad", () => {
  configlist.push(file);
  categorytoggles.push(FileLib.read(configpath, categorysavepath))
})

register("step", () => {if (guiopen != configGui.isOpen()) {FileLib.write(configpath, configpath2, configlist); FileLib.write(configpath, categorysavepath, categorytoggles)};  if (configGui.isOpen()) {guiopen=true;} else guiopen = false;})

// for when i test gui fps (generates silly fps killing gui buttons)
//register("step", () => {
//  fileread = FileLib.read(configpath, "stresstest.toml")
//  FileLib.write(configpath, "stresstest.toml", fileread+`new drawbut(${Math.random()*300}, ${Math.random()*300}, ${Math.random()*100}, ${Math.random()*20}, "w${(Math.random()).toString().replace(".", "")}w", "", "${Math.floor(Math.random()*5)}", always).togglebutton();\n`)
//})

export class drawbut {
  constructor(x, y, width, height, text, hovert, type, show) { this.x = x; this.y = y; this.width = width; this.height = height; this.text = text; this.hovert = hovert; this.type = type; this.show = show;}
  togglebutton(min, max) {
    
    showrn = this.show


    // ===================================================
    //                  SEARCH BAR
    // ===================================================            
    if (searchbar) {
      if (t(searchbartogglename) != "" && this.type > 1) {
        showrn = false
        if (this.text.toString().toLowerCase().includes(t(searchbartogglename).toLowerCase()) || this.hovert.toString().toLowerCase().includes(t(searchbartogglename).toLowerCase()) || (this.type == 5 && t(formatproperly(this.text)).toLowerCase().includes(t(searchbartogglename).toLowerCase())) || (this.type == 6 && min.toString().toLowerCase().includes(t(searchbartogglename).toLowerCase()))) {showrn = true}
        if (this.text == searchbartogglename) {showrn = true}
      }
      else { // another random else statemnt just in case
      }
    }
    // ===================================================

    if (showrn) {

      textstring=randomsillytext+this.text+randomsillytext
      let newtext = formatproperly(textstring)

      // ===================================================
      //            GETTING TEXT NEEDED FOR ARRAY
      // ===================================================  

      if (this.type == 2) {neededtext = newtext+falsetext+newtext+rightfalsetext+newtext+bindtext+defaultkeybind+newtext+";"}
      else if (this.type < 4) {neededtext = newtext+falsetext+newtext+rightfalsetext}
      else if (this.type == 4) {neededtext = newtext+defaultnumberonslider+newtext+";"}
      else if (this.type == 5) {neededtext = newtext+defaulttextbox+newtext+";"}
      else if (this.type == 6) {neededtext = newtext+defaultselectionnumber+newtext+"^"+falsetext+newtext+"/"}

      // ===================================================  


      // ===================================================
      //   CHECKS IF CONFIG FILE ALREADY HAS THE CONFIG
      // ===================================================  
      // only runs once per load
      if (!currentarray.toString().includes(newtext)) {
        file = FileLib.read(configpath, configpath2);
        if (!file.toString().includes(newtext)) {FileLib.write(configpath, configpath2, file+neededtext)}
      }
      currentarray=configlist.toString()
      if (!configlist.toString().includes(newtext)) {
        configlist.push(neededtext);
      }

      // ===================================================  

      // ===================================================
      //   CHECKS IF KEYBIND FILE ALREADY HAS THIS KEYBIND
      // ===================================================  
      // only runs once per load
      if (!actualcurrent.toString().includes(`${newtext}`) && this.type == 2) {
        file2 = FileLib.read(configpath, keybindspath);
        if (!file2.toString().includes(`function ${newtext}${bindtext}tog`)) {
          FileLib.write(configpath, keybindspath, file2+`export function ${newtext}${bindtext}tog() {\nif (guisopen) {\n${newtext}fortnite1 = splittext(configlist.toString(), \`${newtext}${bindtext}\`, \`${newtext};\`);\nidfk${newtext} = ${newtext}fortnite1.charAt(0);\nkeynum${newtext} = ${newtext}fortnite1.replace(idfk${newtext}, "");\nkeynum${newtext} -= 0}\nreturn {k: idfk${newtext}, n: keynum${newtext}}\n};\nlet idfk${newtext} = ""; let keynum${newtext} = ""; let ${newtext}fortnite1 = ""; let ${newtext}pressed = false;\n\nregister("tick", () => {\n${newtext}${bindtext}tog(); let toggle = "${falsetext}"; let toggle2 = "true"; let color = "a";\nif (!Client.Companion.isInGui()) {\nif (isNaN(${newtext}bindtog().n)) {return;}\nif (Keyboard.isKeyDown(${newtext}${bindtext}tog().n) && ${newtext}${bindtext}tog().n !== 13) {\nif (!${newtext}pressed){${newtext}pressed = true;\nif (c("${formatproperly(this.text)}")) toggle = "${truetext}";\nelse toggle = "${falsetext}";\nif (toggle == "${falsetext}") {\ntoggle2 = "${truetext}"; color = "a"}\nelse {toggle2 = "${falsetext}"; color = "c"};\nkeybinded = true;silly=configlist.toString();configlist.splice("");\nif (toggle2 == "${truetext}") {\nenabledfeatures.push("${this.text}")}\nelse {enabledfeatures.splice(enabledfeatures.indexOf('${this.text}'), 1);}\nconfiglist.push(silly.replace("${newtext}"+toggle, "${newtext}"+toggle2)); ChatLib.chat(prefix+" > &"+color+"${this.text}")}\n} else ${newtext}pressed = false\n}\n});\n\n\n`)
        }
        actualcurrent.push(`${newtext}`)
      }

      // ===================================================  

      // ===================================================
      //     MAKES SURE THE BUTTONS FIT ON YOUR SCREEN
      // ===================================================  

      let newx = Math.floor(Renderer.screen.getWidth()/(960/this.x))
      let newh = Math.floor(Renderer.screen.getHeight()/(501/this.height))
      let neww = Math.floor(Renderer.screen.getWidth()/(960/this.width))

      // ===================================================
      //            SETS THE Y COORDINATES
      // ===================================================

      if (autosety && this.text != searchbartogglename) {
        if (resetarray.toString().includes(newtext)) {resetarray.splice(""); sillys6type = 0; sillynum= 0;}
        numbere = 0
        //(newy + (newh / 2 - 6))+e*(newh/2)
        resetarray.push(newx+newtext)
        resetarray.forEach(xofit => {if (xofit.toString().includes(newx)) {
          if (sillys6type != 0) {numbere+=sillys6type; sillynum = sillys6type; sillys6type = 0;} 
          else {numbere+=1}
        }
      })
      sillys6type = sillynum
      if (this.type == 6) {
        showall = splittext(configlist.toString(), `${newtext}^`, `${newtext}/`)
        if (showall == "true") {
          if (sillys6type > 0) sillys6type-=1
          sillys6type+=(min.length/2)+0.5
        }
      }
      newy = (numbere*newh)+this.y
      }
      else {
        newy = Math.floor(Renderer.screen.getHeight()/(501/this.y));
      }
      
      // ===================================================
      //                  SCROLLING
      // ===================================================

      if (allowscrolling && this.type > 1 && this.text != searchbartogglename && (scroll || smoothscrolling)) { // only if not a title button and not the search bar
        if (scrollonx.toString().includes(newx)) {
          scrols = splittext(scrollonx.toString(), `${newx}=` , `${newx};`) // gets the y right now
          scrols -= 0
        }
        else {
          scrols = 0
          scrollonx.push(`${scrolrn}${newx}=0${newx};`) // only runs once per load
        }

        if (Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && scrold != 0 && (newy+scrols > maxheight+newh || scrold > 0)) { // only if on the same x as button and you have scrolled and your not scrolling too high
          scrolrn=scrollonx.toString()
          sillyslit = splittext(scrollonx.toString(), `${newx}=`, `${newx};`) // gets current height
          scrollonx.splice(``)
          scrollonx.push(scrolrn.replace(`${newx}=${sillyslit}${newx};`, `${newx}=${scrols+scrold}${newx};`)) // swaps current height with old one
          scrold=0 // resets scroll height
        }

        if (newy+scrols < maxheight+newh) { // if y is too high
          newy=maxheight+newh;
        }

        else if (newy+scrols > minimumheight-newh) { // if y is too low
          newy=minimumheight-newh
        }

        else {newy+=scrols} // if just right set y to itself + how much you just scrolled (scrols = current y more than original + or - 15)

        if (betterminimumheight) { // better if y is too low check
          sillyy1 = Math.floor(Renderer.screen.getHeight()/(501/this.y));
          sillyy2 = (numbere*newh)+this.y
          if (newy > sillyy1 && !autosety) {
            newy = sillyy1;
            scrollonx.splice(``)
            scrollonx.push(scrolrn.replace(`${newx}=${scrols+scrold}${newx};`, `${newx}=${sillyslit}${newx};`))
          }
          else if (newy > sillyy2+1 && autosety) {
            newy = sillyy2;     
            scrollonx.splice(``)
            scrollonx.push(scrolrn.replace(`${newx}=${scrols+scrold}${newx};`, `${newx}=${sillyslit}${newx};`))
          }
        }
        
        if (guibottomline) {
          if (imagebuttons) Renderer.drawImage(guifooterimage, newx, newy+newh-1, neww, guifootersize);
          else Renderer.drawRect(guifootercolor, newx, newy+newh-1, neww, 2)
        }
      }

      if (this.type > 1) newy-=1

      // ===================================================


      // ===================================================
      //         CHECKS IF BUTTON IS TOGGLED
      // ===================================================

      if (configlist.toString().includes(`${newtext}${truetext}`)) {toggle = true;}
      else toggle = false;

      // IF BUTTON IS TOGGLED AND IS A MAIN BUTTON ADD IT TO ARRAY LIST
      if (configlist.toString().includes(newtext+truetext) && this.type == 2 && !enabledfeatures.includes(this.text)) {enabledfeatures.push(this.text)}
      else if (configlist.toString().includes(newtext+falsetext)  && this.type == 2 && enabledfeatures.includes(this.text)) {enabledfeatures.splice("")}

      if (this.type == 1) {
        if (categorytoggles.toString().includes(newtext)) {toggle=true}
        else toggle=false
      }

      // sets color of text depending on toggle
      if (toggle) col = toggleontextcolor;
      else col = toggleofftextcolor;

      // displays the keybind in the bottom right
      if (this.type == 2) {currentbind = splittext(configlist.toString(), newtext+bindtext, newtext+";"); currentchar = currentbind.charAt(0); currentnum = currentbind.replace(currentchar, "")}
      

      // ===================================================
      //         CHECKS IF HOVERING OVER BUTTON
      // ===================================================
      // and checks if clicked
      if (ismouseovercoords(newx, newy, neww, newh)) { 

          if (clicker && mousedown) { // checks if you left clicked
            clicker = false // set left clicked false 
            if (this.type == 6) {
              if (showall == "false") {World.playSound(selectorbuttonsound, 1, 1)}
              showall = splittext(configlist.toString(), `${newtext}^`, `${newtext}/`)
              for (let u = 0; u < min.length; u++) {
                if (ismouseovercoords(newx + neww - biggestmin - 7, (newy + (newh / 2 - 6))+u*(newh/2), biggestmin + 3, newh / 2) && showall == "true") {
                  sil = true
                }  
  
              }
            }
            if (this.type == 1) {
              categorytoggles.splice("");
              categorytoggles.push(newtext);
            }
            if (!sil) {
              secclicker = false
              // plays sound effect depending on button
              if (this.type <= 1) if (toggle) World.playSound(titlebuttonsoundtoggle, 1, 1); else World.playSound(titlebuttonsounduntoggle, 1, 1);
              if (this.type >= 2 && this.type < 4) if (toggle) World.playSound(mainbuttonsoundtoggle, 1, 1); else World.playSound(mainbuttonsounduntoggle, 1, 1);
              if (this.type == 4) World.playSound(textboxandslidersound, 1, 1);

              if (this.type == 6) {
                if (configlist.toString().includes(newtext+"^"+truetext+newtext)) {configlist.splice(""); configlist.push(currentarray.replace(newtext+"^"+truetext+newtext, newtext+"^"+falsetext+newtext))}
                else {configlist.splice(""); configlist.push(currentarray.replace(newtext+"^"+falsetext+newtext, newtext+"^"+truetext+newtext))}
              }

              // if button isnt a toggle button the return
              if (this.type > 3) return;

              // setting the toggles to the opposite one
              if (!configlist.toString().includes(newtext+truetext)) {configlist.splice(""); configlist.push(currentarray.replace(newtext+falsetext, newtext+truetext)); toggle = true}
              else {configlist.splice(""); configlist.push(currentarray.replace(newtext+truetext, newtext+falsetext)); toggle = false;} 
            }
            sil = false
          }

          if (rightclicker && mousedown) { // checks if you right clicked
            rightclicker = false // set right clicked false 

            // if button isnt a toggle button the return
            if (this.type > 3) return;

            // plays sound effect if button is a main toggle button
            if (this.type > 1) if (toggle) {World.playSound(mainbuttonsoundrightclicktoggle, 1, 1); World.playSound(mainbuttonsoundrightclicktoggle2, 1, 1);} else {World.playSound(mainbuttonsoundrightclickuntoggle, 1, 1); World.playSound(mainbuttonsoundrightclickuntoggle2, 1, 1);}

            // toggles the right click toggle
            if (!configlist.toString().includes(newtext+righttruetext)) {configlist.splice(newtext+rightfalsetext); configlist.push(currentarray.replace(newtext+rightfalsetext, newtext+righttruetext))}
            else {configlist.splice(newtext+righttruetext); configlist.push(currentarray.replace(newtext+righttruetext, newtext+rightfalsetext));}

          }

          // keybinds
          if (this.type == 2 && typed && keycode !== 42 && keycode !== 58 && keycode !== 15 && keycode !== 29 && keycode !== 5 && keycode !== 28 && keycode !== 1) { // only if main button and not a wierd key that u wouldnt set 
            typed = false;

            // if pressed reset bind key then reset keybind
            if (keycode == keybindresetkey) {configlist.splice(newtext+bindtext+currentbind+newtext+";"); configlist.push(currentarray.replace(newtext+bindtext+currentbind+newtext+";", newtext+bindtext+defaultkeybind+newtext+";")); World.playSound(keybindunbindsound, 1, 1);}

            // if any other key than space bar
            else {configlist.splice(newtext+bindtext+currentbind+newtext+";"); configlist.push(currentarray.replace(newtext+bindtext+currentbind+newtext+";", newtext+bindtext+keypressed+keycode+newtext+";")); World.playSound(keybindbindsound, 1, 1);}

            keycode = ""; keypressed = "";
          }
        }

        // ===================================================


        // ===================================================
        //         DIFFERENT TYPES OF BUTTONS
        // ===================================================

         // draws plain black button: https://i.imgur.com/dg6uLGX.png
        if (this.type == 0) {
          if (!toggle) {
          if (imagebuttons) {Renderer.drawImage(titlebuttonimage, newx, newy, neww, newh);}
          else {Renderer.drawRect(titletilebutton, newx, newy, neww, newh);}
          }
          if (toggle) {
            if (imagebuttons) {Renderer.drawImage(titlebuttontoggledimage, newx, newy, neww, newh);}
            else {Renderer.drawRect(titletilebutton, newx, newy, neww, newh);}
          }
          if (ismouseovercoords(newx, newy, neww, newh)) {
            if (imagebuttons) {Renderer.drawImage(titlebuttonhoverimage, newx, newy, neww, newh);}
            else {Renderer.drawRect(titletilehoverbutton, newx, newy, neww, newh);} 
          }
          Renderer.drawString(col + this.text, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));
        }

        // less seethrough toggle button: https://i.imgur.com/TXjN41h.png
        if (this.type == 1) {
          if (!toggle) {
            if (ismouseovercoords(newx, newy, neww, newh)) {
              if (imagebuttons) {
                Renderer.drawImage(secondtitlebuttonhoverimage, newx, newy, neww, newh)
              }
              else {
                Renderer.drawRect(tilebuttonhover, newx, newy, neww, newh);
              }
            }
            else {
              if (imagebuttons) {
                Renderer.drawImage(secondtitlebuttonimage, newx, newy, neww, newh)
              }
              else {
                Renderer.drawRect(tilebutton, newx, newy, neww, newh);
              }
            }
          }

          if (toggle) {
            if (imagebuttons) {
              Renderer.drawImage(secondtitlebuttontoggledimage, newx, newy, neww, newh)
            }
            else {
              Renderer.drawRect(tilebuttonon, newx, newy, neww, newh);
            }
          }

          Renderer.drawStringWithShadow(col + this.text, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));
        }

        // toggleable button: https://i.imgur.com/vfP5DR1.png
        if (this.type == 2) { 
          if (!toggle) {
            if (imagebuttons) {Renderer.drawImage(mainbuttonimage, newx, newy, neww, newh); }
            else {Renderer.drawRect(mainbutton, newx, newy, neww, newh);}

            if (ismouseovercoords(newx, newy, neww, newh)) {
              if (imagebuttons) {
                Renderer.drawImage(mainbuttonhoverimage, newx, newy, neww, newh)
              }
              else {
                Renderer.drawRect(hovercolor, newx, newy, neww, newh); // changes color of button
              }
            }
          }
          if (toggle) {
            if (imagebuttons) {Renderer.drawImage(mainbuttontoggledimage, newx, newy, neww, newh);}
            else {Renderer.drawRect(mainbuttonon, newx, newy, neww, newh);}
          }

          Renderer.drawStringWithShadow(col + this.text, newx+5, newy + (newh / 2 - 4));

          if (currentchar !== "=") Renderer.drawString(currentchar, newx-Renderer.getStringWidth(currentchar)+neww-2, newy+Renderer.screen.getHeight()/35)
        }

        // draws a different toggle button: https://i.imgur.com/C3heK6w.png
        if (this.type == 3) {

          if (imagebuttons) {Renderer.drawImage(subbuttonbackgroundimage, newx, newy, neww, newh);}
          else {Renderer.drawRect(miniminibackground, newx, newy, neww, newh);}
          
          if (!toggle || subbuttonsqauretoggledsize > 0) {
            
            if (imagebuttons) {Renderer.drawImage(subbuttonsmallsquareimage, newx + (neww * subbuttonsqaurex), newy + (newh/2)-4, subbuttonsqaurew, subbuttonsqaureh);}
            else {Renderer.drawRect(minitoggle, newx + (neww * subbuttonsqaurex), newy + (newh / 2)-4, subbuttonsqaurew, subbuttonsqaureh);}
          }

          if (!toggle) {

            if (ismouseovercoords(newx, newy, neww, newh)) {
              if (imagebuttons) {Renderer.drawImage(subbuttonsmallsquarehoverimage, newx + (neww * subbuttonsqaurex) + (subbuttonsqauretoggledsize/2), newy + (newh / 2) + (subbuttonsqauretoggledsize/2)-4, subbuttonsqaurew-subbuttonsqauretoggledsize, subbuttonsqaureh-subbuttonsqauretoggledsize);}
              else {Renderer.drawRect(miniminihover, newx + (neww * subbuttonsqaurex) + (subbuttonsqauretoggledsize/2), newy + (newh / 2) + (subbuttonsqauretoggledsize/2)-4, subbuttonsqaurew-subbuttonsqauretoggledsize, subbuttonsqaureh-subbuttonsqauretoggledsize);}
            }
          }

          if (toggle) {
            if (imagebuttons) {Renderer.drawImage(subbuttonsmallsquaretoggleimage, newx + (neww * subbuttonsqaurex) + (subbuttonsqauretoggledsize/2), newy + (newh / 2) + (subbuttonsqauretoggledsize/2) - 4, subbuttonsqaurew - subbuttonsqauretoggledsize, subbuttonsqaureh - subbuttonsqauretoggledsize);}
            else {Renderer.drawRect(miniminitoggled, newx + (neww * subbuttonsqaurex) + (subbuttonsqauretoggledsize/2), newy + (newh / 2) + (subbuttonsqauretoggledsize/2) - 4, subbuttonsqaurew - subbuttonsqauretoggledsize, subbuttonsqaureh - subbuttonsqauretoggledsize);}
          }

          if (subbuttontextcenter) {xe = newx+5}
          else {xe = newx + 4}

          Renderer.drawString(col + this.text, xe, newy + (newh / 2 - 4));
        }

        // Slider button: https://i.imgur.com/Ru8Kqch.png
        if (this.type == 4) { 
          if (imagebuttons) {Renderer.drawImage(sliderbackgroundimage, newx, newy, neww, newh);}
          else {Renderer.drawRect(slidertoggle, newx, newy, neww, newh);}

          widthe2=splittext(configlist.toString(), `,${newtext}`, `${newtext};`) // im so stupid i had these 2 lines the wrong way round for months
          widthe=((widthe2-min)*(neww / (max-min)))


          if (Client.getMouseX() >= newx && Client.getMouseX() <= newx + neww && Client.getMouseY() >= newy && Client.getMouseY() <= newy + newh) {
            if (mousedown) {
              widthe = (Client.getMouseX() - newx).toFixed(0)
              widthe3 = ((widthe / (neww / (max-min)))+min).toFixed(2); // MATHS IS SO FUCKING HARD IM NEVER DOING IT AGAIN
              configlist.splice(`${newtext}${widthe2}${newtext};`);
              configlist.push(currentarray.replace(`${newtext}${widthe2}${newtext};`, `${newtext}${widthe3}${newtext};`));  
            }
          }

          if (widthe > neww) widthe = neww; if (widthe < 0.1) widthe = 1;
          if (widthe2 > max) widthe2 = max; if (widthe2 < min) widthe2 = min;

          if (imagebuttons) {Renderer.drawImage(sliderforegroundimage, newx+3, newy, widthe-5, newh);}
          else {Renderer.drawRect(slidertoggled, newx, newy, widthe, newh);}
          Renderer.drawString(slidertextcolor+this.text + "  " + widthe2, newx + (neww / 2 - Renderer.getStringWidth(this.text) / 2), newy + (newh / 2 - 4));
        }

        // Text button: text
        if (this.type == 5) { 
          textboxpiss=splittext(configlist.toString(), `,${newtext}`, `${newtext};`)

          if (imagebuttons) {
            if (textboxpiss == defaulttextbox) {
              Renderer.drawImage(textboxbackgroundimage, newx, newy, neww, newh);
            }
            else {
              Renderer.drawImage(textboxbackgroundtypedinimage, newx, newy, neww, newh);
            }
          }
          else {Renderer.drawRect(textboxbutton, newx, newy, neww, newh);}

          if (textboxpiss == defaulttextbox) textboxpiss2 = this.text;
          else textboxpiss2 = textboxpiss;

          if (typed && ismouseovercoords(newx, newy, neww, newh) && keycode !== 42 && keycode !== 58 && keycode !== 15 && keycode !== 29 && keycode !== 5 && keycode !== 28 && keycode !== 1) {
            typed=false
            if (Keyboard.isKeyDown(Keyboard.KEY_LCONTROL)) {
              if (Keyboard.isKeyDown(Keyboard.KEY_V)) {
                World.playSound(textboxpastesound, 1, 1);
                configlist.splice(`${newtext}${textboxpiss}${newtext};`);
                configlist.push(currentarray.replace(`${newtext}${textboxpiss}${newtext};`, `${newtext}${textboxpiss+getclipboard()}${newtext};`));
              }
              if (Keyboard.isKeyDown(Keyboard.KEY_BACK)) {
                configlist.splice(`${newtext}${textboxpiss}${newtext};`);
                configlist.push(currentarray.replace(`${newtext}${textboxpiss}${newtext};`, `${newtext}${defaulttextbox}${newtext};`));
              }
              return;  
            }
            if (keycode == 14) { // if backspace
              if (textboxpiss !== defaulttextbox) {
                let newtextpiss = textboxpiss.charAt(textboxpiss.length-1);
                World.playSound(textboxtbackspacesound, 1, 1);
                configlist.splice(`${newtext}${textboxpiss}${newtext};`);
                configlist.push(currentarray.replace(`${newtext}${textboxpiss}${newtext};`, `${newtext}${removeLastInstance(newtextpiss, textboxpiss)}${newtext};`));
              }
              else {
                return; // in else so the hover text doesnt flicker every time you backspace
              }
            }

            else {
              World.playSound(textboxtypingsound, 1, 1);
              configlist.splice(`${newtext}${textboxpiss}${newtext};`);
              configlist.push(currentarray.replace(newtext+textboxpiss+newtext+";", newtext+textboxpiss+keypressed+newtext+";"));
            }
          }
          Renderer.drawString(" "+textboxtextcolor+textboxpiss2.replace(defaulttextbox, ""), newx, newy + (newh / 2 - 4));
        }

        if (this.type == 6) {
          currentbind = splittext(configlist.toString(), `,${newtext}`, `${newtext}^`)
          showall = splittext(configlist.toString(), `${newtext}^`, `${newtext}/`)
          currentbind2 = currentbind-0
          selected = min[currentbind2]
          if (showall == "false") {
            if (imagebuttons) {Renderer.drawImage(selectionbuttonbackgroundimage, newx, newy, neww, newh);}
            else {Renderer.drawRect(selectionbuttoncolor, newx, newy, neww, newh);}
            Renderer.drawString(col + this.text, newx + 4, newy + (newh / 2 - 4));
          }
          if (showall == "true") {
            for (let e = 0; e < min.length; e++) {
              bignumber.push(Renderer.getStringWidth(min[e]))
            }
            biggestmin = Math.max(...bignumber)
            if (imagebuttons) {
              Renderer.drawImage(selectionbuttonsmallrectangleimage, newx + neww - biggestmin - 7, newy + (newh / 2 - 6), biggestmin + 3, ((newh / 2)*min.length));
              Renderer.drawImage(selectionbuttonbackgroundimage, newx, newy, neww, ((newh/2)*min.length+newh / 2 - 6)+(0.25*newh)-0.25);
            }
            else {
              Renderer.drawRect(selectionbuttonbackgroundcolor, newx + neww - biggestmin - 7, newy + (newh / 2 - 6), biggestmin + 3, ((newh / 2)*min.length));
              Renderer.drawRect(selectionbuttoncolor, newx, newy, neww, ((newh/2)*min.length+newh / 2 - 6)+(0.25*newh)-0.25);     
            }
            Renderer.drawString(col + this.text, newx + 4, newy + (newh / 2 - 4)-1);
            for (let e = 0; e < min.length; e++) {
              if (min[e] == selected) {
                if (imagebuttons) {Renderer.drawImage(selectionbuttonselectedbuttonhighlightimage, newx + neww - Renderer.getStringWidth(min[e]) - 7, (newy + (newh / 2 - 6))+e*(newh/2), Renderer.getStringWidth(min[e]) + 3, newh / 2); }
                else {Renderer.drawRect(selectionbuttonbackgroundtoggledcolor, newx + neww - biggestmin - 7, (newy + (newh / 2 - 6))+e*(newh/2), biggestmin + 3, newh / 2); }
              }
              if (ismouseovercoords(newx + neww - biggestmin - 7, (newy + (newh / 2 - 6))+e*(newh/2), biggestmin + 3, newh / 2)) {
                if (imagebuttons) {Renderer.drawImage(selectionbuttonhoveroverimage, newx + neww - Renderer.getStringWidth(min[e]) - 7, (newy + (newh / 2 - 6))+e*(newh/2), Renderer.getStringWidth(min[e]) + 3, newh / 2);}
                else {Renderer.drawRect(selectionbuttonbackgroundhovercolor, newx + neww - biggestmin - 7, (newy + (newh / 2 - 6))+e*(newh/2), biggestmin + 3, newh / 2);}
                if (secclicker && mousedown) {
                  secclicker = false
                  clicker = false
                  World.playSound(selectorbuttonsoune, 1, 1)
                  configlist.splice("")
                  configlist.push(currentarray.replace(newtext+currentbind+newtext+"^"+truetext+newtext+"/", newtext+e+newtext+"^"+falsetext+newtext+"/"))
                  currentbind = splittext(configlist.toString(), `,${newtext}`, `${newtext}^`)
                  showall = splittext(configlist.toString(), `${newtext}^`, `${newtext}/`)
                  return;
                }
              }
              Renderer.drawString(min[e], newx + neww - Renderer.getStringWidth(min[e]) - 5, (newy + (newh / 2 - 4))+e*(newh/2));
              bignumber.splice("")
            }
          }
          else {
            if (imagebuttons) {Renderer.drawImage(selectionbuttonsmallrectangleimage, newx + neww - Renderer.getStringWidth(selected) - 7, newy + (newh / 2 - 6), Renderer.getStringWidth(selected) + 3, newh / 2);}
            else {Renderer.drawRect(selectionbuttonbackgroundcolor, newx + neww - Renderer.getStringWidth(selected) - 7, newy + (newh / 2 - 6), Renderer.getStringWidth(selected) + 3, newh / 2);}
            Renderer.drawString(selected, newx + neww - Renderer.getStringWidth(selected) - 5, newy + (newh / 2 - 4));
            extraheight = 0
          }
        }

        // ===================================================

        // ===================================================
        //              HOVER TEXT 
        // ===================================================

        if (ismouseovercoords(newx, newy, neww, newh) && this.hovert !== "") {
          if (this.type == 5 && t(this.text) != "") {
            if (hovertextbackgroundon) {
              if (imagebuttons) {
                if (toggle) {
                  Renderer.drawImage(hovertextbackgroundtoggledimage, Client.getMouseX()-1-Renderer.getStringWidth(this.text), Client.getMouseY()-10, Renderer.getStringWidth(this.text)+3, 10); 
                }
                else {
                  Renderer.drawImage(hovertextbackgroundimage, Client.getMouseX()-1-Renderer.getStringWidth(this.text), Client.getMouseY()-10, Renderer.getStringWidth(this.text)+3, 10);
                }
              }
              else {Renderer.drawRect(hovertextbackground, Client.getMouseX()-1-Renderer.getStringWidth(this.text), Client.getMouseY()-10, Renderer.getStringWidth(this.text)+3, 10); }  
            }
            Renderer.drawStringWithShadow(hoverboxtextcolor+this.text, Client.getMouseX()-Renderer.getStringWidth(this.text), Client.getMouseY()-9);  
          } 
          else {
            if (hovertextbackgroundon) {
              if (imagebuttons) {                
                if (toggle) {
                  Renderer.drawImage(hovertextbackgroundtoggledimage, Client.getMouseX()-1-Renderer.getStringWidth(this.hovert), Client.getMouseY()-10, Renderer.getStringWidth(this.hovert)+3, 10); 
                }
                else {
                  Renderer.drawImage(hovertextbackgroundimage, Client.getMouseX()-1-Renderer.getStringWidth(this.hovert), Client.getMouseY()-10, Renderer.getStringWidth(this.hovert)+3, 10);
                }
              }
              else {Renderer.drawRect(hovertextbackground, Client.getMouseX()-1-Renderer.getStringWidth(this.hovert), Client.getMouseY()-10, Renderer.getStringWidth(this.hovert)+3, 10); } 
            }
            Renderer.drawStringWithShadow(hoverboxtextcolor+this.hovert, Client.getMouseX()-Renderer.getStringWidth(this.hovert), Client.getMouseY()-9);  
          }
        }

      }
      else { // else statment for if the button isnt showing, i might need later idk

      }

    }
}

//register("step", () => { // for debuging
//  ChatLib.chat("&a"+configlist.toString())
//  ChatLib.chat("&b"+currentarray.toString())
//  ChatLib.chat("&c"+scrollonx.toString())
//  ChatLib.chat("&d"+actualcurrent.toString())
//}).setDelay(1)

//register("step", () => { // for debuging
//  ChatLib.chat(scrollonx.toString())
//}).setDelay(1)

register("guiKey", (key, code, gui, event) => {keypressed = key; keycode = code; typed = true;})
register("scrolled", (x,y,d) => {if (configGui.isOpen())scroll = true; scrold = -d*scrollspeed})
register("clicked", (x,y,lr,down) => {if (configGui.isOpen()) {if (down) mousedown = true; else mousedown = false; if (lr == "0" && down) {clicker = true; secclicker = true;} if (lr == "1" && down) {rightclicker = true;}}})

function removeLastInstance(badtext, str) {var charpos = str.lastIndexOf(badtext);if (charpos<0) return str;ptone = str.substring(0,charpos);pttwo = str.substring(charpos+(badtext.length));return (ptone+pttwo);} export{removeLastInstance}
// ^^^^ made by someone in stackoverflow: https://i.imgur.com/eKfwYab.png the thread: https://stackoverflow.com/questions/2729666/javascript-replace-last-occurrence-of-text-in-a-string yes i googled this...
let widthe = 0
let widthe2 = 0
let widthe3 = 0
let typed = false
let keycode = ""
let keypressed = ""
let textboxpiss = ""
let textboxpiss2 = ""
let mousedown = false
let clicker = false
let rightclicker = false
let secclicker = false

// sbe src leak (dont share)
//public static void add(int num1, int num2)
//{
//  return int result = num1 + num2;
//}
//public static void minus(int num1, int num2)
//{
//  return int result = num1 - num2;
//}
//public static void multiply(int num1, int num2)
//{
//  return int result = num1 * num2;
//}
//public static void divide(int num1, int num2)
//{
//  return int result = num1 / num2;
//}
//public static void sqrt(int num)
//{
//  return double result = Math.Sqrt(num);
//}
//public static void getMin(int num1, int num2)
//{
//  return double result = Math.Min(num1, num2);
//}