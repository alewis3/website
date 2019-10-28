<?php

require 'dbConnect.php';
$conn = dbConnect();
$customerName = $_GET['customerName'];


if(checkUniqueName($conn, $customerName)) {
    insert($conn, $customerName);
    echo "Welcome " . $customerName . "!";
}
else {
    echo "Duplicate Name!";
}
$conn->close();

function insert($conn, $customerName) {
    $sql = "insert into customer values (null, '". $customerName . "');";
    $result = $conn->query($sql);
}


// returns true for a unique name
// returns false for duplicate
function checkUniqueName($conn, $customerName) {

    $sql = "select customer_name from customer where customer_name='" . $customerName ."';";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {// if any rows were returned, return false
    	return false;
    }
    else {
        return true;
    }
    
    
}
?>