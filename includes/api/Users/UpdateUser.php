<?PHP
require_once "../../database/database.php";
if (!empty($_POST))
{
    try{
        $UserID = $_POST['UserID'];
        $UserFName = $_POST['UserFName'];
        $UserTel = $_POST['UserTel'];
        $UserEmail=$_POST['UserEmail'];
        $UserName=$_POST['UserName'];
        $UserPass=$_POST['UserPass'];
        $UserAddress=$_POST['UserAddress'];
        $UserType=$_POST['UserType'];

        if(!empty($UserFName)&& !empty($UserTel) && !empty($UserName)&& !empty($UserPass) && !empty($UserAddress)){
            $sql="update users set FullName='$UserFName',Phone='$UserTel',Email='$UserTel',Username='$UserName',Password='$UserPass',Address='$UserAddress',type='$UserType' where id=$UserID";
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