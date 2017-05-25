<?php

/* Contact form script configuration. */

// Enter email, where messages has to be received.
$contact_email_to = 'centrumodrodzenia@gmail.com';

// Subject prefix.
$contact_subject_prefix = 'Wiadomość z formularza kontaktowego: ';

// Name too short error text.
$contact_error_name = 'Imię jest zbyt krótkie lub puste.';

// Email invalid error text.
$contact_error_email = 'Proszę wpisać poprawny adres e-mail.';

// Telephone invalid error text.
$contact_error_telephone = 'Proszę wpisać poprawny numer telefonu.';

// Subject too short error text.
$contact_error_subject = 'Temat jest zbyt krótki lub pusty.';

// Message too short error text.
$contact_error_message = 'Zbyt krótka wiadomość.';

if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
  die('Błąd, zapytanie musi być typu AJAX POST.');
}

if (isset($_POST)) {
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $telephone = filter_var($_POST['tel'], FILTER_VALIDATE_INT);
  $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  if (strlen($name) < 4) {
    // Name too short.
    die($contact_error_name);
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Email invalid.
    die($contact_error_email);
  }

  if (!filter_var($telephone, FILTER_VALIDATE_INT)) {
    // Telephone invalid.
    die($contact_error_telephone);
  }

  if (strlen($subject) < 5) {
    // Subject too short.
    die($contact_error_subject);
  }

  if (strlen($message) < 10) {
    // Message too short.
    die($contact_error_message);
  }

  $sendemail = mail($contact_email_to, $contact_subject_prefix . $subject, $message,
    "Od: " . $name . "<" . $email . ">" . PHP_EOL
    . "Odpowiedz do: " .$email . PHP_EOL
    // . "X-Mailer: PHP/" . phpversion()
  );

  if ($sendemail) {
    echo 'Wiadomość została wysłana.';
  } else {
    echo 'Nie można wysłać wiadomości, proszę napisać bezpośrednio na centrumodrodzenia@gmail.com';
  }
}
