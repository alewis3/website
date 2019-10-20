<?php 

$serverName = "localhost";
$dbUsername = "alewiscr_iosUser";
$dbPassword = "iosUser2";
$dbName = "alewiscr_iosDB";

$username = $_POST['a'];


$conn = new mysqli($serverName, $dbUsername, $dbPassword, $dbName);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "select username, password from accounts where username='$username';";
$result=$conn->query($sql);
$records = array();


if($result->num_rows > 0) {
   while($row = $result->fetch_assoc())
   {
      $records[] = $row;
   }
} 

echo json_encode($records);

$conn->close();

?>