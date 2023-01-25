<?php
// 1:05:51

// Create Connection
$connection = mysqli_connect('localhost', 'root', '', 'AJAXCrashCourse');

$query = 'SELECT * FROM users';

// Get result from the database
$output = mysqli_query($connection, $query);

// Fetch data
$users = mysqli_fetch_all($output, MYSQLI_ASSOC);

echo json_encode($users);
