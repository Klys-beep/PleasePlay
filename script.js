document.getElementById("yesBtn").addEventListener("click", function() {
    alert("❤️ cho na dc ;pp");
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let button = document.getElementById("noBtn");
    let randomX = Math.floor(Math.random() * 300) - 150;
    let randomY = Math.floor(Math.random() * 300) - 150;
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
