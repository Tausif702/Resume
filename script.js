// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Validate the form
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                return;
            }

            // You can add more advanced validation if needed

            // If the form is valid, you can send the data to the server or perform other actions
            alert("Form submitted successfully!");

            // Optionally, you can reset the form after submission
            contactForm.reset();
        });
    }
});
