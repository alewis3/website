<?php

// In this session example we first check if the user is logged in.  If so,
// we give the user the option of selecting a song to purchase.  If the user
// is not logged in, we display a message telling the user to log in and
// give the user a link to the login page.
  session_start();
  include('../adodb519/adodb5/adodb.inc.php');

  printSimpleTop("Amanda Lewis - Asg #4", "./css/asg.css");

  print "<h2>Amanda Lewis - Asg #4</h2> \n";

    $db = ADONewConnection('mysqli'); // Create a connection handle to the local database 

    // Open a connection -- pass in the localhost, username, 
    //password and database name 
    $db->PConnect('localhost', // Local instance of MySQL 
            'alewiscr_cosc332', // Username 
            '0cosc3325!', // Password 
            'alewiscr_cosc3325'); // Database name 


  // Is the loggedIn session variable set?
  if ($_SESSION['loggedIn'] == 1) {
    $userId = $_SESSION['userId'];
    $username = null;
    $clearance = null;
    
    $rs = $db->Execute('select userId, username, clearance from users');  

        // Make sure we have results 
        if ($rs == false) { 
        print "SQL select failed \n"; 
        } 

        else { 
            while(!$rs->EOF)
            {
                $id = $rs->fields['userId'];
                if($id == $userId)
                {
                    $username = $rs->fields['username'];
                    $clearance = $rs->fields['clearance'];
                    break;
                }
                $rs->MoveNext();
            }
        }
        
    print "<br>Hello " . $username . ". You have " . $clearance . " clearance. \n";
    print "<br>You are authorized to see the following images: <br> \n";
    if($clearance == "T")
    {
        print "<img src='./TopSecret.png' alt='topSecret' height='200' width='250'/>\n ";
    }
    if($clearance == "T" or $clearance == "S")
    {
        print "<img src='./Secret.png' alt='Secret' height='200' width='250'/>\n ";
    }
    if($clearance == "T" or $clearance == "S" or $clearance == "C")
    {
        print "<img src='./Confidential.png' alt='confidential' height='200' width='250'/>\n ";
    }
    if($clearance == "T" or $clearance == "S" or $clearance == "C" or $clearance == "U")
    {
        print "<img src='./Unclassified.png' alt='unclassified' height='200' width='250'/>\n ";
    }
    
    print "   <form action='asg4.php' method='post'>\n" .
        " <input type='submit' name='btnLogout' value='Log Out' ></td>\n".
        "</form> \n ";
  }
  // If we are not logged in, tell the user and provide a link back to the login page
  //
  else {
      print "<br>It appears you are not logged in.\n";
      print "<br>Log in again <a href='./asg4.php'>here</a> \n";
  }
  
  

  printBottom();
  
  
function printSimpleTop($title, $cssPath) {
    
print
    "<!DOCTYPE html> \n".
    "<html lang='en'>\n".
    "<head>\n".
    "    <meta charset='utf-8'> \n".
    "    <meta name='viewport' content='width=device-width, initial-scale=1.0'> \n".
    "    <meta name='author' content='Amanda Lewis'> \n" .
    "    <link rel='stylesheet' type='text/css' href=" . "\"$cssPath\"" . "> \n".
    "    <title>" . $title . "</title> \n ".
    "</head> \n".
    "<body> \n" ;
}    

function printBottom() {

    print
    
        "\n</body> \n".
        "</html> \n";
}

 ?>