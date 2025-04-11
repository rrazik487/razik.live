document.addEventListener("DOMContentLoaded", () => {
    const chatBody = document.getElementById("chatBody");
    const userInput = document.getElementById("userInput");
  
    appendMessage("bot", "👋 Hello! I'm Razik's Portfolio Assistant. Ask me anything about his work, skills, or contact info!");
  
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  
    window.sendMessage = async () => {
      const message = userInput.value.trim();
      if (!message) return;
  
      appendMessage("user", message);
      userInput.value = "";
  
      try {
        const response = await fetch("https://agent-prod.studio.lyzr.ai/v3/inference/chat/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "sk-default-pmIsJuzTr18DyZtG9JDw3oMx4o3gsXWB"
          },
          body: JSON.stringify({
            user_id: "qpoire07@gmail.com",
            agent_id: "67f88bfdedfb72a89a82d234",
            session_id: "67f88bfdedfb72a89a82d234",
            message: message
          })
        });
  
        const data = await response.json();
        console.log("API response:", data);
  
        // ✅ Use correct property
        const reply = data.response || "Sorry, I couldn't get that. Try again!";
        appendMessage("bot", reply);
  
      } catch (error) {
        console.error("Fetch error:", error);
        appendMessage("bot", "Oops! Something went wrong. Please try again.");
      }
    };
  
    function appendMessage(sender, text) {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("chat-message");
      msgDiv.innerHTML = `<strong>${sender === "user" ? "You" : "Assistant"}:</strong> ${text}`;
      chatBody.appendChild(msgDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });
// Toggle Chatbot View
const chatToggle = document.getElementById("chatToggle");   
const chatbotContainer = document.getElementById("chatbotContainer");
const introSection = document.getElementById("introSection");
chatToggle.addEventListener("click", () => {
    introSection.classList.add("shift-left");
    setTimeout(() => {
      chatbotContainer.classList.add("show");
    }, 500);
  });
// Send message on click
                        
