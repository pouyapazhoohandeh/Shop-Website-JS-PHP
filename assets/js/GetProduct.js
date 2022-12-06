"use strict"

const { swal } = require("./swl");

$(document).ready(function(){
    
    
    $("#ProductTBL").on('click','#editEmployeeModal',function(){
        // get the current row
        var currentRow=$(this).closest("tr"); 
        var col1=currentRow.find("td:eq(0)").html(); // get current row 1st table cell TD value
        var data=col1;
        alert(data);
        console.log(data);
   });

    $("#editEmployeeModal").click(function(event){
        event.preventDefault();
        var ProductID = $("#ProductID").val();
        

        var InfoData= {
          'ProductName': ProductName,
          'ProductDesc' : ProductDesc
        };
        $.ajax({
          type : "get",
          url : "http://php.test/shop/includes/api/GetProduct.php",
          dataType: 'json',
          data : InfoData,
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
  