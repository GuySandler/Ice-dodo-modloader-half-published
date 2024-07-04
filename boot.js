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
decorateCustomLevel: function(meshes, platforms, cones, ends) {
    // let meshes = scene.getMeshesByTags("mesh");
    // let platforms = scene.getMeshesByTags("platform");
    // let cones = scene.getMeshesByTags("cone");
    // let ends = scene.getMeshesByTags("end");

    let pmat = new BABYLON.StandardMaterial("pmat", scene);
    pmat.diffuseTexture = new BABYLON.Texture("assets/textures/bright.png", scene);
    pmat.diffuseTexture.uScale = pmat.diffuseTexture.vScale = 1.0;
    pmat.backFaceCulling = false;
    pmat.freeze();

    for(let i = 0;i<platforms.length;i++){
        platforms[i].material = pmat;
    }
    for(let i = 0;i<cones.length;i++){
        cones[i].material = this.rgba_mat(235,50,50,1.0);
    }
    for(let i = 0;i<ends.length;i++){
        ends[i].material = this.rgba_mat(0, 240, 0, 0.8);
    }
}