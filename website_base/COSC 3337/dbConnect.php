<?php
// Create connection
function dbConnect()
{
  $servername = "localhost";
  $username = "alewiscr_user";
  $password = "userUniversity";
  $dbname = "alewiscr_Restaurant";

  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 
  return $conn;
} //end of function 
?>