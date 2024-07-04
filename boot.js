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

// ...
decorateCustomLevel: function(meshes, platforms, cones, ends, TextureName, TextureColor) {
    console.log(TextureName)
    console.log(TextureColor)
    // let meshes = scene.getMeshesByTags("mesh");
    // let platforms = scene.getMeshesByTags("platform");
    // let cones = scene.getMeshesByTags("cone");
    // let ends = scene.getMeshesByTags("end");
    for (let i=0;i<meshes.length;i++) {
        if (BABYLON.Tags.MatchesQuery(meshes[i], "end")) {meshes[i].material = decorations.rgba_mat(0,230,0,0.75, true)}
        else if (BABYLON.Tags.MatchesQuery(meshes[i], "cone")) {meshes[i].material = decorations.rgba_mat(235,50,50,1.0)}
        // if (TextureName[i].slice(0, 3) == "mat") {
        //     else {meshes[i].material = decorations.rgba_mat(TextureColor[i].r*255,TextureColor[i].r*255,TextureColor[i].r*255,1.0)}
        // }
        else {
            if (TextureName[i] == 'darkmat'){meshes[i].material = decorations.dark}
            else if (TextureName[i] == 'flaremat'){meshes[i].material = decorations.flare}
            else if (TextureName[i] == 'iceddmat'){meshes[i].material = decorations.icedd}
            else if (TextureName[i] == 'pm1mat'){meshes[i].material = decorations.pm1}
            else if (TextureName[i] == 'pm2mat'){meshes[i].material = decorations.pm2}
            else{meshes[i].material = decorations.bright}
        }
    }
}