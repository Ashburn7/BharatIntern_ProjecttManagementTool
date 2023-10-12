document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmation");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add code here to send the form data to a server if needed.
        // For this example, we'll just show a confirmation message.
        confirmation.style.display = "block";
        contactForm.reset();
    });
});
