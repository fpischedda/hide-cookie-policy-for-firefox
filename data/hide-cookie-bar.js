function hideCookiesPolicy(tab){

  var possible_element_ids = ['cookie-bar', 'eu-cookie-policy'];
  var ids_length = possible_element_ids.length;
  var cookie_div;
  var parent;
  for(var i=0; i<ids_length; i++){
    element_id = possible_element_ids[i];
    cookie_element = document.getElementById(element_id);
    if(cookie_element != null){
      cookie_element.parentNode.removeChild(cookie_element);
      break;
    }
  }
}
hideCookiesPolicy();
