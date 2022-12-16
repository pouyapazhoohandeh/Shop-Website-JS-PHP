
<?PHP
if (!empty($_POST))
{
    try{
        require_once "../DataBase/database.php";
        $UserFName = $_POST['UserFName'];
        $UserTel = $_POST['UserTel'];
        $UserMail=$_POST['UserMail'];
        $Username=$_POST['Username'];
        $UserPass=$_POST['UserPass'];
        $Useraddress=$_POST['Useraddress'];
        if(!empty($UserFName)&& !empty($UserTel) && !empty($UserMail)&& !empty($Username) && !empty($UserPass) && !empty($Useraddress)){
            $sql="INSERT INTO users (FullName,Phone,Email,Username,Password,Address,type) VALUES('$UserFName','$UserTel','$UserMail','$Username','$UserPass','$Useraddress')";
            $conn=Connect();
            $conn->exec($sql);
            echo "User Successfully added!";
        }
        else {
            echo "Fill All Fields";
        }
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage(); 
    }
   

}
