<?php 

$serverName = "localhost";
$dbUsername = "alewiscr_iosUser";
$dbPassword = "iosUser2";
$dbName = "alewiscr_iosDB";

//$username = $_POST['a'];
//$password = $_POST['b'];

$username = "amanda";
$password = "lewis";

$conn = new mysqli($serverName, $dbUsername, $dbPassword, $dbName);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "select username, password from accounts where username='$username' and password='$password';";
$result=$conn->query($sql);


if($result->num_rows == 1) {
    echo "Successful connection";
} else {
    echo "Unsuccessful connection";
}

$conn->close();

?>