<?php

/* Contact form script configuration. */

// Enter email, where messages has to be received.
$contact_email_to = 'centrumodrodzenia@gmail.com';

// Subject prefix.
$contact_subject_prefix = 'Formularz kontaktowy: ';

$data = file_get_contents('php://input');
$postData = json_decode($data);

$name = $postData->name;
$email = $postData->email;
$tel = $postData->tel;
$subject = $postData->subject;
$message = $postData->message;

$sendemail = mail($contact_email_to, $contact_subject_prefix . $subject,
  "Od: " . $name . "<" . $email . ">" . PHP_EOL
  . "Odpowiedz do: " . $email . PHP_EOL
  . "Telefon: " . $tel . PHP_EOL
  . "Temat: " . $subject . PHP_EOL
  . "Wiadomość: " . $message . PHP_EOL
// . "X-Mailer: PHP/" . phpversion()
);


if ($sendemail) {
  echo 'Wiadomość została wysłana.';
} else {
  echo 'Nie można wysłać wiadomości, proszę napisać bezpośrednio na centrumodrodzenia@gmail.com';
}