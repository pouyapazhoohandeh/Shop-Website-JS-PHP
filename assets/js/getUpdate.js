"use strickt";
$(".btnupdate").click(function() {
    var ProductID = $(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".id")     // Gets a descendent with class="nr"
                       .text()
    var ProductName = $(this).closest("tr")   // Finds the closest row <tr> 
                        .find(".name")     // Gets a descendent with class="nr"
                        .text();
    var ProductCat = $(this).closest("tr")   // Finds the closest row <tr> 
                        .find(".cat")     // Gets a descendent with class="nr"
                        .text();  ;           // Retrieves the text within <td>
    var FormData= {
       'ProductID': ProductID,
      'ProductName' : ProductName,
        'ProductCat' : ProductCat        
        };

        $.ajax({
        type : "POST",
        url : "http://php.test/shop/includes/api/UpdateProduct.php",
        data : FormData,
        async : "true",
        success : function(Result){
            alert(Result);
            console.log(FormData);

        }
        
        });
});