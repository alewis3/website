<?php

require 'dbConnect.php';
$conn = dbConnect();
showOrders($conn);
$conn->close();

function showOrders($conn) {
    $sql = "SELECT orders.order_id, customer_name,total_amount from orders, customer, customer_orders, payment where customer.customer_id=customer_orders.customer_id and orders.order_id=customer_orders.order_id and payment.receipt_number=orders.order_receipt_number;";
    $result=$conn->query($sql);
    
    if ($result->num_rows > 0) {
        echo "<tr><th>Order ID</th><th>Customer Name</th><th>Items Ordered</th><th>Total Amount</th></tr>";
        while ($row = $result->fetch_assoc()) {
            $order_id = $row['order_id'];
            $sql = "select menu_item_name from menu_item, menu_contains where menu_item.menu_item_id=menu_contains.menu_item_id and order_id=" . $order_id . ";";
            $menuItemResult = $conn->query($sql);
            $menuItems = "";
            while ($menuItemRow = $menuItemResult->fetch_assoc()) {
                $menuItems = $menuItems . " - " . $menuItemRow['menu_item_name'];
            }
            $customer_name = $row['customer_name'];
            $total = $row['total_amount'];
            echo "<tr><td>" . $order_id . "</td><td>" . $customer_name . "</td><td>" . $menuItems . "</td><td>" . $total . "</td></tr>";
        }
    }
    else {
        echo "0 Results!";
    }
}

?>