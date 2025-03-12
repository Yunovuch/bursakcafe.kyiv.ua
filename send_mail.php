<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $datetime = htmlspecialchars($_POST["datetime"]);

    $to = "robotarobota402@gmail.com";  // 
    $subject = "Нове бронювання столика";
    $message = "Ім'я: $name\nТелефон: $phone\nДата і час: $datetime";
    $headers = "From: no-reply@bursak.com";

    if (mail($to, $subject, $message, $headers)) {robotarobota402@gmail.com
        echo "<p>Бронювання успішно відправлено!</p>";
    } else {
        echo "<p>Помилка при відправленні!</p>";
    }
}
?>
