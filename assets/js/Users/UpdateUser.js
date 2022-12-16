"use strict"

$("body").on("click",".User-submit",function() {
    var UserID = $(this).closest("tr")   
                       .find(".id")     
                       .text(); 
    var UserFName = $(this).closest("tr")   
                        .find(".FullName")     
                        .text();
    var UserPhone = $(this).closest("tr")   
                        .children(".Phone")     
                        .text();          
    var UserMail = $(this).closest("tr") 
                        .find(".Mail")   
                        .text();
    var Username = $(this).closest("tr")  
                        .find(".Username")    
                        .text();
    var UserPass = $(this).closest("tr") 
                        .find(".Password")    
                        .text();
    var UserAddress = $(this).closest("tr")  
                        .find(".Address")     
                        .text();
      $("#UserID").val(UserID);
      $("#UserFName").val(UserFName);
      $("#UserPhone").val(UserPhone);
      $("#UserMail").val(UserMail);
      $("#Username").val(Username);
      $("#UserPass").val(UserPass);
      $("#UserAddress").val(UserAddress);
});