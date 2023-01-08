<?PHP
require_once "../../database/database.php";
if (!empty($_POST))
{
    try
    {
        $user=$_POST['UserName'];
        $pass=$_POST['UserPass'];
        $conn=Connect();
        $sth = $conn->prepare("SELECT * FROM users Where Username='$user' and Password='$pass'");
        $sth->execute();
        $row = $sth->fetch(PDO::FETCH_ASSOC);
        if($row!="")
        {
            $name=$row["FullName"];
            session_start();
            $_SESSION['name']=$name;
            echo 1;
        }
        else
        {
            echo 0;
        }

    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage();
    }


}
