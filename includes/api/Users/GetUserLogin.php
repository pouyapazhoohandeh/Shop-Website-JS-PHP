<?PHP
require_once "../../database/database.php";
session_start();
try
{
    $name=$_SESSION['name'];
    echo $name;
}
catch(PDOException $e){
    echo "Error!". $e->getMessage();
}

