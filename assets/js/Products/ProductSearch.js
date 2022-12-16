"use strict"

function clearTable(){
    $("#ProductListdata").html("");
}
function loadSearchProduct() { 
    let Data = $("inpSearchBox").val("inpSearch");
    let FormData={
        Products:Data
    };
    FormData='Products='+ Data;
  $.ajax({
    type : "POST",
    url : "includes/api/ProductSearch.php",
    data : FormData,
    async : "true",
    success : function(Result){
        alert(FormData);
        alert(Result);
     let Products=JSON.parse(Result);
     clearTable();
     for (let [index, element] of Products.entries()) {
                let Row =`<tr id='${index+1}'>
                <td class="id" style="display:none">${element.id}</td>
                <td class="name" >${element.Name}</td>
                <td class="cat" >${element.Category}</td>
                <td class="price" >${element.Price}</td>
                <td class="quantity" >${element.Quantity}</td>
                <td class="disc" >${element.Discount}</td>
                <td class="desc" >${element.Description}</td>
                <td class="td-btn">
                <a href="#editEmployeeModal" class="edit btnupdate" data-toggle="modal"><i class="fa-regular fa-pen-to-square" data-toggle="tooltip" title="Edit"></i></a>
                <a href="#deleteEmployeeModal"  class="delete" data-toggle="modal"><i class="fa-regular fa-trash-can" data-toggle="tooltip" title="Delete"></i></a>
            </td>
            </tr>`
            $('#ProductTBL').append(Row);
            
      }
    }
    
  });
 }


$(document).ready(function(){


    loadSearchProduct();
  
  });
