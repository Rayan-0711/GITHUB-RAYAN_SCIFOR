function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block"; // Show the button
    } else {
        scrollUpBtn.style.display = "none"; // Hide the button
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
}

   

function handleSubmit(event) {
    // Prevent default behavior to validate first
    event.preventDefault();

    // Grab form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Popups
    const popupSuccess = document.getElementById("popup-success");
    const popupError = document.getElementById("popup-error");

    // Validate form fields
    if (name === "" || email === "" || subject === "" || message === "") {
        // Show error popup
        popupError.classList.add("show");

        // Scroll to popup
        popupError.scrollIntoView({ behavior: "smooth", block: "center" });

        // Hide popup after 3 seconds
        setTimeout(() => popupError.classList.remove("show"), 3000);
        return false; // Prevent form submission
    }

    // Show success popup
    popupSuccess.classList.add("show");

    // Scroll to popup
    popupSuccess.scrollIntoView({ behavior: "smooth", block: "center" });

    // Hide popup after 3 seconds
    setTimeout(() => popupSuccess.classList.remove("show"), 3000);

    // Reset the form after successful validation
    document.getElementById("contact-form").reset();

    return true; // Allow form submission
}
 
// Add "loaded" class to the body after page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Smooth scroll to sections on clicking navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').slice(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start' // Align to the top of the viewport
        });
    });
});
