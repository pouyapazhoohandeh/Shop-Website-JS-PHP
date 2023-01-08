"use strict"

function loadProduct() { 
  $.ajax({
    type : "get",
    url : "includes/api/Products/GetProductSlider.php",
    async : "true",
    success : function(Result){
     let ProductData=JSON.parse(Result);
     for (let [element] of ProductData.entries()) {
                let Row =`<div class="blog-slider__code">${element.Category}</div>'>
                <div class="blog-slider__title">${element.Name}</div>
                <td class="blog-slider__text" >${element.Description}</td>
                <a href="#" class="blog-slider__button">${element.Price+"تومان"}</a>`
            $('.blog-slider__content').append(Row);  
      }
    }
  });
 }
$(document).ready(function(){
    
   loadProduct(); 
  
  });