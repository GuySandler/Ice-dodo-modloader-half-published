// init function ...
const mapScript = document.querySelector('#map-script').innerHTML;
eval(mapScript);

// making the meshes
BABYLON.Tags.AddTagsTo(platform, "mesh");
BABYLON.Tags.AddTagsTo(cone, "mesh");
BABYLON.Tags.AddTagsTo(sphere, "mesh");
BABYLON.Tags.AddTagsTo(ending, "mesh");
BABYLON.Tags.AddTagsTo(mesh, "mesh");