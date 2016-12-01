/*global $*/
var api_key = 'keyn9ppa2rAt3Dbov';

var shoes_records = 'https://api.airtable.com/v0/appSGsFkaru4JJ41z/Shoes?api_key=' + api_key;



// All details
function shoesRecords(data) 
{
  
    $(data.records).each(function(index, shoes) {
      var shoe_name = shoes.fields['Name'];

      var shoe_pics = shoes.fields['Pictures'];
      var shoe_foams = shoes.fields['foamposites'];
      
      var shoe_info = '';
      if (shoe_name && shoe_foams) {
        shoe_info +=`<div class="media">`;
          shoe_info +=`<div class="column">`;
        shoe_info += `<div class="col-sm-6 col-md-4"`;
          if (shoe_pics) {
            $.each(shoe_pics, function(i, pic){
              shoe_info +=`<a href="detail.html?muralID=${shoes.id}"><img src="${pic.url}"></a>`;
            });
          }
          shoe_info +=`</div>`;
        shoe_info += `<div class="media-body">${shoe_name}</div>`;
        shoe_info +=`</div>`;
      }
      
      $('.shoes_foams').append(shoe_info);
    });
}

$.get(shoes_records, shoesRecords);
