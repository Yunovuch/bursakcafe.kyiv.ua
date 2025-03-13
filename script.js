document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Запобігаємо стандартному надсиланню форми

    let form = this;
    let formData = new FormData(form);

    let phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(document.getElementById("phone").value)) {
        alert("Некоректний номер телефону!");
        return;
    }

    fetch("send_mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "error") {
            alert(data.message);
            return;
        }
        document.getElementById("success-message").style.display = "block";  // Показуємо повідомлення
        form.reset();  // Очищаємо форму
    })
    .catch(error => console.error("Помилка:", error));
});
