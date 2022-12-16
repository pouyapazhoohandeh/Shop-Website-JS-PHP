"use strict"

function loadProduct() { 
  $.ajax({
    type : "get",
    url : "includes/api/GetProduct2.php",
    async : "true",
    success : function(Result){
     let Products=JSON.parse(Result);
     for (let [index, element] of Products.entries()) {
                let Row =`<tr id='${index+1}'>
                <td>${index+1}</td>
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
    //  Products.entries().forEach((index,element) => {
    //     let Row =`<tr>
    //             <td>${index}</td>
    //             <td>${element.Id}</td>
    //             <td>${element.Name}</td>
    //             <td>${element.Category}</td>
    //             <td>${element.Price}</td>
    //             <td>${element.Quantity}</td>
    //             <td>${element.Discount}</td>
    //             <td>${element.Description}</td>
    //         </tr>`
    //         $('#ProductTBL').append(Row);
    //  });
    //   $('.PR-Table .ProductList').html(Result);
    

    }
  });
 }

$(document).ready(function(){
    
   loadProduct();
  
  });