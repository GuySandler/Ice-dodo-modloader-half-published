import {dodoCup} from "../dodoCup.js";

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
console.log(dodoCup[0])
if (scriptUrl.substring(0,4) == 'var ') {console.log("did the thing");script.innerHTML = scriptUrl;}
else if (scriptUrl.substring(0,4) == "/map") {script.src = scriptUrl;}
else {script.innerHTML = scriptUrl}
script.id = "map-script";
if (cupId != 31) {if (scriptUrl.substring(0,4) != "/map"){resolve2()}}

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
// ...
if (cupId == 31) {
    switch(mapId){
        case "tut1":
            fetch('../dodoCup.json')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.tut1);
            })
            .catch(error => {
                console.error('Error fetching the JSON file:', error);
            });break;
    }
}