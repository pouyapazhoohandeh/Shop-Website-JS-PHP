<?PHP
require_once "../DataBase/database.php";
$conn=Connect();
$sth = $conn->prepare("SELECT * FROM users");
$sth->execute();
$row = $sth->fetchAll(PDO::FETCH_ASSOC);
$result=$row;
echo json_encode($result);
