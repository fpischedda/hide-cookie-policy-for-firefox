function remove_element(element){

  element.parentNode.removeChild(element);
}

function remove_nth_element_with_class(class_selector, index){
  elements = document.getElementsByClassName(class_selector);
  if(elements.length > 0){
    remove_element(elements[index]);
    return true;
  }
  return false;
}

function remove_first_element_by_selector(selector){
  e = document.querySelector(selector);
  if(e){
    remove_element(e);
    return true;
  }
  return false;
}

/*
 * function hideCookiePolicyBySelectors
 * @selectors: is an array of selectors, first element that match the selector
 * is removed from the DOM
 * */
function hideCookiePolicyBySelectors(selectors){
  var selectors_length = selectors.length;
  for(var i=0; i<selectors_length; i++){
    if(remove_first_element_by_selector(selectors[i])){
      return;
    }
  }
}
hideCookiePolicyBySelectors([
'#cookie-bar', '#eu-cookie-policy', '#cccwr', '#cookieChoiceInfo',
'#iubenda-cs-banner',
'[data-testid="cookie-policy-banner"]',
'.pea_cook_wrapper', '.cc-cookies']);
