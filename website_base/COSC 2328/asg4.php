<?php

    session_start();
    include('../adodb519/adodb5/adodb.inc.php');

    printSimpleTop("Amanda Lewis - Asg #4", "./css/asg.css");

    print("<h2>Amanda Lewis - Asg #4</h2>");
    
    include_once $_SERVER['DOCUMENT_ROOT'] . '/securimage/securimage/securimage.php';
 
    $securimage = new Securimage();

    
    if (isset($_POST['btnLogin'])) {

        

        // Do not save the username and password in the session.
        // Instead, authenticate and if username and password.
        // Set a login value to 1 for logged in, and 0 for not logged in.
        // In other words, 1 for when username and password are correct and
        // 0 for when they are not correct.
        $db = ADONewConnection('mysqli'); // Create a connection handle to the local database 

        // Open a connection -- pass in the localhost, username, 
        //password and database name 
        // 
        $db->PConnect('localhost', // Local instance of MySQL 
            'alewiscr_cosc332', // Username 
            '0cosc3325!', // Password 
            'alewiscr_cosc3325'); // Database name 

        // Format and execute a SQL statement 
        // 
        $rs = $db->Execute('select userId, username, password, clearance from users');  

        // Make sure we have results 
        // 
        if ($rs == false) { 
        print "SQL select failed \n"; 
        } 

        else {     
            if ($securimage->check($_POST['captcha_code']) == false) {
                // the code was incorrect
                // you should handle the error so that the form processor doesn't continue
                // or you can use the following code if there is no validation or you do not know how
                echo "The security code entered was incorrect.<br /><br />";
                echo "Please try again.";
                printLoginForm();
            }
            else{

            
                // While rows are returned, store the values in local     variables     // 
                // Get the userName and Password
                //
                $userName = $_POST['userName'];
                $userPassword = $_POST['userPassword'];
                $userPasswordHash = hash("sha256", $userPassword);
                while (!$rs->EOF) { 
                    $name = $rs->fields['username']; 
                    $password = $rs->fields['password'];    // and authenticate
                    $userId = $rs->fields['userId'];
                    if($name == $userName && $password == $userPasswordHash) {
                        $_SESSION['loggedIn'] = 1;
                        $_SESSION['userId'] = $userId;
                        print "<p> Login successful. Please click <a href='    ./asg4pics.php'> here </a> to continue. \n";
                       break;
                    }  // Handle incorrect username and password case
                    else {
                        $rs->MoveNext(); 
                     }
                } 
                if($_SESSION['loggedIn'] == 0) {
                        print "<p> Login unsuccessful. Please try again. </p> \n ";
                        printLoginForm();
                }
            }
                    
        }
    }
    
    else if(isset($_POST['btnLogout']))
    {
        $_SESSION['loggedIn'] = 0;
        print "You have been successfully logged out. \n";
        printLoginForm();
    }

    // If we don't have the username and password posted, print the login form
    //
    else {

        printLoginForm();
    }
    
    printBottom();


function printLoginForm() {

print
    "<div>" .
    "   <form action='asg4.php' method='post'>\n" .
    "       <div class='mySpacing'>Name:</div> <input type='text' name = 'userName' maxlength='20'></td>\n" .
    "       <br /><div class='mySpacing'>Password:</div> <input type='password' name = 'userPassword' maxlength='20'></td> \n" .
    "   <br><img id='captcha' src='../securimage/securimage/securimage_show.php' alt='CAPTCHA Image' />\n" .
    "  <br><input type='text' name='captcha_code' size='10' maxlength='6' /><a href='#' onclick='document.getElementById('captcha').src = '../securimage/securimage/securimage_show.php?' + Math.random(); return false'>[ Different Image ]</a>\n" .
    "       <br /><div class='mySpacing'></div><input type='submit' name='btnLogin' value='Log In' ></td><input type='submit' name='btnLogout' value='Log Out' ></td> \n ".
    "   </form> \n" .
    "</div> \n";

}

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