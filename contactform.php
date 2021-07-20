<?php

if (isset($_POST["submit"])) {
    
    $name = $_POST["name"];
    $mailFrom = $_POST["email"];
    $message = $_POST["message"];
    
    $mailTo = "info@matthew-flores.com";
    $headers = "From: ".$mailFrom;
    $txt = "New Message from ".$name.".\n\n".$message;
    
    mail($mailTo, $txt, $headers);
    
    header("Location: index.php?mailsend");
}


?>
