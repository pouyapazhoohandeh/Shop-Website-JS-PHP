<?PHP
require_once "../../database/database.php";
if (!empty($_POST))
{
    try{
        $UserFName = $_POST['UserFName'];
        $UserTel = $_POST['UserTel'];
        $UserEmail=$_POST['UserEmail'];
        $UserName=$_POST['UserName'];
        $UserPass=$_POST['UserPass'];
        $UserAddress=$_POST['UserAddress'];
        $UserType=$_POST['UserType'];

        if(!empty($UserFName)&& !empty($UserTel) && !empty($UserName)&& !empty($UserPass)){
            $sql="insert into users (FullName,Phone,Email,Username,Password,Address,type) values('$UserFName','$UserTel','$UserEmail','$UserName','$UserPass','$UserAddress','$UserType')";
            $conn=Connect();
            $sth = $conn->prepare($sql);
            $conn->exec($sql);
        }
        else {
            echo "Fill All Fields";
        }
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage();
    }


}