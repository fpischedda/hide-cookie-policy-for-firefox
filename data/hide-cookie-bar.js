function hideCookiesPolicy(tab){

    var possible_div_ids = ['cookie-bar', 'eu-cookie-policy'];
    var ids_length = possible_div_ids.length;
    var cookie_div;
    var parent;
    for(var i=0; i<ids_length; i++){
	div_id = possible_div_ids[i];
	cookie_div = document.getElementById('cookie-bar');
	if(cookie_div != null){
	    cookie_div.parentNode.removeChild(cookie_div);
	    break;
	}
    }
}
hideCookiesPolicy();
