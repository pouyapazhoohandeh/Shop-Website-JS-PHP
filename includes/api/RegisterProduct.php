
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
        $sql="INSERT INTO product (Name,Category,Price,Quantity,Discount,Description) VALUES('$ProductName','$ProductCategory','$ProductPrice','$ProductQuantity','$ProductDiscount','$ProductDesc')";
        $conn=Connect();
        $conn->exec($sql);
        echo "Product Successfully added!";
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage(); 
    }

}
echo json_encode("Product Add Page Show!");
