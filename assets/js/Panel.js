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

$('#ProductTBL').DataTable({
    processing: true,
    // serverSide: true,
    pagingType: 'full_numbers',
    ajax:{
        url: "includes/api/Products/GetProductList.php",
        method: 'POST'
    },
    columns:[
        {
            data: 'id',
            className: 'id'
        },
        {
            data: 'Name',
            className: 'name'
        },
        {
            data: 'Category',
            className: 'cat'
        },
        {
            data: 'Price',
            className: 'price'
        },
        {
            data: 'Quantity',
            className: 'quantity'
        },
        {
            data: 'Discount',
            className: 'disc'
        },
        {
            data: 'Description',
            className: 'desc'
        },
        // {
        // data: ,
        // orderable: false,
        // className: '',
        // render: function(data, type, row, meta) {
        //     console.log()
        //     return '<a class="me-2 btn btn-sm rounded-0 py-0 edit_data btn-primary" href="javascript:void(0)" data-id="' + (row.id) + '">Edit</a><a class="btn btn-sm rounded-0 py-0 delete_data btn-danger" href="javascript:void(0)" data-id="' + (row.id) + '">Delete</a>';
        // }
        // }
    ],
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

function loadProduct(index)
{

    $.ajax({
        type : "post",
        url : "includes/api/products/GetProductList.php",
        data:{page:index},
        async : "true",
        success : function(Result){
            $('#ProductListdata').empty();
            let Products=JSON.parse(Result);
            for (let [index, element] of Products.entries()) {
                let Row =`<tr id='${element.id}'>
                <td>${index+1}</td>
                <td class="id" style="display:none">${element.id}</td>
                <td class="name" >${element.Name}</td>
                <td class="cat" >${element.Category}</td>
                <td class="price" >${element.Price}</td>
                <td class="quantity" >${element.Quantity}</td>
                <td class="disc" >${element.Discount}</td>
                <td class="desc" >${element.Description}</td>
                <td class="td-btn">
                <a href="#" onclick="PR_Update(${element.id})" class="edit"><i class="fa-regular fa-pen-to-square" data-toggle="tooltip" title="Edit"></i></a>
                <a href="#" onclick="PR_Delete(${element.id})"  class="delete"><i class="fa-regular fa-trash-can" data-toggle="tooltip" title="Delete"></i></a>
            </td>
            </tr>`

                $('#ProductTBL').append(Row);
           }
        }
    });
}


function PR_Update(id)
{
    $.ajax({
        type: "POST",
        url: "includes/api/Products/GetProduct.php",
        data: {ProductID:id},
        async: "true",
        success: function (Result)
        {
            $.each(JSON.parse(Result), function (key, value) {
                $("#ProductID").val(value.id);
                $("#ProductName").val(value.Name);
                $("#ProductCategory").val(value.Category);
                $("#ProductPrice").val(value.Price);
                $("#ProductQuantity").val(value.Quantity);
                $("#ProductDiscount").val(value.Discount);
                $("#ProductDesc").val(value.Description);
            });
        }
    });

}


function PR_Delete(id)
{

    $.ajax({
        type: "POST",
        url: "includes/api/Products/DeleteProduct.php",
        data: {ProductID:id},
        async: "true",
        success: function (Result) {
            // alert(Result);
            Swal.fire(
                'محصول با موفقیت حذف شد!',
                '',
                'success'
            )
            loadProduct();
        }
    });
}

function PR_Submit()
{
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
            'نام محصول را وارد کنید!',
            '',
            'error');

    }else if(ProductCategory==""){
        Swal.fire(
            'دسته بندی محصول را وارد کنید!',
            '',
            'error');
    }else if(ProductPrice==""){
        Swal.fire(
            ' قیمت محصول را وارد کنید!',
            '',
            'error');
    }else if(ProductQuantity==""){
        Swal.fire(
            ' تعداد محصول را وارد کنید!',
            '',
            'error');
    }else if(ProductDiscount==""){
        Swal.fire(
            ' تخفیف محصول را وارد کنید!',
            '',
            'error');
    }else if(ProductDesc==""){
        Swal.fire(
            'توضیحات محصول را وارد کنید!',
            '',
            'error');
    }
    else {
        if (ProductID == "") {
            var FormData = {
                'ProductName': ProductName,
                'ProductCategory': ProductCategory,
                'ProductPrice': ProductPrice,
                'ProductQuantity': ProductQuantity,
                'ProductDiscount': ProductDiscount,
                'ProductDesc': ProductDesc
            };
            $.ajax({
                type: "POST",
                url: "includes/api/Products/RegisterProduct.php",
                data: FormData,
                async: "true",
                success: function (Result) {
                     //alert(Result);
                    Swal.fire(
                        'محصول با موفقیت ثبت شد!',
                        '',
                        'success'
                    )
                    loadProduct();
                    PR_Reset();
                }
            });

        }
        else
        {
            var FormData = {
                'ProductID': ProductID,
                'ProductName': ProductName,
                'ProductCategory': ProductCategory,
                'ProductPrice': ProductPrice,
                'ProductQuantity': ProductQuantity,
                'ProductDiscount': ProductDiscount,
                'ProductDesc': ProductDesc
            };
            $.ajax({
                type: "POST",
                url: "includes/api/Products/UpdateProduct.php",
                data: FormData,
                async: "true",
                success: function (Result) {
                     //alert(Result);
                    Swal.fire(
                        'محصول با موفقیت بروزرسانی شد!',
                        '',
                        'success'
                    )
                    loadProduct();
                    PR_Reset();
                }
            });
        }

    }
}


