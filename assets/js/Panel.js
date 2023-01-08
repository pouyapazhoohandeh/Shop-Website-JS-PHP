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

  $('#ProductTBL').DataTable({
    processing:true,
    ajax:"includes/api/Products/GetProductList.php",
    "language": {
        "lengthMenu": "نمایش _MENU_ رکورد هر صفحه",
        "zeroRecords": "متاسفانه موردی یافت نشد",
        "info": "صفحه _PAGE_ از _PAGES_",
        "infoEmpty": "موردی یافت نشد",
        "infoFiltered": "(فیلتر _MAX_ رکورد)",
        "search": "جستجو",
        "loadingRecords": "درحال بارگذاری",
        "processing": "در حال پردازش",
        "paginate": {
            "first": "ابتدا",
            "last": "انتها",
            "next": "بعدی",
            "previous": "قبلی"
        },
        "aria": {
            "sortAscending": ": حالت صعودی فعال",
            "sortDescending": ": حالت نزولی فعال"
        }
    },
    "pageLength": 5,
        "columns": [
      {Result: 'Name'},
      {Result: 'name'},
      {Result: 'email'}
  ]
});
  


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
  //For reset content
  function ClearContent(){
    $("#ProductID").val("");
    $("#ProductName").val("");
    $("#ProductCategory").val("");
    $("#ProductPrice").val("");
    $("#ProductQuantity").val("");
    $("#ProductDiscount").val("");
    $("#ProductDesc").val("");
  }
  $('#PR-reset').click(()=>{
    ClearContent();
  }
   
  );

  $("#PRsubmit").click(function(event){
      event.preventDefault();
      var ProductID = $("#ProductID").val();
      var ProductName = $("#ProductName").val();
      var ProductCategory = $("#ProductCategory").val();
      var ProductPrice = $("#ProductPrice").val();
      var ProductQuantity = $("#ProductQuantity").val();
      var ProductDiscount = $("#ProductDiscount").val();
      var ProductDesc = $("#ProductDesc").val();


      $("#ProductName").val(ProductName);
      $("#ProductCategory").val(ProductCategory);
      $("#ProductPrice").val(ProductPrice);
      $("#ProductQuantity").val(ProductQuantity);
      $("#ProductDiscount").val(ProductDiscount);
      $("#ProductDesc").val(ProductDesc);
      
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
                  if(ProductID==""){
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
                  ClearContent();
                }else{
                  var FormData= {
                    'ProductID': ProductID,
                    'ProductName': ProductName,
                    'ProductCategory' : ProductCategory,
                    'ProductPrice' : ProductPrice,
                    'ProductQuantity' : ProductQuantity,
                    'ProductDiscount' : ProductDiscount,
                    'ProductDesc' : ProductDesc
                  };
                  $.ajax({
                    type : "POST",
                    url : "includes/api/UpdateProduct.php",
                    data : FormData,
                    async : "true",
                    success : function(Result){
                        // alert(Result);
                        
                        Swal.fire(
                          'محصول با موفقیت ویرایش شد!',
                          '',
                          'success'
                        )
                    }

                    
                      // var UData = $(this).closest("tr")   // Finds the closest row <tr> 
                      // .find(".id")

                      // $("#ProductID").val(UData);
                    
                  });
                  ClearContent();
                  }
                  loadProduct();
                }   
    });
})
