document.getElementById("greetButton").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value.trim();
    let greetingMessage = document.getElementById("greetingMessage");

    if (name === "") {
        greetingMessage.textContent = "Please enter your Name!";
        greetingMessage.style.color = "red";
    } else {
        greetingMessage.textContent = `Have a nice Day, ${name}!`;
        greetingMessage.style.color = "black";
    }
});