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
