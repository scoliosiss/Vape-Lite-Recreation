
export const configpath = ("sillygui/gui")
export const configpath2 = ("config.toml")
export const keybindspath = ("keybinds.js") // /ct load after adding a new button for keybinds to work (shouldnt be a problem but idk)
export const categorysavepath = ("category.toml")

export const allowscrolling = true // may lower fps
export const smoothscrolling = true // may lower fps
export const scrollspeed = 15

export const autosety = true // may lower fps

export const searchbar = true // may lower fps
export const searchbartogglename = "search bar"

export const imagebuttons = false // may lower fps!

export const defaultkeybind = "=13" // this means you cant set the keybind to =
export const keybindresetkey = 57 // space bar

export const guibottomline = false // may lower fps very slightly!
export const guifootersize = 5

export const hovertextbackgroundon = true


export const titlebuttonsoundtoggle = 'tile.piston.out'
export const titlebuttonsounduntoggle = 'tile.piston.in'

export const mainbuttonsoundtoggle = 'mob.chicken.plop'
export const mainbuttonsounduntoggle = 'gui.button.press'

export const mainbuttonsoundrightclicktoggle = 'tile.piston.out'
export const mainbuttonsoundrightclicktoggle2 = 'mob.chicken.plop'
export const mainbuttonsoundrightclickuntoggle = 'tile.piston.in'
export const mainbuttonsoundrightclickuntoggle2 = 'gui.button.press'

export const keybindbindsound = 'mob.chicken.plop'
export const keybindunbindsound = 'tile.piston.out'

export const textboxandslidersound = 'game.player.swim.splash'
export const textboxtypingsound = 'dig.snow'
export const textboxtbackspacesound = 'dig.cloth'
export const textboxpastesound = 'note.snare'

export const selectorbuttonsound = 'tile.piston.out'
export const selectorbuttonsoune = 'tile.piston.in'


export const maxheight = 125
export const minimumheight = 100000 // if u set this to Renderer.screen.getHeight() make it a let variable and put minimumheight = Renderer.screen.getHeight() inside the drawbut class 
export const betterminimumheight = true


export const titletilebutton = Renderer.color(31, 31, 36,250)
export const titletilehoverbutton = Renderer.color(32, 25, 35,250)

export const tilebutton = Renderer.color(0, 0, 10, 150)
export const tilebuttonhover = Renderer.color(0, 0, 10, 150)
export const tilebuttonon = Renderer.color(0, 0, 5, 170)

export const toggleontextcolor = "&5&l"
export const toggleofftextcolor = "&8&o"
export const mainbutton = Renderer.color(10, 0, 40, 150)
export const mainbuttonon = Renderer.color(100, 0, 150, 170)
export const hovercolor = Renderer.color(100, 0, 100, 150)

export const minitoggle = Renderer.color(250, 250, 250, 250)
export const miniminibackground = Renderer.color(0, 0, 10, 150)
export const miniminihover = Renderer.color(100,20,255,100)
export const miniminitoggled = Renderer.color(100,20,255,200)

export const slidertoggle = Renderer.color(0, 0, 10, 150)
export const slidertoggled = Renderer.color(100,20,255,200)
export const slidertextcolor = "&7"

export const textboxbutton = Renderer.color(0, 0, 10, 150)
export const textboxtextcolor = "&5"

export const hovertextbackground = Renderer.color(20, 20, 20, 200)
export const hoverboxtextcolor = "&5"

export const selectionbuttoncolor = Renderer.color(0, 0, 10, 150)
export const selectionbuttonbackgroundcolor = Renderer.color(0, 0, 10, 10)
export const selectionbuttonbackgroundhovercolor = Renderer.color(48, 25, 52, 150)
export const selectionbuttonbackgroundtoggledcolor = Renderer.color(93, 63, 211, 50)

export const guifootercolor = Renderer.color(0, 0, 100, 250)

export const subbuttonsqaurex = 0.8
// const subbuttonsqaurey = 0.85 // idk why u would want it off centre
export const subbuttonsqaurew = 8.5
export const subbuttonsqaureh = 8.5
export const subbuttonsqauretoggledsize = 0 // lower is bigger anything more than [subbuttonsqaurew] will make the button go invisible
export const subbuttontextcenter = false

