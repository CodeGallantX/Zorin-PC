function updateClock() {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit'};
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById("time").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


//Passord
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const showPasswordIcon = document.getElementById('showPassword');

    // Function to toggle password visibility
    function togglePasswordVisibility() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    }

    // Event listener for clicking on the showPassword element
    showPasswordIcon.addEventListener('click', togglePasswordVisibility);
});
