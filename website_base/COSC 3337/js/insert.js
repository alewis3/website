
function makeCustomerRequest() {
    event.preventDefault();
    document.getElementById("custName").innerHTML = "";
    var customerName = document.getElementById('customerName').value;
    if (customerName.length === 0) {
        document.getElementById('custName').innerHTML = "Error: No name entered.";
    }
    else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("custName").innerHTML = xhttp.responseText;
            }
        }
        xhttp.open("GET", "./php/customerInsert.php?customerName="+ customerName, true);
        xhttp.send();
    }

}


function makeOrderRequest() {
    event.preventDefault();
    document.getElementById("orderRingup").innerHTML = "";
    document.getElementById("orderError").innerHTML = "";
    var customerName = document.getElementById("customerNameOrder").value;
    var items = document.getElementById("menuItems");
    var selected = getSelectValues(items);
    var customerNameFormatted = formatName(customerName);
    
    if (selected.length === 0) {
        document.getElementById('orderError').innerHTML = "Error: No items selected. Please select at least one item.";
    }
    else if(customerName.length === 0) {
        document.getElementById('orderError').innerHTML = "Error: Please enter your customer name.";
    }
    else {
        var selectedStr = "selectedItem=";
        for (var i = 0; i < selected.length; i++) {
            selectedStr += selected[i];
            if (i != selected.length - 1) {
                selectedStr += ",";
            }
        }
        var url = "./php/orderInsert.php?customerName="+ customerNameFormatted +"&"+ selectedStr;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                document.getElementById("orderRingup").innerHTML = xhttp.responseText;
            }
        }
        xhttp.open("GET", url , true);
        xhttp.send();
    }

}

function makeReservationRequest() {
    event.preventDefault();
    document.getElementById("reservationConfirm").innerHTML = "";
    document.getElementById("reservationError").innerHTML = "";
    var customerName = document.getElementById('customerNameReservation').value;
    var customerNameFormatted = formatName(customerName);
    
    var partySize = document.getElementById('partySize').value;
    var partySizeInt = Number(partySize);
    
    var partyName = document.getElementById('partyName').value;
    var partyNameFormatted = formatName(partyName);
    
    var monthSelect = document.getElementById('month');
    var daySelect = document.getElementById('day');
    var yearSelect = document.getElementById('year');
    var timeSelect = document.getElementById('time');
    if (monthSelect.selectedIndex == -1 || daySelect.selectedIndex == -1 || yearSelect.selectedIndex == -1 || timeSelect.selectedIndex == -1 ) {
        document.getElementById('reservationError').innerHTML = "Please select a date and time!";
    } 
    else if (customerName.length === 0) {
        document.getElementById('reservationError').innerHTML = "Error: No name entered.";
    }
    else if (partyName.length === 0) {
        document.getElementById('reservationError').innerHTML = "Error: No party name entered.";
    }
    else if (partySize.length === 0) {
        document.getElementByID('reservationError').innerHTML = "Error: No party size entered!";
    }
    else if (isNaN(partySizeInt)) {
        document.getElementById('reservationError').innerHTML = "Error: " + partySize + " is not a number!";
    }
    else if (partySizeInt < 1) {
        document.getElementById('reservationError').innerHTML = "Error: Party size cannot be less than 1!";
    }
    else if (partySizeInt > 12 ) {
        document.getElementById('reservationError').innerHTML = "Error: We cannot serve parties greater than 12.";
    }
    else {
        var month = monthSelect.options[monthSelect.selectedIndex].value;
        var day = daySelect.options[daySelect.selectedIndex].value;
        var year = yearSelect.options[yearSelect.selectedIndex].value;
        var time = timeSelect.options[timeSelect.selectedIndex].value;
        if(validateDate(month, day, year) && isDateAfterToday(month, day, year)) {
            var dateTime = year + "-" + month + "-" + day + "%20" + time;
            var url = "./php/reservationInsert.php?customerName="+ customerNameFormatted + "&partySize=" + partySizeInt + "&partyName=" + partyNameFormatted + "&dateTime=" + dateTime;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    document.getElementById("reservationConfirm").innerHTML = xhttp.responseText;
                }
            }
            xhttp.open("GET", url, true);
            xhttp.send();
        }
        else {
            document.getElementById('reservationError').innerHTML = "Error: " + month + "/" + day + "/" + year + " is not a valid day! Please pick a valid day and make sure it is a day in the future!";
        }
        
    }

}

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value);
    }
  }
  return result;
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

function validateDate(month, day, year) {
    var retBool = true;
    // february case
    if (month == "02") {
        // not a leap year
        if (year != "2020") {
            if (day == "29" || day == "30" || day == "31") {
                retBool = false;
            }
        }
        // leap year
        else {
            if (day == "30" || day == "31") {
                retBool = false;
            }
        }
    }
    else if (month == "04" || month == "06" || month == "09" || month == "11") {
        if (day == "31") {
            retBool = false;
        }
    }
    return retBool;
}
function isDateAfterToday(month, day, year) {
    var monthInt = parseInt(month, 10) - 1;
    var dayInt = parseInt(day, 10);
    var yearInt = parseInt(year, 10);
    var currentDate = new Date();
    var retBool = true;
    if (yearInt < currentDate.getFullYear()) {
        retBool = false;
    }
    else if (yearInt == currentDate.getFullYear() && monthInt < currentDate.getMonth()) {
        retBool = false;
    }
    else if (yearInt == currentDate.getFullYear() && monthInt == currentDate.getMonth() && dayInt <= currentDate.getDate()) {
        retBool = false;
    }
    return retBool;
}