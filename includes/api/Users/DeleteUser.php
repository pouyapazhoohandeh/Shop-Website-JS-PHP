<?php
 try{
    require_once "../DataBase/database.php";
    $UserID = $_POST['id'];
    $sql="DELETE FROM users WHERE id='$UserID'";
    $conn=Connect();
    $conn->exec($sql);
}
catch(PDOException $e){
    echo "Error!". $e->getMessage(); 
}
?>