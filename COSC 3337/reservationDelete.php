<?php

require 'dbConnect.php';
$conn = dbConnect();
$customerName = $_GET['customerName'];
$partyName = $_GET["partyName"];

if($customerName != "" && $partyName != "") {
    deleteReservation($conn, $partyName, $customerName);
}
else { 
    echo "Could not delete reservation. Please fill out blank value!";
}

$conn->close();

function deleteReservation($conn, $partyName, $customerName) {
    
    $customer_id = checkNameExists($conn, $customerName);
    if ($customer_id == -1) {
        echo "No customer found with name: " . $customerName;
    }
    else {
        $sql = "delete from reservation where party_name='" . $partyName . "' and customer_id=" . $customer_id .";";
        $result = $conn->query($sql);
        echo "Reservation successfully deleted for party: " . $partyName;
    }
}


// returns customer id for a name in the db
// returns -1 for name not found
function checkNameExists($conn, $customerName) {

    $retVal = -1;
    
    $sql = "select customer_id from customer where customer_name='" . $customerName ."';";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {// if any rows were returned, return the customer id
        $row = $result->fetch_assoc();
    	$retVal = $row['customer_id'];
    }
    
    return $retVal;
    
}

?>