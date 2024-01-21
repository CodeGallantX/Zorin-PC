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