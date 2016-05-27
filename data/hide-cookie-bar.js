function remove_element(element){

  element.parentNode.removeChild(element);
}

function hideCookiesPolicy(tab){

  var possible_element_ids = ['cookie-bar', 'eu-cookie-policy'];
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
  d = document.querySelectorAll('[data-testid="cookie-policy-banner"]');
  if(d.length > 0){
    remove_element(d[0]);
  }
}

hideCookiesPolicy();
