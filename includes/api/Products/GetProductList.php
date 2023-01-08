<?PHP
require_once "../../DataBase/database.php";
$conn=Connect();
$limit = 3;
if (isset($_POST["page"])) { $page  = $_POST["page"]; } else { $page=1; };
$start_from = ($page-1) * $limit;

$sth = $conn->prepare("SELECT * FROM product limit $start_from,$limit");
$sth->execute();
$row = $sth->fetchAll(PDO::FETCH_ASSOC);
$result=$row;
echo json_encode($result);
