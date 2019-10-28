<?php

require 'dbConnect.php';
$conn = dbConnect();
$customerOldName = $_GET['customerOldName'];
$customerNewName = $_GET['customerNewName'];


if(checkNameInDB($conn, $customerOldName)) {
    if(!checkNameInDB($conn, $customerNewName)) {
        updateName($conn, $customerOldName, $customerNewName);
        echo $customerOldName . " was updated to " . $customerNewName . "!";
    }
    else {
        echo $customerNewName . " already in the database!";
    }
}
else {
    echo $customerOldName . " not in database!";
}
$conn->close();

function updateName($conn, $customerOldName, $customerNewName) {
    $sql = "update customer set customer_name='" . $customerNewName . "' where customer_name='" . $customerOldName . "';";
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