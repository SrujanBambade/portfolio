<?php
if(!empty($_POST["send"])) {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$conn = mysqli_connect("localhost", "root","" , "portfoliodb") or die("Connection Error: " . mysqli_error($conn));
	mysqli_query($conn, "INSERT INTO connectme (user_name, user_email, user_message) VALUES ('" . $name. "', '" . $email. "','" . $message. "')");
	$insert_id = mysqli_insert_id($conn);
	//if(!empty($insert_id)) {
	   $message = "Your contact information is saved successfully.";
	   $type = "success";
	//}
}
require_once "index.html";
?>