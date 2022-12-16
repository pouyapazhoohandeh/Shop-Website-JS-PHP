<?php

if (!empty($_POST))
{
    try{
        require_once "../DataBase/database.php";
        $UserId = $_POST['id'];
        $UserFName = $_POST['UserFName'];
        $UserTel = $_POST['UserTel'];
        $UserMail=$_POST['UserMail'];
        $Username=$_POST['Username'];
        $UserPass=$_POST['UserPass'];
        $Useraddress=$_POST['Useraddress'];
        $sql="UPDATE users SET FullName='$UserFName',
                                 Phone='$UserTel',
                                 Email='$UserMail',
                                 Username='$Username',
                                 Password='$UserPass',
                                 Address='$Useraddress' WHERE id='$UserId' " ;
        $conn=Connect();
        $conn->exec($sql);
        echo "User Successfully Updated!";
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage(); 
    }

}

?>