<?php
// 45:26
// !!! Needed to edit this files promission to enable read and write to everyone in order to work
echo 'processing... ';

// 1:01:22
// Connect to database
$connection = mysqli_connect('localhost', 'root', '', 'AJAXCrashCourse');

// check for POST vairable
if(isset($_POST['name'])){

  // mysqli_real_escape_string() to clean up input by the user, for security
  $name = mysqli_real_escape_string($connection, $_POST['name']);

  echo 'POST request: ' . $_POST['name'];
  
  $query = "INSERT INTO users(name) VALUES('$name')";

  
  if(mysqli_query($connection, $query)){
    echo "User added to database: AJAXCrashCourse";
  } else {
    echo 'ERROR: ' . mysqli_error($connection);
  }
}

// check for GET variable 
if(isset($_GET['name'])){
  echo 'GET request: Your name is ' . $_GET['name'];
}




?>
