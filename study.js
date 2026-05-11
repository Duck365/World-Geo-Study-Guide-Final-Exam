let currentMode = '';

// UI Navigation
function openStudyMode(mode, modeName) {
    currentMode = mode;
    document.getElementById('screen-1').style.display = 'none';
    document.getElementById('screen-2').style.display = 'flex';
    document.getElementById('mode-title').innerText = `MODE: ${modeName}`;
    
    const inputElement = document.getElementById('study-input');
    inputElement.placeholder = "Type your answer here... and press Enter";
    inputElement.focus();
}

function goBack() {
    document.getElementById('screen-2').style.display = 'none';
    document.getElementById('screen-1').style.display = 'flex';
    document.getElementById('chat-box').innerHTML = '';
    document.getElementById('study-input').value = '';
}

// Input Handling
const inputField = document.getElementById('study-input');
const chatBox = document.getElementById('chat-box');

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const query = this.value.trim();
        if (query === '') return;
        
        this.value = '';
        processAnswer(query);
    }
});

function processAnswer(answer) {
    appendMessage(`You: ${answer}`);
    appendMessage(`System: Checking answer...`);

    setTimeout(() => {
        // Placeholder for answer checking logic
        const result = checkAnswer(answer, currentMode);
        
        const sysContainer = document.createElement('div');
        sysContainer.className = 'message-row';
        const sysMsg = document.createElement('div');
        sysMsg.className = 'message';

        if (result.isCorrect) {
            sysMsg.innerHTML = `System: <span class="highlight-text">✓ Correct!</span><br>${result.feedback}`;
        } else {
            sysMsg.innerHTML = `System: <span class="error-text">✗ Incorrect</span><br>${result.feedback}`;
        }
        
        sysContainer.appendChild(sysMsg);
        chatBox.appendChild(sysContainer);
        
        const separatorRow = document.createElement('div');
        separatorRow.className = 'message-row';
        const separator = document.createElement('div');
        separator.className = 'separator';
        separator.innerText = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
        separatorRow.appendChild(separator);
        chatBox.appendChild(separatorRow);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

function appendMessage(text) {
    const row = document.createElement('div');
    row.className = 'message-row';
    const msg = document.createElement('div');
    msg.className = 'message';
    msg.innerText = text;
    row.appendChild(msg);
    chatBox.appendChild(row);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Placeholder function - we'll expand this later
function checkAnswer(answer, mode) {
    // This will be populated with actual study content
    return {
        isCorrect: false,
        feedback: "Answer checking coming soon!"
    };
}
