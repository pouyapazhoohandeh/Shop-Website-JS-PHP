<?PHP
require_once "../DataBase/database.php";
// $ProductID = $_POST['ProductID'];
$conn=Connect();
if(strlen($_POST['Users']) == 0){
    $sth = $conn->prepare("SELECT * FROM users");
    
}else{
    $sth = $conn->prepare("SELECT * FROM usesrs WHERE FullName LIKE :search");
    $sth->bindValue(':search', '%' . $_POST['Users'] . '%',);
}

$sth->execute();
/* PDOStatement::FETCH_ASSOC */
$row = $sth->fetchAll(PDO::FETCH_ASSOC);
$result=$row;
foreach($result as $data){
    
}