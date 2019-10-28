function customerUpdate() {
    event.preventDefault();
    document.getElementById("customerUpdateConfirm").innerHTML = "";
    var customerOldName = document.getElementById('customerOldName').value;
    var customerNewName = document.getElementById('customerNewName').value;
    if (customerOldName.length === 0) {
        document.getElementById('customerUpdateConfirm').innerHTML = "Error: No previous name entered.";
    }
    else if (customerNewName.length === 0) {
        document.getElementById('customerUpdateConfirm').innerHTML = "Error: No new name entered"
    }
    else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("customerUpdateConfirm").innerHTML = xhttp.responseText;
            }
        }
        xhttp.open("GET", "./php/customerUpdate.php?customerOldName="+ customerOldName + "&customerNewName=" + customerNewName, true);
        xhttp.send();
    }
}

function reservationUpdate() {
    event.preventDefault();
    document.getElementById("reservationUpdateConfirm").innerHTML = "";
    var customerName = document.getElementById('custNameUpdateRes').value;
    var partyName = document.getElementById('partyNameUpdateRes').value;
    var newPartySize = document.getElementById('partySizeUpdateRes').value;
    var partySizeNumber = Number(newPartySize);
    if (customerName.length === 0) {
        document.getElementById('reservationUpdateConfirm').innerHTML = "Error: No customer name entered!";
    }
    else if (partyName.length === 0) {
        document.getElementById('reservationUpdateConfirm').innerHTML = "Error: No party name entered!";
    }
    else if (isNaN(partySizeNumber)) {
        document.getElementById('reservationUpdateConfirm').innerHTML = "Error: " + newPartySize + " is not a number!";
    }
    else if (partySizeNumber < 1) {
        document.getElementById('reservationUpdateConfirm').innerHTML = "Error: Party size must be above 0!";
    }
    else if (partySizeNumber > 12) {
        document.getElementById('reservationUpdateConfirm').innerHTML = "Error: We cannot accept parties of greater than 12!";
    }
    else {
        partyNameFormatted = formatName(partyName);
        customerNameFormatted = formatName(customerName);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("reservationUpdateConfirm").innerHTML = xhttp.responseText;
            }
        }
        xhttp.open("GET", "./php/reservationUpdate.php?customerName="+ customerNameFormatted + "&partyName=" + partyNameFormatted + "&newPartySize=" + partySizeNumber, true);
        xhttp.send();
    }
}

function customerDelete() {
    event.preventDefault();
    document.getElementById("customerDeleteConfirm").innerHTML = "";
    var customerName = document.getElementById('customerDeleteName').value;
    if (customerName.length === 0) {
        document.getElementById('customerDeleteConfirm').innerHTML = "Error: No previous name entered.";
    }
    else {
        var customerNameFormatted = formatName(customerName);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("customerDeleteConfirm").innerHTML = xhttp.responseText;
            }
        }
        xhttp.open("GET", "./php/customerDelete.php?customerName="+ customerNameFormatted, true);
        xhttp.send();
    }
}

function reservationDelete() {
    event.preventDefault();
    document.getElementById("reservationDeleteConfirm").innerHTML = "";
    var customerName = document.getElementById('custNameDeleteRes').value;
    var partyName = document.getElementById('partyNameDeleteRes').value;
    if (customerName.length === 0) {
        document.getElementById('reservationDeleteConfirm').innerHTML = "Error: No customer name entered!";
    }
    else if (partyName.length === 0) {
        document.getElementById('reservationDeleteConfirm').innerHTML = "Error: No party name entered!";
    }
    else {
        partyNameFormatted = formatName(partyName);
        customerNameFormatted = formatName(customerName);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("reservationDeleteConfirm").innerHTML = xhttp.responseText;
            }
        }
        xhttp.open("GET", "./php/reservationDelete.php?customerName="+ customerNameFormatted + "&partyName=" + partyNameFormatted, true);
        xhttp.send();
    }
}

function formatName(name) {
    var retString = "";
    for (var i = 0; i < name.length; i++) {
       var character = name.substring(i, i+1);
       if (character == " ") {
           character = "%20";
       }
       else if (character == "&" || character == ";") {
           character = "";
       }
       retString = retString + character;
    }
    return retString;
}
