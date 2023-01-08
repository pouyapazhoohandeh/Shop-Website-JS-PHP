<?php
 try{
    require_once "../../DataBase/database.php";
    $UserID = $_POST['UserID'];
    $sql="DELETE FROM users WHERE id='$UserID'";
    $conn=Connect();
     $sth = $conn->prepare($sql);
     $conn->exec($sql);
}
catch(PDOException $e){
    echo "Error!". $e->getMessage(); 
}
?>