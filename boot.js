// init function ...
const mapScript = document.querySelector('#map-script').innerHTML;
eval(mapScript);

// making the meshes
BABYLON.Tags.AddTagsTo(platform, "mesh platform");
BABYLON.Tags.AddTagsTo(cone, "mesh cone");
BABYLON.Tags.AddTagsTo(sphere, "mesh sphere");
BABYLON.Tags.AddTagsTo(ending, "mesh ending");
BABYLON.Tags.AddTagsTo(mesh, "mesh");