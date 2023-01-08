<?PHP
require_once "../../database/database.php";
if (!empty($_POST))
{
    try
    {
        $name=$_POST['name'];
        $conn=Connect();
        $sth = $conn->prepare("SELECT * FROM product Where Name like '%$name%'");
        $sth->execute();
        $row = $sth->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($row);
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage();
    }

}
