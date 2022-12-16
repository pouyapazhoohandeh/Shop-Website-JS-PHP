<?php

if (!empty($_POST))
{
    try{
        require_once "../DataBase/database.php";
        $ProductID = $_POST['ProductID'];
        $ProductName = $_POST['ProductName'];
        $ProductCategory = $_POST['ProductCategory'];
        $ProductPrice=$_POST['ProductPrice'];
        $ProductQuantity=$_POST['ProductQuantity'];
        $ProductDiscount=$_POST['ProductDiscount'];
        $ProductDesc=$_POST['ProductDesc'];
        $sql="UPDATE product SET Name='$ProductName',
                                 Category='$ProductCategory',
                                 Price='$ProductPrice',
                                 Quantity='$ProductQuantity',
                                 Discount='$ProductDiscount',
                                 Description='$ProductDesc' WHERE id='$ProductID' " ;
        $conn=Connect();
        $conn->exec($sql);
        echo "Product Successfully Updated!";
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage(); 
    }

}

?>