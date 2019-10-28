<?php

require 'dbConnect.php';
$conn = dbConnect();
showReservations($conn);
$conn->close();

function showReservations($conn) {
    $sql = "SELECT reservation.*, table_capacity FROM reservation, table_capacity where reservation.table_number=table_capacity.table_number order by reservation_date_time;";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
    		echo "<tr><th>Reservation ID</th><th>Reservation Date/Time</th><th>Party Name</th><th>Party Size</th><th>Table Number</th><th>Total Table Capacity</th></tr>";
    		while($row = $result->fetch_assoc()) {
    		    $res_id = $row['reservation_id'];
    		    $res_date_time = $row['reservation_date_time'];
    		    $res_name = $row['party_name'];
    		    $res_size = $row['party_size'];
    		    $table_number = $row['table_number'];
    		    $table_capacity = $row['table_capacity'];
                echo "<tr><td>" . $res_id ."</td><td>" . $res_date_time."</td><td>". $res_name ."</td><td>" .$res_size ."</td><td>" . $table_number ."</td><td>" . $table_capacity . "</td></tr>";
  		  }
	} else {
    		echo "0 results";
		}
}

?>