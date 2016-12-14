/*global $*/

// This runs on the detail view

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}


/*global api_key*/
var url_one_shoe = function() {
  var url_id = $.urlParam('shoesID');
  return 'https://api.airtable.com/v0/appSGsFkaru4JJ41z/Shoes/' + url_id +'?api_key=' + api_key;
}


function renderOneShoe(shoes) {
            var shoe_name = shoes.fields['Name'];
            var shoe_pics = shoes.fields['Pictures'];
            var shoe_foams = shoes.fields['foamposites'];
     
      
      
      var shoe_info = '';
      
      if (shoe_name) {
        shoe_info +=`<div class="panel panel-default">`;
          shoe_info +=`<div class="panel-body">`;
          if (shoe_pics) {
            $.each(shoe_pics, function(i, pic){
              shoe_info +=`<a href="studentDetail.html?studentID=${shoes.id}"><img src="${pic.url}"></a>`;
            });
          }
          shoe_info +=`</div>`;
        shoe_info += `<div class="panel-footer"> <h3><strong> ${shoe_name}  </strong></h3> <br> `;
      
         
      }
      $('.one_shoes_foams').append(shoe_info);
}

if ($.urlParam('shoesID')) {
  $.get(url_one_shoe(), renderOneShoe);   
}
