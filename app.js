/*global $*/
var api_key = 'keyn9ppa2rAt3Dbov';

var shoes_records = 'https://api.airtable.com/v0/appSGsFkaru4JJ41z/Shoes?api_key=' + api_key;






// all foams shoes details
function allfoamsRecords(data)
{  
    $(data.records).each(function(index, shoes)
                         {
                             var shoe_name = shoes.fields['Name'];
                             var shoe_pics = shoes.fields['Pictures'];
                             var shoe_foams = shoes.fields['foamposites'];
    
                          
                           var shoe_info = ''
                           if (shoe_name && shoe_foams) {
                                            shoe_info += `<div class="column">`;
                                                shoe_info += `<div class="col-sm-6 col-md-4">`;
                                                if (shoe_pics) {
                                                    shoe_info += `<div class="thumbnail">`;
                                                $.each(shoe_pics, function(i, pic){
                                                    shoe_info +=`<a href="shoeDetail.html?shoeID=${shoes.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                        }
                        
                         shoe_info += `</div>`;
                         shoe_info += `<div class="caption">${shoe_name} </div>`;
                         shoe_info += `</div>`;
                         shoe_info += `</div>`;
                    
                         }
      $('.shoes_foams').append(shoe_info);
                       });
}

// key and name of function(formula)
$.get(shoes_records, allfoamsRecords);











// all nike shoes info
function allNikesRecords(data)
{  
    $(data.records).each(function(index, shoes)
                         {
                             var shoe_name = shoes.fields['Name'];
                             var shoe_pics = shoes.fields['Pictures'];
                             var shoe_nike = shoes.fields['nike'];
    
                          
                           var shoe_info = ''
                           if (shoe_name && shoe_nike) {
                                            shoe_info += `<div class="column">`;
                                                shoe_info += `<div class="col-sm-6 col-md-4">`;
                                                if (shoe_pics) {
                                                    shoe_info += `<div class="thumbnail">`;
                                                $.each(shoe_pics, function(i, pic){
                                                    shoe_info +=`<a href="shoeDetail.html?shoeID=${shoes.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                        }
                        
                         shoe_info += `</div>`;
                         shoe_info += `<div class="caption">${shoe_name} </div>`;
                         shoe_info += `</div>`;
                         shoe_info += `</div>`;
                    
                         }
      $('.shoes_nike').append(shoe_info);
                       });
}

// key and name of function(formula)
$.get(shoes_records, allNikesRecords);



// all adidas shoes info
function allAdidasRecords(data)
{  
    $(data.records).each(function(index, shoes)
                         {
                             var shoe_name = shoes.fields['Name'];
                             var shoe_pics = shoes.fields['Pictures'];
                             var shoe_adidas = shoes.fields['adidas'];
    
                          
                           var shoe_info = ''
                           if (shoe_name && shoe_adidas) {
                                            shoe_info += `<div class="column">`;
                                                shoe_info += `<div class="col-sm-6 col-md-4">`;
                                                if (shoe_pics) {
                                                    shoe_info += `<div class="thumbnail">`;
                                                $.each(shoe_pics, function(i, pic){
                                                    shoe_info +=`<a href="shoeDetail.html?shoeID=${shoes.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                        }
                        
                         shoe_info += `</div>`;
                         shoe_info += `<div class="caption">${shoe_name} </div>`;
                         shoe_info += `</div>`;
                         shoe_info += `</div>`;
                    
                         }
      $('.shoes_adidas').append(shoe_info);
                       });
}

// key and name of function(formula)
$.get(shoes_records, allAdidasRecords);







// all jordans shoes info
function allJordansRecords(data)
{  
    $(data.records).each(function(index, shoes)
                         {
                             var shoe_name = shoes.fields['Name'];
                             var shoe_pics = shoes.fields['Pictures'];
                             var shoe_jordans = shoes.fields['jordans'];
    
                          
                           var shoe_info = ''
                           if (shoe_name && shoe_jordans) {
                                            shoe_info += `<div class="column">`;
                                                shoe_info += `<div class="col-sm-6 col-md-4">`;
                                                if (shoe_pics) {
                                                    shoe_info += `<div class="thumbnail">`;
                                                $.each(shoe_pics, function(i, pic){
                                                    shoe_info +=`<a href="shoeDetail.html?shoeID=${shoes.id}"><img src="${pic.url}"></a>`;
                                                    
                         });
                        }
                        
                         shoe_info += `</div>`;
                         shoe_info += `<div class="caption">${shoe_name} </div>`;
                         shoe_info += `</div>`;
                         shoe_info += `</div>`;
                    
                         }
      $('.shoes_jordans').append(shoe_info);
                       });
}

// key and name of function(formula)
$.get(shoes_records, allNikesRecords);

