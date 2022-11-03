<?PHP
if (!empty($_POST))
{
    try{
        require_once "../DataBase/database.php";
        echo "salam";
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $username=$_POST['username'];
        $password=$_POST['password'];
        $sql="INSERT INTO users (FullName,Email,Username,Password) VALUES('$fullname','$email','$username','$password')";
        $conn=Connect();
        $conn->exec($sql);
        echo "user Successfully added!";
    }
    catch(PDOException $e){
        echo "Error!". $e->getMessage(); 
    }

}
echo json_encode("Register User Show!");
