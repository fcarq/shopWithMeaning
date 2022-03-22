

// Love icon: <a href="https://www.flaticon.com/free-icons/happy-face" title="happy-face icons">Happy-face icons created by Freepik - Flaticon</a>
/**
 *
 */
function getListOfBrands() {

}

/**
 *
 */
function getPlaceToAddInfo() {

}

/**
 *
 * @param {*} el
 */
function setBrandInfo(el) {

}

/**
 *
 * @param {*} el
 */
function setGoodBrand(el) {
  const elementImg = document.createElement('img');
  elementImg.src = chrome.runtime.getURL('img/good.png');
  el.appendChild(elementImg);
}

/**
 *
 * @param {*} el
 */
function setBadBrand(el) {
  // todo: implement
}

/**
 *
 * @return {boolean}
 */
function checkIfBrandInfoExists() {
  // todo: implement
  return true;
}

/**
 * TODO: add type of fetching in interface(byclass, byid, ??)
 * @param {*} nameToFetch
 */
function getAllPageBrands(nameToFetch) {
  const elements = document.getElementsByClassName(nameToFetch);
  [].map.call(elements, (element) => setBrandInfo(element));
}

/**
 *
 */
function processPage() {
  const typeOfWebsite = getWebsiteInfo();
  if (typeOfWebsite === constants.WEBSITE_TYPE_ONE_BRAND) {

  }
}

getAllPageBrands('ct-tile--brand');