// dont make these 4k images make them like 200x200 pixel at most
export const titlebuttonimage = new Image("titlebuttonimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263033438806066/titlebuttonimage.png");
export const titlebuttonhoverimage = new Image("titlebuttonhoverimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263050153111722/titlebuttonhoverimage.png");
export const titlebuttontoggledimage = new Image("titlebuttontoggledimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263060219437158/titlebuttontoggledimage.png");

export const secondtitlebuttonimage = new Image("secondtitlebuttonimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106285675160023130/image.png"); // category button now
export const secondtitlebuttonhoverimage = new Image("secondtitlebuttonhoverimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106285554007560333/image.png");
export const secondtitlebuttontoggledimage = new Image("secondtitlebuttontoggledimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106285465268666529/image.png");

export const mainbuttonimage = new Image("mainbuttonimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263331880317018/mainbuttonimage.png");
export const mainbuttonhoverimage = new Image("mainbuttonhoverimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263342739374090/mainbuttonhoverimage.png");
export const mainbuttontoggledimage = new Image("mainbuttontoggledimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263352591781979/mainbuttontoggledimage.png");

export const subbuttonbackgroundimage = new Image("subbuttonbackgroundimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263504920518828/subbuttonbackgroundimage.png");
export const subbuttonsmallsquareimage = new Image("subbuttonsmallsquareimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106479828594593843/image.png");
export const subbuttonsmallsquarehoverimage = new Image("subbuttonsmallsquarehoverimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106479917677428787/image.png");
export const subbuttonsmallsquaretoggleimage = new Image("subbuttonsmallsquaretoggleimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106479887008669726/image.png");
//export const subbuttonsmallsquareimage = new Image("subbuttonsmallsquareimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263521827762237/subbuttonsmallsquareimage.png"); // circle buttons (look cool idk)
//export const subbuttonsmallsquarehoverimage = new Image("subbuttonsmallsquarehoverimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263531898282064/subbuttonsmallsquarehoverimage.png");
//export const subbuttonsmallsquaretoggleimage = new Image("subbuttonsmallsquaretoggleimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263546372829244/subbuttonsmallsquaretoggleimage.png");

export const sliderbackgroundimage = new Image("sliderbackgroundimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106265895422148639/image.png");
export const sliderforegroundimage = new Image("sliderforegroundimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106263759334428703/sliderforegroundimage.png");

export const textboxbackgroundimage = new Image("textboxbackgroundimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264011797966878/textboxbackgroundimage.png");
export const textboxbackgroundtypedinimage = new Image("textboxbackgroundtypedinimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264018961846312/textboxbackgroundtypedinimage.png");

export const selectionbuttonbackgroundimage = new Image("selectionbuttonbackgroundimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264143914356807/selectionbuttonbackgroundimage.png"); 
export const selectionbuttonsmallrectangleimage = new Image("selectionbuttonsmallrectangleimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264176491495484/selectionbuttonsmallrectangleimage.png");
export const selectionbuttonhoveroverimage = new Image("selectionbuttonhoveroverimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264188927623198/selectionbuttonhoveroverimage.png");
export const selectionbuttonselectedbuttonhighlightimage = new Image("selectionbuttonselectedbuttonhighlightimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264196821307473/selectionbuttonselectedbuttonhighlightimage.png");

export const hovertextbackgroundimage = new Image("hovertextbackgroundimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264354099302530/hovertextbackgroundimage.png");
export const hovertextbackgroundtoggledimage = new Image("hovertextbackgroundtoggledimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106264362685051021/hovertextbackgroundtoggledimage.png");

export const guifooterimage = new Image("guifooterimage.png", "https://cdn.discordapp.com/attachments/1097094808360730674/1106620702641115226/image.png");

export const truetext = "true" // if you set the text to something shorter it may help with fps but might cause some problems
export const falsetext = "false"
export const righttruetext = "righttrue"
export const rightfalsetext = "rightfalse"
export const defaulttextbox = "text="
export const defaultnumberonslider = "0.0"
export const defaultselectionnumber = 0
export const bindtext = "bind"