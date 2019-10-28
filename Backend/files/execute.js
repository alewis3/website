
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

window.onbeforeunload = function() {
  return "Do you want to reload the page";
};

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