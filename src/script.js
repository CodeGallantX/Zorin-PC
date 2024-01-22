function updateClock() {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit'};
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById("time").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


function showPassword() {
    let pswd = document.querySelector('#password');
    pswd.style.display = ''
}

const passwordInput = document.getElementById("password");
const showPasswordToggle = document.getElementById("showPassword");

showPasswordToggle.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
});
