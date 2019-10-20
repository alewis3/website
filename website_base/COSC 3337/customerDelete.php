<?php

require 'dbConnect.php';
$conn = dbConnect();
$customerName = $_GET['customerName'];

if(checkNameInDB($conn, $customerName)) {
    deleteName($conn, $customerName);
    echo "Record for " . $customerName . " was deleted!";
}
else {
    echo $customerOldName . " not in database!";
}
$conn->close();

function deleteName($conn, $customerName) {
    $sql = "delete from customer where customer_name='" . $customerName . "';";
    $result = $conn->query($sql);
}


// returns true for a unique name
// returns false for duplicate
function checkNameInDB($conn, $customerName) {

    $sql = "select customer_name from customer where customer_name='" . $customerName ."';";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {// if any rows were returned, return true
    	return true;
    }
    else {
        return false;
    }
    
    
}
?>