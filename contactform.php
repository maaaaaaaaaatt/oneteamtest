    <?php

$name = $_POST['name'];
$email = $_POST['email'];
$select = $_POST['select'];
$message = $_POST['message'];

$formcontent="From: $name \n Interested in: $select \n Message: $message";

if ($select == 'license') { 
    $to = 'information@mysite.com';
}
else if (select == 'athletes') { 
    $to = 'product@mysite.com'; 
}
else if (select == 'grouplicensing') { 
    $to = 'career@mysite.com'; 
}
else if (select == 'investment') { 
    $to = 'career@mysite.com'; 
}
else { //other options
    $to = 'others@mysite.com'; 
}

$subject = "Enquiry from Website";
$mailheader = "From: $email \r\n";
mail($to, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You! <br /> We will get in touch with you as soon as possible.";

?>