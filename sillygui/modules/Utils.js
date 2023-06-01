export function distance_to_player(x,y,z) {
    let dX = Player.getX() - x
    let dZ = Player.getZ() - z
    let dY = Player.getY() - y
    let dis = Math.sqrt((dX * dX) + (dZ * dZ))
    let dis2 = Math.sqrt((dis * dis) + (dY * dY))
    return dis2
}
export function current_yaw() {
    return Player.getPlayer().field_70177_z;
}
export function current_pitch() {
    return Player.getPlayer().field_70125_A;
}

function radians_to_degrees(radians) {
    var pi = Math.PI;
    return radians * (180/pi);
}

export function check_angle_needed_to_look_at_coordinates(x, y, z) {
    let hoekPitch
    let hoekYaw
    let PlayerAngleYaw = Player.getPlayer().field_70177_z
    let AngleYaw
    PlayerAngleYaw %= 360
    let dX = Player.getX() - x + 0.00001
    let dZ = Player.getZ() - z + 0.00001
    let dY = Player.getY() - y
    let dis = Math.sqrt((dX * dX) + (dZ * dZ))
    if (dX < 0.0 && dZ < 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ / dX)) + 180
    } else if (dZ < 0.0 && dX > 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ / dX)) + 360
    } else if (dZ > 0.0 && dX < 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ / dX)) + 180
    } else if (dZ > 0.0 && dX > 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ / dX))
    }
    hoekYaw = AngleYaw - PlayerAngleYaw + 90
    if (hoekYaw > 180) {
        hoekYaw -= 360
    } if (hoekYaw < -180) {
        hoekYaw += 360
    }
    hoekPitch = radians_to_degrees(Math.atan(dY / dis)) - Player.getPlayer().field_70125_A
    return { Yaw: Player.getPlayer().field_70177_z + hoekYaw, Pitch: Player.getPlayer().field_70125_A + hoekPitch }
}

export function look_at_coordinates(x, y, z) {
    Player.getPlayer().field_70177_z = check_angle_needed_to_look_at_coordinates(x,y,z).Yaw;
    Player.getPlayer().field_70125_A = check_angle_needed_to_look_at_coordinates(x,y,z).Pitch;
}

let pitchneed=0
export function slowly_look_to_coordinates(x,y,z,ticks, doy) {
    yawneed = check_angle_needed_to_look_at_coordinates(x,y,z).Yaw - Player.getPlayer().field_70177_z
    if (doy) pitchneed = check_angle_needed_to_look_at_coordinates(x,y,z).Pitch - Player.getPlayer().field_70125_A
    yawneed/=ticks
    if (doy) pitchneed/=ticks
    ogyaw=Player.getPlayer().field_70177_z
    if (doy) ogpitch=Player.getPlayer().field_70125_A
    new Thread(() => {
        for (let i = 0; i < ticks; i++) {
            Thread.sleep(1)
            Player.getPlayer().field_70177_z = ogyaw+yawneed*i
            if (doy) Player.getPlayer().field_70125_A = ogpitch+pitchneed*i
        } 
    }).start()
}

export function check_if_player_is_bot(player) {
    if (World.getPlayerByName(player.name) == null) return false
    if (World.getPlayerByName(player.name).getPing() == -1.0) return false
    else return true
}

export const mc = Client.getMinecraft();
export const LeftClick = mc.class.getDeclaredMethod("func_147116_af");
export const RightClick = mc.class.getDeclaredMethod("func_147121_ag");
LeftClick.setAccessible(true);
RightClick.setAccessible(true);

export function check_if_can_see_entity(entity) {
    return World.getPlayerByName(Player.getName()).canSeeEntity(entity);
}
export function sin(alpha) {return Math.sin(alpha * Math.PI / 180);}
export function cos(alpha) {return Math.cos(alpha * Math.PI / 180);}

export function splittext(string, textstart, textend) {
  return string.split(textstart).pop().split(textend)[0];
}
export function is_looking_near_entity(reachallowed) {
    try {
        allEntity = World.getAllEntitiesOfType(net.minecraft.entity.EntityLivingBase)
        for(let i = 0; i < allEntity.length; i++) {
            if (distance_to_player(allEntity[i].getX(),allEntity[i].getY(), allEntity[i].getZ()) < reachallowed && distance_to_player(allEntity[i].getX(),allEntity[i].getY(), allEntity[i].getZ()) > 3) {
                if (!allEntity[i].getEntity().toString().includes("EntityArmorStand")) {
                    if (check_if_can_see_entity(allEntity[i])) {
                        distancetop=distance_to_player(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
                        sinyaw=-sin(Player.getYaw())*distancetop // ngl idfk what sin, cos and tan do all i know is they useful for triangles or smth 
                        cosyaw=cos(Player.getYaw())*distancetop
                        rt = Player.getPlayer().func_174822_a(distancetop, 0)
                        yy=splittext(rt.toString(),  ", y=", ", z="); yy-=0
                        hitboxsize=0.8
                        if (((sinyaw+Player.getX())+hitboxsize) >= allEntity[i].getX() && ((sinyaw+Player.getX())-hitboxsize) <= allEntity[i].getX()) {
                            if (((cosyaw+Player.getZ())+hitboxsize) >= allEntity[i].getZ() && ((cosyaw+Player.getZ())-hitboxsize) <= allEntity[i].getZ()) {
                                if (yy >= allEntity[i].getY() && yy<=allEntity[i].getY()+allEntity[i].getHeight()-0.2) {
                                    entitytoattack=allEntity[i]
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    catch (error) {
        ChatLib.chat(error)
    }
    return false;
}
export function entity_in_range() {
    return entitytoattack;
}

export function is_looking_near_coordinates(x,y,z,width,height) {
    distancetop=distance_to_player(x, y, z)
    sinyaw=-sin(Player.getYaw())*distancetop // ngl idfk what sin, cos and tan do all i know is they useful for triangles or smth 
    cosyaw=cos(Player.getYaw())*distancetop
    rt = Player.getPlayer().func_174822_a(distancetop, 0)
    yy=splittext(rt.toString(),  ", y=", ", z="); y-=0
    width/=1.5
    if (((sinyaw+Player.getX())+width-width/2) >= x && ((sinyaw+Player.getX())-width-width/2) <= x) { // NESTING!!!1 (idc its easier to read)
        if (((cosyaw+Player.getZ())+width-width/2) >= z && ((cosyaw+Player.getZ())-width-width/2) <= z) {
            if (yy >= y && yy<=y+height) {
                return true;
            }
        }
    }
    return false;
}

const BP = Java.type("net.minecraft.util.BlockPos");
export function onedgeofblock() {
    airblock=false
    let position = new BP(Player.getX(), Player.getY()-0.7, Player.getZ());
    let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
    if (block.getRegistryName().includes("air")) {airblock=true}
    return airblock
}

export const Shift = new KeyBind(mc.field_71474_y.field_74311_E);
export const Sprint = new KeyBind(mc.field_71474_y.field_151444_V);
export const WalkForward = new KeyBind(mc.field_71474_y.field_74351_w);
export const WalkRight = new KeyBind(mc.field_71474_y.field_74366_z);
export const WalkLeft = new KeyBind(mc.field_71474_y.field_74370_x);
export const WalkBackward = new KeyBind(mc.field_71474_y.field_74368_y);
export const Jump = new KeyBind(mc.field_71474_y.field_74314_A);