$('body').on('click','.delete',function () { 

    var ProductID = $(this).closest("tr")   // Finds the closest row <tr> 
    .find(".id")     // Gets a descendent with class="nr"
    .text();
 });