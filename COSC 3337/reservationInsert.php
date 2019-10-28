<?php

require 'dbConnect.php';
$conn = dbConnect();
$customerName = $_GET['customerName'];
$partySize = $_GET["partySize"];
$partyName = $_GET["partyName"];
$dateTime = $_GET["dateTime"];

if($customerName != "" && $partySize != "" && $partyName != "" && $dateTime != "") {
    insert($conn, $dateTime, $partySize, $partyName, $customerName);
}
else { 
    echo "Could not enter reservation. Please fill out blank value!";
}

$conn->close();

function insert($conn, $dateTime, $partySize, $partyName, $customerName) {
    
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
            $sql = "insert into reservation values (null,'" . $dateTime . "'," . $partySize . ",'" . $partyName. "',". $customer_id . "," . $table_number . ");";
            $result = $conn->query($sql);
            echo "Reservation successfully created for party " . $partyName . " and size " . $partySize . " at time " . $dateTime ."!";
        }
        else { 
            echo "No table could be found that meets your requirements.";
        }
    }
}


// returns true for a unique name
// returns false for duplicate
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