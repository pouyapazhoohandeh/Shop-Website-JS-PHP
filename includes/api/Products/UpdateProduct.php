<?PHP
require_once "../../database/database.php";
if (!empty($_POST))
{
    try{
        $ProductID = $_POST['ProductID'];
        $ProductName = $_POST['ProductName'];
        $ProductCategory = $_POST['ProductCategory'];
        $ProductPrice=$_POST['ProductPrice'];
        $ProductQuantity=$_POST['ProductQuantity'];
        $ProductDiscount=$_POST['ProductDiscount'];
        $ProductDesc=$_POST['ProductDesc'];
        if(!empty($ProductName)&& !empty($ProductCategory) && !empty($ProductPrice)&& !empty($ProductQuantity) && !empty($ProductDiscount) && !empty($ProductDesc)){
            $sql="update product set Name='$ProductName',Category='$ProductCategory',Price=$ProductPrice,Quantity=$ProductQuantity,Discount=$ProductDiscount,Description='$ProductDesc' where id=$ProductID";
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