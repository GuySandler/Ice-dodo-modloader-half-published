// the inside of a 10000 line file (took a while to understand the code
if (Addcup != null) {
    for (let i of Addcup) {
        CupIdEnum2[CupIdEnum2[i] = iteration] = i;
        customCupnum.push(iteration)
        iteration++;
    }
}
// ...
if (Addskin != null) {
        for (let i of Addskin) {
            // console.log("SkinIdEnum2[SkinIdEnum2["+i+"] = Skiniteration] = "+i);
            SkinIdEnum2[SkinIdEnum2[i] = Skiniteration] = i;
            customCupnum.push(Skiniteration)
            Skiniteration++;
        }
    }
/// ...
if (cupId >= 36) {
    return "/assets/skins/"+Addskin[cupId-36]+".png";
}
// ...
if (AddMapTocup != null) {
    if (cupId >= 36 && cupId < 36 + AddMapTocup.length) {
        for (let condensedMapListingMod of AddMapTocup[cupId-36]) {
            mapListings.push({
                cupId: cupId,
                mapId: condensedMapListingMod.id,
                diff: condensedMapListingMod.diff,
                name: condensedMapListingMod.name
            });
        }
    }
}
// ...
    num: condensedMapListing.num