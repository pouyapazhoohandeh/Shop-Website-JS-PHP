<?PHP
if(!empty($_POST)){
    try
    {
        require_once "../DataBase/database.php";
        $ProductID = $_POST['ProductID'];
        $conn=Connect();
        $sth = $conn->prepare("SELECT * FROM product where id=$ProductID");
        $sth->execute();
        /* PDOStatement::FETCH_ASSOC */
        $row = $sth->fetch(PDO::FETCH_ASSOC);
        echo json_encode($row);
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage(); 
    }
}
    