function PR_Search()
{

    event.preventDefault();
    var ProductSearch = $("#ProductSearch").val();
    $.ajax({
        type: "POST",
        url: "includes/api/Products/SearchProduct.php",
        data: {name:ProductSearch},
        async: "true",
        success: function (Result) {
            $('#ProductListdata').empty();
            let Products=JSON.parse(Result);
            for (let [index, element] of Products.entries()) {
                let Row =`<tr id='${element.id}'>
                <td>${index+1}</td>
                <td class="id" style="display:none">${element.id}</td>
                <td class="name" >${element.Name}</td>
                <td class="cat" >${element.Category}</td>
                <td class="price" >${element.Price}</td>
                <td class="quantity" >${element.Quantity}</td>
                <td class="disc" >${element.Discount}</td>
                <td class="desc" >${element.Description}</td>
                <td class="td-btn">
                <a href="#" onclick="PR_Update(${element.id})" class="edit"><i class="fa-regular fa-pen-to-square" data-toggle="tooltip" title="Edit"></i></a>
                <a href="#" onclick="PR_Delete(${element.id})"  class="delete"><i class="fa-regular fa-trash-can" data-toggle="tooltip" title="Delete"></i></a>
            </td>
            </tr>`

                $('#ProductTBL').append(Row);
        }
            }
    });
}

function PR_Reset()
{
    $("#ProductID").val("");
    $("#ProductName").val("");
    $("#ProductCategory").val("");
    $("#ProductPrice").val("");
    $("#ProductQuantity").val("");
    $("#ProductDiscount").val("");
    $("#ProductDesc").val("");
}



//user
function loadUsers(index)
{
    $.ajax({
        type : "post",
        url : "includes/api/users/GetUsersList.php",
        data:{page:index},
        async : "true",
        success : function(Result){
            $('#UserListdata').empty();
            let users=JSON.parse(Result);
            for (let [index, element] of users.entries()) {
                let Row =`<tr id='${element.id}'>
                <td>${index+1}</td>
                <td class="id" style="display:none">${element.id}</td>
                <td class="name" >${element.FullName}</td>
                <td class="cat" >${element.Phone}</td>
                <td class="price" >${element.Email}</td>
                <td class="quantity" >${element.Username}</td>
                <td class="disc" >${element.Password}</td>
                <td class="desc" >${element.Address}</td>
                <td class="desc" >${element.type}</td>
                <td class="td-btn">
                <a href="#" onclick="US_Update(${element.id})" class="edit"><i class="fa-regular fa-pen-to-square" data-toggle="tooltip" title="Edit"></i></a>
                <a href="#" onclick="US_Delete(${element.id})"  class="delete"><i class="fa-regular fa-trash-can" data-toggle="tooltip" title="Delete"></i></a>
            </td>
            </tr>`

                $('#UserTBL').append(Row);
            }
        }
    });
}


