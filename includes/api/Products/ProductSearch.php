<?PHP
require_once "../DataBase/database.php";
// $ProductID = $_POST['ProductID'];
function isJson($str){
    $json=json_decode($str);
    return $json && $str!= $json;
}
$conn=Connect();
if(isset($_POST['Products']))
{
    echo $_POST['Products'];
    echo strlen($_POST['Products']);
    if(strlen($_POST['Products']) == 0){
        $sth = $conn->prepare("SELECT * FROM product");   
    }else{
        $sth = $conn->prepare("SELECT * FROM product WHERE Name LIKE :search");
        $sth->bindValue(':search', '%' . $_POST['Products'] . '%',);
    }
    $sth->execute();
    /* PDOStatement::FETCH_ASSOC */
    $row = $sth->fetchAll(PDO::FETCH_ASSOC);
    $result=$row;
    echo json_encode($result);    
}else{
    $sth = $conn->prepare("SELECT * FROM product");
    $sth->execute();
    $row = $sth->fetchAll(PDO::FETCH_ASSOC);
    $result=$row;
    echo json_encode($result);
}