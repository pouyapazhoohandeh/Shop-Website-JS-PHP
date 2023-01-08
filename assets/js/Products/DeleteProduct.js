"use strict"

$('body').on('click','.delete',function () { 

    var ProductID = $(this).closest("tr")   // Finds the closest row <tr> 
    .find(".id")     // Gets a descendent with class="id"
    .text();
    $.ajax({
        type : "POST",
        url : "includes/api/Products/DeleteProduct.php",
        data : {'ProductID':ProductID},
        async : "true",
        success : function(Result){
            Swal.fire(
                'محصول با موفقیت حذف شد.',
                '',
                'success'
              )
              loadProduct(); 
        }
      });
 });