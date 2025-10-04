<?php

if (isset($_POST['Send'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $subject += " By :" + $email;
    mail('yashmane63429@gmail.com', $subject, $message);
}