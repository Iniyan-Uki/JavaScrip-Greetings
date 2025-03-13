document.getElementById("greetButton").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value.trim();
    let greetingMessage = document.getElementById("greetingMessage");

    if (name === "") {
        greetingMessage.textContent = "Please enter your name!";
        greetingMessage.style.color = "red";
    } else {
        greetingMessage.textContent = `Hello, ${name}!`;
        greetingMessage.style.color = "green";
    }
});