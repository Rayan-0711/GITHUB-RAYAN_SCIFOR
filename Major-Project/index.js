const likeButtons = document.querySelectorAll('.like_iconi');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active'); // Toggle the active class for the clicked button
    });
});

document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const logo = document.querySelector('.logo');
const spinner = document.getElementById('spinner');
const centerDiv = document.querySelector('.main .center');

logo.addEventListener('click', () => {
    // Show the spinner
    spinner.style.display = 'block';

    // Scroll to the top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Blink the center part
    centerDiv.classList.add('blink');

    // Remove the blink class after the animation completes
    setTimeout(() => {
        centerDiv.classList.remove('blink');
        spinner.style.display = 'none'; // Hide spinner after the blink
    }, 1500); // Duration matches 3 cycles of 1.5s animation
});


document.getElementById('profile-icon').addEventListener('click', function() {
    const profileContainer = document.getElementById('profile-container');

    // Check if the profile card is already loaded
    if (!profileContainer.innerHTML) {
        fetch('profile.html')
            .then(response => response.text())
            .then(data => {
                profileContainer.innerHTML = data; // Load profile.html content
            })
            .catch(error => {
                console.error('Error loading profile.html:', error);
            });
    } else {
        // If already loaded, toggle its visibility
        profileContainer.style.display = profileContainer.style.display === 'none' ? 'block' : 'none';
    }
});



function logout() {
    // Optional: Add any log-out logic here (e.g., clearing session storage, cookies)
    window.location.href = 'login.html';  // Redirect to login.html
}