function US_Update(id)
{

    $.ajax({
        type: "POST",
        url: "includes/api/users/GetUser.php",
        data: {UserID:id},
        async: "true",
        success: function (Result)
        {
            $.each(JSON.parse(Result), function (key, value) {
                $("#UserID").val(value.id);
                $("#UserFName").val(value.FullName);
                $("#UserTel").val(value.Phone);
                $("#UserEmail").val(value.Email);
                $("#UserName").val(value.Username);
                $("#UserPass").val(value.Password);
                $("#UserAddress").val(value.Address);
                $("#user-type-selector").val(value.type);
            });
        }
    });

}


function US_Delete(id)
{

    $.ajax({
        type: "POST",
        url: "includes/api/users/DeleteUser.php",
        data: {UserID:id},
        async: "true",
        success: function (Result) {
            // alert(Result);
            Swal.fire(
                'کاربر با موفقیت حذف شد!',
                '',
                'success'
            )
            loadUsers();
            US_Reset();
        }
    });
}

function US_Submit()
{
    event.preventDefault();
    var UserID = $("#UserID").val();
    var UserFName = $("#UserFName").val();
    var UserTel = $("#UserTel").val();
    var UserEmail = $("#UserEmail").val();
    var UserName = $("#UserName").val();
    var UserPass = $("#UserPass").val();
    var UserAddress = $("#UserAddress").val();
    var UserType = $("#user-type-selector").val();

    $("#UserID").val(UserID);
    $("#UserFName").val(UserFName);
    $("#UserTel").val(UserTel);
    $("#UserEmail").val(UserEmail);
    $("#UserName").val(UserName);
    $("#UserPass").val(UserPass);
    $("#UserAddress").val(UserAddress);
    $("#user-type-selector").val(UserType);

    if(UserFName=="")
    {
        Swal.fire(
            'نام و نام خانوادگی را وارد کنید!',
            '',
            'error');

    }else if(UserTel==""){
        Swal.fire(
            'شماره تلفن را وارد کنید!',
            '',
            'error');
    }else if(UserName==""){
        Swal.fire(
            ' نام کاربری را وارد کنید!',
            '',
            'error');
    }else if(UserPass==""){
        Swal.fire(
            ' رمز عبور را وارد کنید!',
            '',
            'error');
    }else if(UserAddress==""){
        Swal.fire(
            ' نشانی را وارد کنید!',
            '',
            'error');
    }
    else {
        if (UserID == "") {
            var FormData = {
                'UserFName': UserFName,
                'UserTel': UserTel,
                'UserEmail': UserEmail,
                'UserName': UserName,
                'UserPass': UserPass,
                'UserAddress': UserAddress,
                'UserType': UserType,
            };
            $.ajax({
                type: "POST",
                url: "includes/api/users/RegisterUser.php",
                data: FormData,
                async: "true",
                success: function (Result) {
                    //alert(Result);
                    Swal.fire(
                        'کاربر با موفقیت ثبت شد!',
                        '',
                        'success'
                    )
                    loadUsers();
                    US_Reset();
                }
            });

        }
        else
        {
            var FormData = {
                'UserID': UserID,
                'UserFName': UserFName,
                'UserTel': UserTel,
                'UserEmail': UserEmail,
                'UserName': UserName,
                'UserPass': UserPass,
                'UserAddress': UserAddress,
                'UserType': UserType,
            };
            $.ajax({
                type: "POST",
                url: "includes/api/users/UpdateUser.php",
                data: FormData,
                async: "true",
                success: function (Result) {
                    //alert(Result);
                    Swal.fire(
                        'کاربر با موفقیت بروزرسانی شد!',
                        '',
                        'success'
                    )
                    loadUsers();
                    US_Reset();
                }
            });
        }

    }
}


function US_Reset()
{
    $("#UserID").val("");
    $("#UserFName").val("");
    $("#UserTel").val("");
    $("#UserEmail").val("");
    $("#UserName").val("");
    $("#UserPass").val("");
    $("#UserAddress").val("");
    $("#user-type-selector").val("");
}
