"use strict"

const { swal } = require("./swl");

$(document).ready(function(){
    
    $("#editEmployeeModal").click(function(event){
        event.preventDefault();
        var ProductID = $("#ProductID").val();
        
  
        var InfoData= {
          'ProductName': ProductName,
          'ProductCategory' : ProductCategory,
          'ProductPrice' : ProductPrice,
          'ProductQuantity' : ProductQuantity,
          'ProductDiscount' : ProductDiscount,
          'ProductDesc' : ProductDesc
        };
        $.ajax({
          type : "POST",
          url : "http://php.test/shop/includes/api/RegisterProduct.php",
          data : FormData,
          async : "true",
          success : function(Result){
            Swal.fire({
                title: '<strong>ویرایش <u>محصول</u></strong>',
                icon: 'question',
                html:
                  'You can use <b>bold text</b>, ' +
                  '<a href="//sweetalert2.github.io">links</a> ' +
                  'and other HTML tags',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'تایید',
                cancelButtonText:
                  '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'انصراف'
              })
          }
        });
  
  });
       
});
  