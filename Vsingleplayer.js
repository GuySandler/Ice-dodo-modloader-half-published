// ...
if (skinId > 57) {
    return JSON.parse(localStorage.getItem("CupImages"))[skinId-58];
}
// ...
if (skinId > 57) {
    return {
        name: "Default",
        percent: 1,
        howToGet: "Open your eyes"
      };
}
// ...
if (skinId > 57) {
    console.log("skinIdthing " + (skinId-58).toString())
    console.log(JSON.parse(localStorage.getItem("CupImages")));
    console.log(JSON.parse(localStorage.getItem("CupImages"))[skinId-58])
    // let base64img = JSON.parse(localStorage.getItem("CupImages")[skinId-58])
    // return getFileFromBase64(base64img)
    return JSON.parse(localStorage.getItem("CupImages"))[skinId-58]
}
// ...
if (scriptUrl.substring(0,4) == "/map") {script.src = scriptUrl;}
else {script.innerHTML = scriptUrl}
script.id = "map-script";
if (scriptUrl.substring(0,4) != "/map"){resolve2()}
// ...
if (mapUrl == null) {
    var customMap = JSON.parse(localStorage.getItem("CustomMaps"));
    for(let i in customMap){
        if(customMap[i].id == mapId){
            return customMap[i].map;
        }
    }
    return `/maps/${mapId}.js`;
}
// ...
await FMapLoader.loadMap(this.mainState.mapListing.mapId, this.mainState.mapUrl);