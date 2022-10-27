"user strict";

var selectorLogin = document.getElementById("login");
        var selectorRegister = document.getElementById("register");
        var selectorBtn = document.getElementById("btn");
        function register()
        {
            selectorLogin.style.left = "-400px";
            selectorRegister.style.left = "50px";
            selectorBtn.style.left="110px";
        }
        function login()
        {
            selectorLogin.style.left = "50px";
            selectorRegister.style.left = "450px";
            selectorBtn.style.left="0";
        }

$(document).ready(function(){


    $("#btnregister").click(function(event){
        event.preventDefault();
      fullname = $("#fullname").val();
      email = $("#email").val();
      username = $("#username").val();
      password = $("#password").val();

      var FormData= {
        'fullname': fullname,
        'email' : email,
        'username' : username,
        'password' : password
      };

      $.ajax({
        type : "POST",
        url : "http://php.test/shop/includes/api/register.php",
        data : FormData,
        async : "true",
        success : function(Result){
            alert(Result);
        }
      });

  });
})
