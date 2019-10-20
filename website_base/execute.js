//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

var arrayOfTypes = ["component", "arch", "security", "algorithms", "languages", "mobile", "database", "swei", "networks", "sweii", "os", "research", "physics"];

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showCourse(tagObject) {
    tagType = tagObject.type;
    var toFill = document.getElementById("toFill");
    toFill.innerHTML = "<h2>Course Links: </h2>"
    switch (tagType) {
        case "component":
            toFill.innerHTML += "<li><a href='./COSC%202329/DebuggingProblem_Lewis.java'> CH I</a></li><li><a href='./COSC%202329/IntegerUtils_Lewis.java'> CH II</a></li><li><a href='./COSC%202329/chiii.html'> CH III</a></li><li><a href='./COSC%202329/chiv.html'> CH IV</a></li><li><a href='./COSC%202329/ChangeMakerImpl_Lewis.java'>CH V</a></li><li><a href='./COSC%202329/chvi.html'> CH VI</a></li>";
            break;
        case "arch": 
            toFill.innerHTML += "<li><a href='./COSC%202331/asg1.pdf'> ASG #1</a></li><li><a href='./COSC%202331/asg2.pdf'> ASG #2</a></li><li><a href='./COSC%202331/asg4.asm'> ASG #4</a></li><li><a href='./COSC%202331/asg5.asm'> ASG #5</a></li><li><a href='./COSC%202331/asg6.asm'> ASG #6</a></li><li><a href='./COSC%202331/asg7.asm'> ASG #7</a></li><li><a href='./COSC%202331/asg8.pdf'> ASG #8</a></li><li><a href='./COSC%202331/asg9.pdf'> ASG #9</a></li><li><a href='./COSC%202331/asg10.pdf'> ASG #10</a></li>";
            break;
        case "security":
            toFill.innerHTML += "<li><a href='./COSC%203325/asg1.py'>Assignment 1</a></li><li><a href='./COSC%203325/asg2.py'>Assignment 2</a></li><li><a href='./COSC%203325/asg3.pdf'>Assignment 3</a></li><li><a href='./COSC%203325/asg4.php'>Assignment 4</a></li>";
            break;
        case "algorithms":
            toFill.innerHTML += "<li><a href='./COSC%203327/hw1.docx'>HW #1 (download)</a></li><h4>HW 2</h4><li><a href='./COSC%203327/StackImplementation.java'>Stack Implementation (ArrayList)</a></li><li><a href='./COSC%203327/SyntaxChecker.java'>Syntax Checker</a></li><li><a href='./COSC%203327/Node.java'>Node.java</a></li><li><a href='./COSC%203327/QueueImplementation.java'>Queue Implementation (Linked List)</a></li><li><a href='./COSC%203327/StackWithTwoQueues.java'>Stack with Two Queues Implementation</a></li>";
            break;
        case "languages": 
            toFill.innerHTML += "<li><a href='./COSC%203336/hw1.docx'>HW #1 (download)</a></li><li><a href='./COSC%203336/hw2.pdf'>HW #2</a></li>";
            break;
        case "mobile":
            toFill.innerHTML += "<li><a href=''></a></li>";
            break;
        case "database":
            toFill.innerHTML += "<h4>These pages do not work! They were built in PHP!</h4><li><a href='./COSC%203337/insert.html'>Restaurant Insert</a></li><li><a href='./COSC%203337/update.html'>Restaurant Update</a></li><li><a href='./COSC%203337/select.html'>Restaurant Select</a></li>";
            break;
        case "swei":
            toFill.innerHTML += "<li><a href='./COSC%203339/mapBox.html'>MapBox (Points on a Route)</a></li><li><a href='./COSC%203339/mapBoxDirections.html'>MapBox (Directions from a Point)</a></li><li><a href='./COSC%203339/mapBoxAddress.html'>MapBox (Directions to and from anywhere)</a></li>";
            break;
        case "networks":
            toFill.innerHTML += "<li><a href='./COSC%203344/TermPaper.pdf'>Term Paper</a></li>";
            break;
        case "sweii": 
            toFill.innerHTML += "<li><a href='https://dev.team23.softwareengineeringii.com/home'>Team 23 home</a></li>";
            break;
        case "os": 
            toFill.innerHTML += "<li><a href=''></a></li>";
            break;
        case "research": 
            toFill.innerHTML += "<li><a href='https://hpcompost.com'>Research Website</a></li>";
            break;
        case "physics":
            toFill.innerHTML += "<li><a href=''></a></li>";
        default: 
            toFill.innerHTML += "<p>Could not fill.</p>"
    }

}

function transport(tagObject) {
  tagType = tagObject.type;
  var elmnt = document.getElementById(tagType);
  elmnt.scrollIntoView;
}