/* eslint-disable max-len */

/**
 *
 * @return {[string]}
 */
function getListOfTextBrands() {
  // Todo
  const result = [{Text: 'Nestlé', Classification: 'terrible', Context: 'text'}, {Text: 'Adidas', Classification: 'neutral', Context: 'text_adidas'}];
  return result;
}

/**
 *
 * @param {*} el
 */
function searchAndReplace(el) {
  const strToFind = el.Text;
  const REPLACE_WITH = 'TESTMF';
  const regex = new RegExp(strToFind, 'gi');
  const contents = document.querySelectorAll('p,li,span,h1,h2,h3,h4,h5,h6');
  for (const snippet of contents) {
    snippet.textContent = snippet.textContent.replace(regex, REPLACE_WITH);
  }
}

/**
 *
 */
function processPageText() {
  const listOfTextBrands = getListOfTextBrands();
  listOfTextBrands.forEach(searchAndReplace);
};

/**
 *
 * @param {*} url
 * @return  {null}
 */
function processMainIcon(url) {
  return null;
}

/**
 *
 */
function processPage() {
  const url = document.URL;

  processMainIcon(url);
  processPageText();
}


processPage();

