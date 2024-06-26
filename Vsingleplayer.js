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