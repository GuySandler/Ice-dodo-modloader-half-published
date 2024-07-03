// init function ...
const mapScript = document.querySelector('#map-script').innerHTML;
eval(mapScript);

// making the meshes
BABYLON.Tags.AddTagsTo(platform, "mesh platform");
BABYLON.Tags.AddTagsTo(cone, "mesh cone");
BABYLON.Tags.AddTagsTo(sphere, "mesh sphere");
BABYLON.Tags.AddTagsTo(ending, "mesh ending");
BABYLON.Tags.AddTagsTo(mesh, "mesh");

if (!document.getElementById("PracticeMode").checked) {
    player.position = new BABYLON.Vector3(map.spawn[0],map.spawn[1],map.spawn[2]);
    player.rotation = new BABYLON.Vector3(0,0,0);
}
else {
    player.position = new BABYLON.Vector3(document.getElementById("PracticeX").value,document.getElementById("PracticeY").value,document.getElementById("PracticeZ").value);
    player.rotation = new BABYLON.Vector3(0,0,0);
    // rotation = document.getElementById("PracticeR").value;
}