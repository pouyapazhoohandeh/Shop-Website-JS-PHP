"use strict"

$('body').on('click','.delete',function () { 

    var UserID = $(this).closest("tr")   
    .find(".id") 
    .text();
    $.ajax({
        type : "POST",
        url : "includes/api/Users/DeleteUser.php",
        data : {'UserID':UserID},
        async : "true",
        success : function(Result){
            Swal.fire(
                'کاربر با موفقیت حذف شد.',
                '',
                'success'
              )
              GetUser(); 
        }
      });
 });