window.onload = function() {
    selectCustomers();
    selectOrders();
    selectReservations();
};

function selectCustomers() {
    
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("customerTable").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", "./php/customerSelect.php", true);
    xhttp.send();
    
}

function selectOrders() {
    
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("orderTable").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", "./php/orderSelect.php", true);
    xhttp.send();
    
}

function selectReservations() {
    
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("reservationTable").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", "./php/reservationSelect.php", true);
    xhttp.send();
    
}