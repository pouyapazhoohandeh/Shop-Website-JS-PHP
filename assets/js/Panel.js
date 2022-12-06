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
function ClearContent(){

}
//Using Ajax For Add Product
$(document).ready(function(){

  function showData(){
    $.ajax({
      url:"http://php.test/shop/includes/api/GetProduct.php",
      method:"GET",
      success:function(dataa){
        console.log(dataa);
      }
    })
  }
  showData();


  $("#editEmployeeModal").click(function(event){

    var ProductName = $("#ProductName").val();
    var ProductCategory = $("#ProductCategory").val();
    var ProductPrice = $("#ProductPrice").val();
    var ProductQuantity = $("#ProductQuantity").val();
    var ProductDiscount = $("#ProductDiscount").val();
    var ProductDesc = $("#ProductDesc").val();
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

      function ClearContent(){
        $("#ProductName").val("");
        $("#ProductCategory").val("");
        $("#ProductPrice").val("");
        $("#ProductQuantity").val("");
        $("#ProductDiscount").val("");
        $("#ProductDesc").val("");
      }

      var FormData= {
        'ProductName': ProductName,
        'ProductCategory' : ProductCategory,
        'ProductPrice' : ProductPrice,
        'ProductQuantity' : ProductQuantity,
        'ProductDiscount' : ProductDiscount,
        'ProductDesc' : ProductDesc
      };
      
        if(ProductName=="")
        {
          Swal.fire(
            'نام محصصول را وارد کنید!',
            '',
            'error');
          
        }else if(ProductCategory==""){
          Swal.fire(
            'دسته بندی محصصول را وارد کنید!',
            '',
            'error');
        }else if(ProductPrice==""){
          Swal.fire(
            ' قیمت محصصول را وارد کنید!',
            '',
            'error');
          }else if(ProductQuantity==""){
            Swal.fire(
              ' تعداد محصصول را وارد کنید!',
              '',
              'error');
            }else if(ProductDiscount==""){
              Swal.fire(
                ' تخفیف محصصول را وارد کنید!',
                '',
                'error');
              }else if(ProductDesc==""){
                Swal.fire(
                  'توضیحات محصصول را وارد کنید!',
                  '',
                  'error');
                }
                else{
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
                  ClearContent();

                }
      
      
});

})
