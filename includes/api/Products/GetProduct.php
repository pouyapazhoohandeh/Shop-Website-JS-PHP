<?PHP
require_once "../../database/database.php";
if (!empty($_POST))
{
    try
    {
        $id=$_POST['ProductID'];
        $conn=Connect();
        $sth = $conn->prepare("SELECT * FROM product Where id=$id");
        $sth->execute();
        $row = $sth->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($row);
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage();
    }


}
