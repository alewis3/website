<?php
// this php file will take get parameters for customer name and their selected items, return a table with the item information, and then insert the customer's order into the db
// this file is working
require 'dbConnect.php';
$conn = dbConnect();
// grab get variables
$customerName = $_GET['customerName'];
$selectedItems = explode(',', $_GET['selectedItem']);



// if there were selected items, insert everything
if(count($selectedItems) != 0) {
    insert($conn, $customerName, $selectedItems);
}
// else alert the user that we could not grab 0 selected items.
else {
    echo "<tr><th>Error</th></tr><tr><td>Could not grab 0 selected items.</td><tr>";
}
$conn->close();



function insert($conn, $customerName, $selectedItems) {
    
    // grab the customer id
    $customer_id = grabCustomerID($conn, $customerName);
    if ($customer_id != -1) {
        $orderStr = createOrderStr($selectedItems);
        
        // create and execute query
        $sql = "select menu_item_name, menu_item_description, menu_item_price from menu_item where " . $orderStr;
        $result = $conn->query($sql);
        
        // go thru results
        if ($result->num_rows > 0) {
            echo "<tr><th>Item Name</th><th>Item Description</th><th>Item Price</th></tr>";
            $sum = 0.00;
        		// output data of each row
        		while($row = $result->fetch_assoc()) {
                    echo "<tr><td>" . $row['menu_item_name'] . "</td><td>" .$row['menu_item_description']. "</td><td>" .$row['menu_item_price']. "</td></tr>";
                    $sum = $sum + $row['menu_item_price'];
      		    }
      		    echo "<tr><td>Total:</td><td></td><td>".$sum."</td></tr>";
    	} else {
        	echo "<tr><th>Error:</th></tr><tr><td>0 results</td></tr>";
    	}
    	
    
    	// create the payment row first
    	$sql = "insert into payment values (null, ". $sum . ");";
    	$result = $conn->query($sql);
    	
    	// then grab the receipt number (should be most recent with that total)
    	$sql = "select max(receipt_number) as num from payment where total_amount=". $sum . ";";
    	$receipt_number = -1;
    	$result = $conn->query($sql);
    	if ($result->num_rows > 0) {
    	    $row = $result->fetch_assoc();
    	    $receipt_number = $row['num'];
    	}
    	
    	// do not go on if the receipt number could not be found
    	if ($receipt_number != -1) {
    	    
        	// then the row in orders
        	$sql = "insert into orders values (null, CURRENT_TIMESTAMP, ". $receipt_number . ");";
        	$result = $conn->query($sql);
        	
        	// then grab the order id
        	$order_id = grabOrderID($conn, $receipt_number);
        	// do not go on if order id could not be found.
        	if ($order_id != 1) {
            	// then the customer - order connection.
            	$sql = "insert into customer_orders values (" . $customer_id . "," . $order_id . ");";
            	$result = $conn->query($sql);
            	
            	insertIntoMenuContains($conn, $order_id, $selectedItems);
            	echo "<tr><td></td><td> Order successfully created!</td><td></td></tr>";
        	}
    	}
    }
    else {
        echo "No customer found with the name " . $customerName . "!";
    }
}


// returns true for a unique name
// returns false for duplicate
function checkNameExists($conn, $customerName) {

    $sql = "select customer_id from customer where customer_name='" . $customerName ."';";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {// if any rows were returned, return the customer id
        $row = $result->fetch_assoc();
    	return $row['customer_id'];
    }
    else {
        return -1;
    }
    
    
}

function createOrderStr($selectedItems) {
    
    $orderStr = "";
    
    for ($i = 0; $i < count($selectedItems); $i++)
    {
        $item = $selectedItems[$i];
        // check for ' in the string because it is coming in with single quotes attached
        if (substr($item, 0, 1) == "'") {
            $item = substr($item, 1, 1);
        }
        else if (substr($item, 1, 1) == "'") {
            $item = substr($item, 0, 1);
        }
        // once item has been formatted, format the string
        $orderStr = $orderStr . "menu_item_id=" . $item ;
        if ($i != count($selectedItems) - 1) {
            $orderStr = $orderStr ." or ";
        }
        else {
            $orderStr = $orderStr . ";";
        }
    }
    return $orderStr;
}
function insertIntoMenuContains($conn, $order_id, $selectedItems) {
    
    for ($i = 0; $i < count($selectedItems); $i++)
    {
        $item = $selectedItems[$i];
        // check for ' in the string because it is coming in with single quotes attached
        if (substr($item, 0, 1) == "'") {
            $item = substr($item, 1, 1);
        }
        else if (substr($item, 1, 1) == "'") {
            $item = substr($item, 0, 1);
        }
        $sql = "insert into menu_contains values (" . $order_id . ", " . $item . ");";
        $result = $conn->query($sql);
    }
}

function grabCustomerID($conn, $customerName) {
    $sql = "select customer_id from customer where customer_name='" . $customerName . "';";
	$customer_id = -1;
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
	    $row = $result->fetch_assoc();
	    $customer_id = $row['customer_id'];
	}
	return $customer_id;
}

function grabOrderID($conn, $receipt_number) {
    $sql = "select max(order_id) as oID from orders where order_receipt_number=". $receipt_number . ";";
	$order_id = -1;
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
	    $row = $result->fetch_assoc();
	    $order_id = $row['oID'];
	}
	return $order_id;
}
?>