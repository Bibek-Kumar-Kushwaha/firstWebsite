<?php
// Set up database connection
$servername = "sql202.epizy.com";
$username = "epiz_33864269";
$password = "dyAwy5oOcHdrV";
$dbname = "contact";

$conn = mysqli_connect($servername, $username, $password);

// Check database connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS contact";

if (mysqli_query($conn, $sql)) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

// Select database
mysqli_select_db($conn, $dbname);

// Create table
$sql = "CREATE TABLE IF NOT EXISTS contact (
Name VARCHAR(30) NOT NULL,
Address VARCHAR(30) NOT NULL, 
Phone VARCHAR(30) NOT NULL,
Email VARCHAR(30) NOT NULL,
Opinion VARCHAR(1000) NOT NULL
)";

if (mysqli_query($conn, $sql)) {
    echo "Table created successfully<br>";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $opinion = $_POST['opinion'];

    // Insert data into table
    
 $sql = "INSERT INTO contact( Name, Address, Phone, Email, Opinion) VALUES ('$name','$address','$phone','$email','$opinion')";
 //$sql = "INSERT INTO contact( Name, Address, Phone, Email, Opinion) VALUES ('bibek','ramban','980','kushwaha@gmail.com','hello')";
    
 //$sql = "INSERT INTO contact ( Name , Address , Phone , Email , Opinion ) VALUES ('$name','$address','$phone','$email','$opinion')";

    if (mysqli_query($conn, $sql)) {
        echo "Phone number inserted successfully<br>";
    } else {
        echo "Error inserting phone number: " . mysqli_error($conn);
    }
}

// Close database connection
mysqli_close($conn);

?>