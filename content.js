
// Todo: move the contants to a new file and import them?

// https://github.com/fcarq/shopWithMeaning/wiki/Type-of-websites
const WEBSITE_TYPE_ONE_BRAND = 'WS_TYPE_ONE';
const WEBSITE_TYPE_MULT_BRAND = 'WS_TYPE_MULT';
const FETCHING_TYPE_BY_CLASS = 'class';

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
 *
 * @param {*} nameToFetch
 */
function getAllPageBrandsViaClass(nameToFetch) {
  const elements = document.getElementsByClassName(nameToFetch);
  [].map.call(elements, (element) => setBrandInfo(element));
}

/**
 *
 * @return {string}
 */
function getWebsiteInfo() {
  // todo
  return WEBSITE_TYPE_MULT_BRAND;
}

/**
 *
 * @param {*} url
 * @return {[string, string]}
 */
function getLogicForWebsite(url) {
  // todo
  return [FETCHING_TYPE_BY_CLASS, 'ct-tile--brand'];
}

/**
 *
 * @param {string} url
 */
function processMultiBrandWebsite(url) {
  const [typeOfElement, value] = getLogicForWebsite(url);

  switch (typeOfElement) {
    case FETCHING_TYPE_BY_CLASS:
      getAllPageBrandsViaClass(value);
      break;
  }
}

/**
 *
 */
function processPage() {
  const url = document.URL;
  const typeOfWebsite = getWebsiteInfo(url);

  switch (typeOfWebsite) {
    case WEBSITE_TYPE_ONE_BRAND:
      // todo
      break;


    case WEBSITE_TYPE_MULT_BRAND:
      processMultiBrandWebsite(url);
      break;
    default:
      break;
  }
}


processPage();

