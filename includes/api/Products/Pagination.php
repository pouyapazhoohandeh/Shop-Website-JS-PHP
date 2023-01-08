<?PHP
require_once "../../database/database.php";
$conn=Connect();
$limit = 3;
$sth = $conn->prepare("SELECT count(*) as count FROM product");
$sth->execute();
$row = $sth->fetch(PDO::FETCH_ASSOC);
$total_records =$row['count'];
$total_pages = ceil($total_records / $limit);

echo json_encode($total_pages);