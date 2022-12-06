"use strict"

function loadProduct() { 
  $.ajax({
    type : "get",
    url : "includes/api/GetProduct.php",
    async : "true",
    success : function(Result){
     
      $('.PR-Table .ProductList').html(Result);
    
    }
  });
 }

$(document).ready(function(){
    
   loadProduct();
  
  });