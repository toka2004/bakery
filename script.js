const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const subject = `Bakery enquiry from ${formData.get("name")}`;
    const body = [
        `Name: ${formData.get("name")}`,
        `Email: ${formData.get("email")}`,
        "",
        formData.get("message"),
    ].join("\n");

    formNote.textContent = "Opening your email app with your message ready to send.";
    window.location.href = `mailto:hello@sitename.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});