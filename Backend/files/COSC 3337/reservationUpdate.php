<?php

require 'dbConnect.php';
$conn = dbConnect();
$customerName = $_GET['customerName'];
$newPartySize = $_GET["newPartySize"];
$partyName = $_GET["partyName"];


if($customerName != "" && $newPartySize != "" && $partyName != "") {
    updateReservation($conn, $newPartySize, $partyName, $customerName);
}
else { 
    echo "Could not update reservation. Please fill out blank value!";
}

$conn->close();

function updateReservation($conn, $partySize, $partyName, $customerName) {
    
    $customer_id = checkNameExists($conn, $customerName);
    if ($customer_id == -1) {
        echo "No customer found with name: " . $customerName;
    }
    else {
        $sql = "select table_number from table_capacity where table_capacity >=". $partySize . " order by table_capacity;";
        $result = $conn->query($sql);
        $table_number = -1;
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            // grab first table number that fits the party.
            $table_number = $row['table_number'];
        }
        if ($table_number != -1) {
            $sql = "update reservation set party_size=" . $partySize . ", table_number=" . $table_number ." where party_name='" . $partyName . "' and customer_id=" . $customer_id .";";
            $result = $conn->query($sql);
            echo "Reservation successfully updated for party: " . $partyName;
        }
        else { 
            echo "No table could be found that meets your requirements.";
        }
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