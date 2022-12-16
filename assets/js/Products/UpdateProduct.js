"use strict"

$("body").on("click",".btnupdate",function() {
    var ProductID = $(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".id")     // Gets a descendent with class="nr"
                       .text(); 
    var ProductName = $(this).closest("tr")   
                        .find(".name")     
                        .text();
    var ProductCat = $(this).closest("tr")   
                        .children(".cat")     
                        .text();          // Retrieves the text within <td>
    var ProductPrice = $(this).closest("tr")   // Finds the closest row <tr> 
                        .find(".price")     // Gets a descendent with class="nr"
                        .text();
    var ProductQuantity = $(this).closest("tr")   // Finds the closest row <tr> 
                        .find(".quantity")     // Gets a descendent with class="nr"
                        .text();
    var ProductDiscount = $(this).closest("tr")   // Finds the closest row <tr> 
                        .find(".disc")     // Gets a descendent with class="nr"
                        .text();
    var ProductDesc = $(this).closest("tr")   // Finds the closest row <tr> 
                        .find(".desc")     // Gets a descendent with class="nr"
                        .text();
      $("#ProductID").val(ProductID);
      $("#ProductName").val(ProductName);
      $("#ProductCategory").val(ProductCat);
      $("#ProductPrice").val(ProductPrice);
      $("#ProductQuantity").val(ProductQuantity);
      $("#ProductDiscount").val(ProductDiscount);
      $("#ProductDesc").val(ProductDesc);
});