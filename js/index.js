document.addEventListener("DOMContentLoaded", () => {
  const chatToggle = document.getElementById("chatToggle");
  const chatbotContainer = document.getElementById("chatbotContainer");
  const introSection = document.getElementById("introSection");
  const chatBody = document.getElementById("chatBody");
  const userInput = document.getElementById("userInput");

  // Toggle chat visibility
  chatToggle.addEventListener("click", () => {
    // Slide intro section
    introSection.classList.add("shift-left");

    // Show chatbot after slight delay
    setTimeout(() => {
      chatbotContainer.classList.add("show");
      chatbotContainer.classList.remove("hide");

      // Load welcome message only if it's not already loaded
      if (!chatBody.innerHTML.trim()) {
        appendMessage("Razik's Assistant", "👋 Hello! How can I help you with my portfolio?");
      }
    }, 400);
  });

  // Send user message
  window.sendMessage = function () {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("You", message);
    userInput.value = "";

    // Simulate bot reply
    setTimeout(() => {
      appendMessage("Razik's Assistant", "🤖 I'm still learning. But I can help guide you through my work!");
    }, 1000);
  };

  // Helper to add messages
  function appendMessage(sender, text) {
    const messageEl = document.createElement("div");
    messageEl.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBody.appendChild(messageEl);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
