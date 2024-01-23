function updateClock() {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit'};
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById("time").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();



//Password
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


//Password\\
function validatePassword() {
    // Get the entered password
    var enteredPassword = document.getElementById("password").value;

    // Expected password
    var expectedPassword = "123456";

    // Check if the entered password matches the expected password
    if (enteredPassword === expectedPassword) {
        console.log("Login successful!");
        return true; // Allow form submission
    } else {
        console.log("Incorrect password. Please try again.");
        return false; // Prevent form submission
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordIcon = document.getElementById("showPassword");
    var hidePasswordIcon = document.getElementById("hidePassword");

    // Toggle password visibility
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordIcon.style.display = "none";
        hidePasswordIcon.style.display = "block";
    } else {
        passwordInput.type = "password";
        showPasswordIcon.style.display = "block";
        hidePasswordIcon.style.display = "none";
    }
}

//Show login page



function unlockScreen() {

}