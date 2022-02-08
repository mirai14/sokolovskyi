<?php

	$form_data = [];

	$fname        	= $_POST['fname'];
	$lname        	= $_POST['lname'];
	$email        	= $_POST['email'];
	$cell        	= $_POST['cell'];

	$message     	= "First Name: $fname, \nLast Name: $lname, \nEmail: $email, \nCell: $cell";

	if(mail('example@gmail.com', "Test Sub", $message))
		$form_data['success'] = true;
	else
		$form_data['success'] = false;

	echo json_encode($form_data);
	return;
?>