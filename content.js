function getListOfBrands() {

}

function getPlaceToAddInfo() {

}

function setBrandInfo(el) {
    const text = document.createTextNode(" TEST");
    el.appendChild(text);
}

function checkIfBrandInfoExists() {

}

//TODO: add type of fetching in interface(byclass, byid, ??)
function getAllPageBrands(nameToFetch) {
    let elements = document.getElementsByClassName(nameToFetch);
    [].map.call(elements, element => setBrandInfo(element));
}

function processPage() {

}

getAllPageBrands('ct-tile--brand');