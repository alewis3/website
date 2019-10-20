<?php

$serverName = "localhost";
$dbUsername = "alewiscr_iosUser";
$dbPassword = "iosUser2";
$dbName = "alewiscr_iosDB";

$username = $_POST['a'];
$password = $_POST['b'];
$name = $_POST['c'];


$conn = new mysqli($serverName, $dbUsername, $dbPassword, $dbName);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO accounts VALUES ('$username', '$password', '$name');";

if (!$conn->query($sql)) {
    throw new Exception($conn->error);
    die("Insertion failed: " . $conn->error);
} else {
    echo 'Success';
}

$conn->close();

?>