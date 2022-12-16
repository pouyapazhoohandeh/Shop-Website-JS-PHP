"use strict"

function GetUser() { 
  $.ajax({
    type : "get",
    url : "includes/api/Users/GetUserList.php",
    async : "true",
    success : function(Result){
     let Users=JSON.parse(Result);
     for (let [index, element] of Users.entries()) {
                let Row =`<tr id='${index+1}'>
                <td>${index+1}</td>
                <td class="UserID" style="display:none">${element.id}</td>
                <td class="UserFName" >${element.FullName}</td>
                <td class="UserPhone" >${element.Phone}</td>
                <td class="UserMail" >${element.Mail}</td>
                <td class="Username" >${element.Username}</td>
                <td class="UserPass" >${element.Password}</td>
                <td class="UserAddress" >${element.Address}</td>
                <td class="td-btn">
                <a href="#editEmployeeModal" class="edit btnupdate" data-toggle="modal"><i class="fa-regular fa-pen-to-square" data-toggle="tooltip" title="Edit"></i></a>
                <a href="#deleteEmployeeModal"  class="delete" data-toggle="modal"><i class="fa-regular fa-trash-can" data-toggle="tooltip" title="Delete"></i></a>
            </td>
            </tr>`
            $('#UserListTable').append(Row);
            
      }
    }
  });
 }

$(document).ready(function(){
    
    GetUser();
  
  });