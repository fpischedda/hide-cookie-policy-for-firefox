function remove_element(element){

  element.parentNode.removeChild(element);
}

function hideCookiesPolicy(tab){

  var possible_element_ids = ['cookie-bar', 'eu-cookie-policy', 'cccwr', 'cookieChoiceInfo'];
  var ids_length = possible_element_ids.length;
  var cookie_div;
  var parent;
  for(var i=0; i<ids_length; i++){
    element_id = possible_element_ids[i];
    cookie_element = document.getElementById(element_id);
    if(cookie_element != null){
      remove_element(cookie_element);
      return;
    }
  }
  // other document query strategies

  //facebook seems to keep cookie banner in a div with attribute
  //data-testid=cookie-policy-banner
  var e = document.querySelectorAll('[data-testid="cookie-policy-banner"]');
  if(e.length > 0){
    remove_element(e[0]);
  }

  // www.napolisoccer.net uses classes instead of ids
  // the class to look for seems to be pea_cook_wrapper
  e = document.getElementsByClassName('pea_cook_wrapper');
  if(e.length > 0){
    remove_element(e[0]);
  }
}

hideCookiesPolicy();
