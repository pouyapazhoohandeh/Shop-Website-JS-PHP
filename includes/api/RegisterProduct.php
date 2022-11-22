
<?PHP
if (!empty($_POST))
{
    try{
        require_once "../DataBase/database.php";
        $ProductName = $_POST['ProductName'];
        $ProductCategory = $_POST['ProductCategory'];
        $ProductPrice=$_POST['ProductPrice'];
        $ProductQuantity=$_POST['ProductQuantity'];
        $ProductDiscount=$_POST['ProductDiscount'];
        $ProductDesc=$_POST['ProductDesc'];
        if(!empty($ProductName)&& !empty($ProductCategory) && !empty($ProductPrice)&& !empty($ProductQuantity) && !empty($ProductDiscount) && !empty($ProductDesc)){
            $sql="INSERT INTO product (Name,Category,Price,Quantity,Discount,Description) VALUES('$ProductName','$ProductCategory','$ProductPrice','$ProductQuantity','$ProductDiscount','$ProductDesc')";
            $conn=Connect();
            $conn->exec($sql);
            echo "Product Successfully added!";
        }
        else {
            echo "Fill All Fields";
        }
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage(); 
    }
   

}
