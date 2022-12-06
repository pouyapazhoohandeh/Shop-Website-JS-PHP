<?PHP
require_once "../DataBase/database.php";
// $ProductID = $_POST['ProductID'];
$conn=Connect();
$sth = $conn->prepare("SELECT * FROM product");
$sth->execute();
/* PDOStatement::FETCH_ASSOC */
$row = $sth->fetchAll(PDO::FETCH_ASSOC);
$result=$row;
