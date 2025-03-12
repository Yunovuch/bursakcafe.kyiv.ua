document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Запобігаємо стандартному надсиланню форми

    let form = this;
    let formData = new FormData(form);

    fetch("send_mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("success-message").style.display = "block";  // Показуємо повідомлення
        form.reset();  // Очищаємо форму
    })
    .catch(error => console.error("Помилка:", error));
});
