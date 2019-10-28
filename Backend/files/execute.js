
window.onload = function() {

  var form = document.getElementById("contactForm"); 
  function handleForm(event) { event.preventDefault(); }
  form.addEventListener('submit', handleForm);

  // var table = document.getElementById("table");
  // table.innerHTML = "<tr><th>Course Number</th><th>Course Name</th><th>Semester Taken</th><th>Grade</th></tr>";

  // const Http = new XMLHttpRequest();
  // const url='http://localhost:4001/courses';
  // Http.open("GET", url, true);
  // Http.send();

  // Http.onreadystatechange = function() {
  //   if(this.readyState==4 && this.status==200) {
  //     const jsonBody = Http.responseText;
  //     var jsonObj = JSON.parse(jsonBody);
  //     for (var i = 0; i < jsonObj.length; i++) {
  //       var course = jsonObj[i];
  //        const courseNum = course.courseNumber;
  //       const courseName = course.courseName;
  //       const semester = course.semesterTaken;
  //       const grade = course.grade;
  //       table.innerHTML += "<tr><td>" + courseNum + "</td><td>" + courseName + "</td><td>" + semester + "</td><td>" + grade + "</td></tr>";
  //     }ç
  //   }
  // }
}



//Get the button:

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("topBtn");
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
    toFill.innerHTML = "<h3>Links: </h3>"
    switch (tagType) {
        case "component":
            toFill.innerHTML += "<h4>CH I</h4><li><a href='./COSC%202329/DebuggingProblem_Lewis.java' target='_blank'>DebuggingProblem_Lewis.java</a></li><h4>CH II</h4><li><a href='./COSC%202329/IntegerUtils_Lewis.java' target='_blank'>IntegerUtils_Lewis.java</a></li><h4>CH III</h4><li><a href='./COSC%202329/DominoHighLowImpl_III.java' target='_blank'> DominoHighLowImpl_III.java</a></li><li><a href='./COSC%202329/DominoHighLowSetImpl_III.java' target='_blank'> DominoHighLowSetImpl_III.java</a></li><li><a href='./COSC%202329/DominoLowDifferenceStringImpl_III.java' target='_blank'> DominoLowDifferenceStringImpl_III.java</a></li><h4>CH IV</h4><li><a href='./COSC%202329/DominoHighLowImpl_IV.java' target='_blank'> DominoHighLowImpl_IV.java</a></li><li><a href='./COSC%202329/DominoHighLowSetImpl_IV.java' target='_blank'> DominoHighLowSetImpl_IV.java</a></li><li><a href='./COSC%202329/DominoLowDifferenceStringImpl_IV.java' target='_blank'> DominoHighLowImpl_IV.java</a></li><h4>CH IV</h4><li><a href='./COSC%202329/ChangeMakerImpl_Lewis.java' target='_blank'>ChangeMakerImpl_Lewis.java</a></li><h4>CH VI</h4><li><a href='./COSC%202329/BingoCardColumnListBasedImpl_VI.java' target='_blank'>BingoCardColumnListBasedImpl_VI.java</a></li><li><a href='./COSC%202329/BingoCardDiagonalListBasedImpl_VI.java' target='_blank'>BingoCardDiagonalListBasedImpl_VI.java</a></li><li><a href='./COSC%202329/BingoCardRowListBasedImpl_VI.java' target='_blank'>BingoCardRowListBasedImpl_VI.java</a></li><li><a href='./COSC%202329/BingoCardRowSetBasedImpl_VI.java' target='_blank'>BingoCardRowSetBasedImpl_VI.java</a></li><li><a href='./COSC%202329/BingoCardUtils_VI.java' target='_blank'>BingoCardUtils_VI.java</a></li><li><a href='./COSC%202329/TorusBingoCardImpl_VI.java' target='_blank'>TorusBingoCardImpl_VI.java</a></li>";
            break;
        case "arch": 
            toFill.innerHTML += "<li><a href='./COSC%202331/asg1.pdf' target='_blank'> ASG #1</a></li><li><a href='./COSC%202331/asg2.pdf' target='_blank'> ASG #2</a></li><li><a href='./COSC%202331/asg4.asm' target='_blank'> ASG #4</a></li><li><a href='./COSC%202331/asg5.asm' target='_blank'> ASG #5</a></li><li><a href='./COSC%202331/asg6.asm' target='_blank'> ASG #6</a></li><li><a href='./COSC%202331/asg7.asm' target='_blank'> ASG #7</a></li><li><a href='./COSC%202331/asg8.pdf' target='_blank'> ASG #8</a></li><li><a href='./COSC%202331/asg9.pdf' target='_blank'> ASG #9</a></li><li><a href='./COSC%202331/asg10.pdf' target='_blank'> ASG #10</a></li>";
            break;
        case "security":
            toFill.innerHTML += "<li><a href='./COSC%203325/asg1.txt' target='_blank'>Assignment 1</a></li><li><a href='./COSC%203325/asg2.txt' target='_blank'>Assignment 2</a></li><li><a href='./COSC%203325/asg3.pdf' target='_blank'>Assignment 3</a></li><li><a href='./COSC%203325/ChipCardSecurityPresentation.pdf' target='_blank'>Chip Card Security Presentation</a></li><li><a href='./COSC%203325/BitcoinPresentation.pdf' target='_blank'>Bitcoin Presentation</a></li><li><a href='./COSC%203325/BitcoinPresentationMOV.mp4' target='_blank'>Bitcoin Presentation Video</a></li><li><a href='./COSC%203325/RSAPresentation.pdf' target='_blank'>RSA Presentation</a></li><li><a href='./COSC%203325/RSAPresentationMOV.mp4' target='_blank'>RSA Presentation Video</a></li>";
            break;
        case "algorithms":
            toFill.innerHTML += "<li><a href='./COSC%203327/hw1.pdf' target='_blank'>HW #1</a></li><h4>HW 2</h4><li><a href='./COSC%203327/StackImplementation.java' target='_blank'>Stack Implementation (ArrayList)</a></li><li><a href='./COSC%203327/SyntaxChecker.java' target='_blank'>Syntax Checker</a></li><li><a href='./COSC%203327/Node.java' target='_blank'>Node.java</a></li><li><a href='./COSC%203327/QueueImplementation.java' target='_blank'>Queue Implementation (Linked List)</a></li><li><a href='./COSC%203327/StackWithTwoQueues.java' target='_blank'>Stack with Two Queues Implementation</a></li>";
            break;
        case "languages": 
            toFill.innerHTML += "<li><a href='./COSC%203336/hw1.pdf' target='_blank'>HW #1</a></li><li><a href='./COSC%203336/hw2.pdf' target='_blank'>HW #2</a></li>";
            break;
        case "swei":
            toFill.innerHTML += "<h4>Mapping pages</h4><li><a href='./COSC%203339/mapBox.html' target='_blank'>MapBox (Points on a Route)</a></li><li><a href='./COSC%203339/mapBoxDirections.html' target='_blank'>MapBox (Directions from a Point)</a></li><li><a href='./COSC%203339/mapBoxAddress.html' target='_blank'>MapBox (Directions to and from anywhere)</a></li><h4>Vehicle Simulator</h4><li><a href='./COSC%203339/fleet.py' target='_blank'>fleet.py</a></li><li><a href='./COSC%203339/vehicle.py' target='_blank'>vehicle.py</a></li><li><a href='./COSC%203339/fleetManager.py' target='_blank'>fleetManager.py</a></li><li><a href='./COSC%203339/vehicleInstantiator.py' target='_blank'>vehicleInstantiator.py</a></li><li><a href='./COSC%203339/run.py' target='_blank'>run.py (test program)</a></li>";
            break;
        case "networks":
            toFill.innerHTML += "<li><a href='./COSC%203344/TermPaper.pdf' target='_blank'>Term Paper</a></li>";
            break;
        case "sweii": 
            toFill.innerHTML += "<li><a href='https://dev.team23.softwareengineeringii.com/home' target='_blank'>Team 23 home</a></li><li><a href='./COSC%204345/SeqDiagramV1.1.png' target='_blank'>Sequence Diagram V1.1</a></li><li><a href='./COSC%204345/SystemDiagramV1.1.png' target='_blank'>System Diagram V1.1</a></li><li><a href='./COSC%204345/GatewayDiagram.png' target='_blank'>Gateway Diagram</a></li>";
            break;
        case "os": 
            toFill.innerHTML += "<li><a href=''></a></li>";
            break;
        case "research": 
            toFill.innerHTML += "<li><a href='https://hpcompost.com' target='_blank'>Research Website</a></li>";
            break;
        case "physics":
            toFill.innerHTML += "<li><a href=''></a></li>";
        default: 
            toFill.innerHTML += "<p>Could not fill.</p>"
    }

}

function transport(tagObject) {
  var tagType = tagObject.value;
  var elmnt = document.getElementById(tagType);
  elmnt.scrollIntoView({behavior: "smooth"});
}

function sendData() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  console.log(fname + " " + lname + " at email address " + email + " with subject " + subject + " is sending message " + message)

  const Http = new XMLHttpRequest();
  const url='http://localhost:4001/sendEmail';
  Http.open("POST", url, true);
  Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  Http.setRequestHeader("Accept", "application/json;charset=UTF-8");
  Http.send(JSON.stringify({"fname": fname, "lname": lname, "email": email, "subject": subject, "message": message}));

  Http.onreadystatechange = function() {
    if(this.readyState==4 && this.status==200) {
      console.log(Http.responseText);
    }
  }
}