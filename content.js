
// Todo: move the contants to a new file and import them?
const WEBSITE_TYPE_ONE_BRAND = 'WS_TYPE_ONE';
const WEBSITE_TYPE_MULT_BRAND = 'WS_TYPE_MULT';

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
  // todo: check the brand classification and set it
  setGoodBrand(el);
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
 * @return {string}
 */
function getWebsiteInfo() {
  return WEBSITE_TYPE_MULT_BRAND;
}

/**
 *
 */
function processMultiBrandWebsite() {
  // fetch the logic of this specific website. for now logic is just
  // the tags that contain the brands
  getAllPageBrands('ct-tile--brand');
}

/**
 *
 */
function processPage() {
  const tabUrl = document.URL;
  const typeOfWebsite = getWebsiteInfo(tabUrl);

  switch (typeOfWebsite) {
    case WEBSITE_TYPE_ONE_BRAND:
      // todo
      break;
    case WEBSITE_TYPE_MULT_BRAND:
      processMultiBrandWebsite();
      break;
    default:
      break;
  }
}


processPage();

