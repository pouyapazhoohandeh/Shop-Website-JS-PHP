"use strict";

let Tabs = document.querySelectorAll('.Tabs-Toggle');
let Contents = document.querySelectorAll('.Tabs-Content');
Tabs.forEach((tab,index)=> {
  tab.addEventListener('click',()=>{
      Contents.forEach((Content) => {
          Content.classList.remove('is-active');
          });
    Tabs.forEach((tab) =>{
      tab.classList.remove('is-active');
    });
    Contents[index].classList.add('is-active');
    Tabs[index].classList.add('is-active');
  });
});
//Using Ajax For Add Product
$(document).ready(function(){

  $("#editEmployeeModal").click(function(event){

    event.preventDefault();
      Swal.fire({ 
        buttons: {
            cancel: true,
            confirm: true,
        },      
    html: `
        <label for="swal2-input">Name : </label>
        <input
        type="text"
        placeholder="test"
        value="${inputValue}"
        class="swal2-input"
        id="range-value">
        <label for="swal2-input">Category : </label>
        <input
        type="text"                       
        class="swal2-input"
        id="range-value">
        <label for="swal2-input">Price : </label>
        <input
        type="number"                       
        class="swal2-input"
        id="range-value">`,
        
    })
  });
  $("#PRsubmit").click(function(event){
      event.preventDefault();
      var ProductName = $("#ProductName").val();
      var ProductCategory = $("#ProductCategory").val();
      var ProductPrice = $("#ProductPrice").val();
      var ProductQuantity = $("#ProductQuantity").val();
      var ProductDiscount = $("#ProductDiscount").val();
      var ProductDesc = $("#ProductDesc").val();

      

      var FormData= {
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
            // alert(Result);
            Swal.fire(
              'محصول با موفقیت ثبت شد!',
              '',
              'success'
            )
        }
        
      });
});

})
