<?php
 try{
    require_once "../../DataBase/database.php";
    $ProductID = $_POST['ProductID'];
    $sql="DELETE FROM product WHERE id='$ProductID'";
    $conn=Connect();
    $sth = $conn->prepare($sql);
    $conn->exec($sql);
}
catch(PDOException $e){
    echo "Error!". $e->getMessage(); 
}
?>