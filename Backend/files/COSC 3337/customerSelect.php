<?php

require 'dbConnect.php';
$conn = dbConnect();
showCustomers($conn);
$conn->close();

function showCustomers($conn) {
    $sql = "SELECT * FROM customer";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
    		echo "<tr><th>Customer ID</th><th>CustomerName</th></tr>";
    		while($row = $result->fetch_assoc()) {
                echo "<tr><td>" . $row['customer_id'] ."</td><td>" . $row['customer_name'] . "</td></tr>";
  		  }
	} else {
    		echo "0 results";
		}
}

?>