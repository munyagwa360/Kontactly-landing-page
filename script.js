// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Modal Popup
function showModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Chat Widget
function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.classList.toggle("hidden");
}

// Chat Simulation
function sendMessage() {
    const chatBody = document.querySelector(".chat-body");
    const input = document.getElementById("chat-input");
    const message = input.value.trim();

    if (message) {
        chatBody.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        chatBody.innerHTML += `<p><strong>Kontactly Bot:</strong> Thank you! A representative will assist you shortly.</p>`;
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
