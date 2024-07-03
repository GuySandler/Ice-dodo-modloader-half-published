const Addcup = JSON.parse(localStorage.getItem("CupNames"))

let AddMapTocup = JSON.parse(localStorage.getItem("CupMaps"))
console.log(AddMapTocup);
function convertStringToArray(input) {
    const jsonString = `[${input}]`;
    const resultArray = JSON.parse(jsonString);
    return resultArray;
}
const inputString = AddMapTocup;
const formattedInputString = inputString.toString().replace(/(\w+):/g, '"$1":');
AddMapTocup = convertStringToArray(formattedInputString);
console.log(AddMapTocup);

const Addskin = JSON.parse(localStorage.getItem("CupImages"))
// ...
let speedtoggle = document.getElementById("speedoverwrite")
let speedOverwrite = document.getElementById("speed");
// ...
let spectatorMode = document.getElementById("spectatorMode");
if (speedtoggle.checked) {
    default_speed = speedOverwrite;
    return speedOverwrite.value;
}
else {
    default_speed = 0.28;
    return 0.28;
}
// ... inside collision check function
let godmodeCheckbox = document.getElementById("godmode");
let spectatorMode = document.getElementById("spectatorMode");
if (!godmodeCheckbox.checked || spectatorMode.checked) {
    if (player.position.y < -20) {change_state.die('Fell To Death')}
        if (player.position.y > 80) {change_state.die('Left The Orbit')}
        this.checkConeCollision()
    }
this.checkEndingCollision()
// ... inside shouldspin function
let spinCheckbox = document.getElementById("spin");
if (spinCheckbox.checked == false) {
    if (flyjump.can_jump) return false;
    if (speed === default_speed) return true;
    if (speed === 0.2) return true;
    return false
}
else {return false;}
// ... update gravity function
let gravitytoggle = document.getElementById("gravityoverwrite")
let gravityOverwrite = document.getElementById("gravity");
if (!gravitytoggle.checked) {
    scene.gravity = new BABYLON.Vector3(0, val, 0);
    gravity = scene.gravity;
    scene.getPhysicsEngine().setGravity(scene.gravity);
    player.applyGravity = true;
}
// ...
let follow = document.getElementById("follow");
let spectatorMode = document.getElementById("spectatorMode");
if (!spectatorMode.checked) {
    let rotation_offsetted = rotation + cameraRightAngle;
    camera.position.x = player.position.x + Math.sin(rotation_offsetted) * cam_horizontal;
    camera.position.z = player.position.z + Math.cos(rotation_offsetted) * cam_horizontal;
    camera.position.y = player.position.y + cam_vertical;
    camera.rotation.y = 3.14 + rotation_offsetted;
    camera.rotation.x = cam_depression;
}
else if (follow.checked) {
    camera.setTarget(player.position)
}
// ...
let freeze = document.getElementById("freeze");
if (window.platformermode) {}
else if (freeze.checked == false) {
    console.log("notfrozen");
    const positionAdjustment = window.tsTriggers.getPositionAdjustment()
    player.position.x += positionAdjustment.x;
    player.position.z += positionAdjustment.z;
}
// ... fixing godmode bug
let godmode = document.getElementById("godmode");
if (godmode.checked) {KILLER_BOUNCE = 0}
console.log(KILLER_BOUNCE)

window.tsTriggers.setPlatformerSignVisibility(window.platformermode);

//...
if (window.platformermode) {const positionAdjustment = window.tsTriggers.getPositionAdjustment()
    player.position.x -= positionAdjustment.z;
    player.position.z += positionAdjustment.x;break}
if (window.platformermode) {const positionAdjustment = window.tsTriggers.getPositionAdjustment()
    player.position.x += positionAdjustment.z;
    player.position.z -= positionAdjustment.x;break}
if (window.platformermode) {const positionAdjustment = window.tsTriggers.getPositionAdjustment()
    player.position.x -= positionAdjustment.x;
    player.position.z -= positionAdjustment.z;break}
if (window.platformermode) {const positionAdjustment = window.tsTriggers.getPositionAdjustment()
    player.position.x += positionAdjustment.x;
    player.position.z += positionAdjustment.y;break}
if (window.platformermode) {flyjump.jump()}