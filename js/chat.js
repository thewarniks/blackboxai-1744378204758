const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const chatForm = document.getElementById('chatForm');
const typingIndicator = document.getElementById('typingIndicator');

// Function to append a message to the chat
function appendMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message flex items-start mb-4 ${isUser ? 'justify-end' : ''}`;
    messageDiv.innerHTML = `
        <div class="flex-shrink-0 h-8 w-8 rounded-full ${isUser ? 'bg-blue-500' : 'bg-gray-300'} flex items-center justify-center">
            <i class="${isUser ? 'fas fa-user' : 'fas fa-robot'} text-white text-sm"></i>
        </div>
        <div class="ml-3 ${isUser ? 'bg-blue-100' : 'bg-gray-100'} rounded-lg py-2 px-4 max-w-[80%]">
            <p class="text-gray-800">${content}</p>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the latest message
}

// Function to simulate bot response
function simulateBotResponse(userMessage) {
    typingIndicator.classList.remove('hidden'); // Show typing indicator
    setTimeout(() => {
        typingIndicator.classList.add('hidden'); // Hide typing indicator
        const botResponse = `You said: "${userMessage}"`; // Simple echo response
        appendMessage(botResponse); // Append bot response
    }, 1500); // Simulate a delay for bot response
}

// Handle form submission
chatForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, true); // Append user message
        messageInput.value = ''; // Clear input
        simulateBotResponse(userMessage); // Simulate bot response
    }
});
