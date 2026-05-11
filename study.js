// Global state
let isDebugMode = false;
let currentScreen = 'menu'; // menu, flashcard, quiz, debug
let currentCardIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let allQuestions = [];
let answerRevealed = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    if (typeof worldGeographyQuestions !== 'undefined') {
        allQuestions = JSON.parse(JSON.stringify(worldGeographyQuestions)); // Deep copy
    }
    setupEventListeners();
});

function setupEventListeners() {
    // Debug password handler
    document.getElementById('debug-password').addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            verifyDebugPassword(this.value);
        }
    });

    // Quiz answer handler
    document.getElementById('typing-answer').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitAnswer();
        }
    });
}

// ===== MENU SCREEN =====
function openStudyMode(mode, modeName) {
    if (isDebugMode) {
        openDebugMode();
    } else {
        showScreen('flashcard');
        currentCardIndex = 0;
        answerRevealed = false;
        displayFlashcard();
    }
}

function goBackToMenu() {
    showScreen('menu');
    answerRevealed = false;
    document.getElementById('typing-answer').value = '';
    document.getElementById('quiz-answer-options').innerHTML = '';
}

// ===== FLASHCARD MODE =====
function displayFlashcard() {
    const card = allQuestions[currentCardIndex];
    document.getElementById('card-question').innerText = card.question;
    document.getElementById('card-answer').innerText = formatAnswer(card);
    document.getElementById('progress-tracker').innerText = `Card ${currentCardIndex + 1} of ${allQuestions.length}`;
    document.getElementById('card-answer-section').classList.add('hidden');
    answerRevealed = false;
    document.querySelector('.show-answer-btn').innerText = 'Show Answer';
}

function formatAnswer(card) {
    if (card.type === 'multiple-choice') {
        return `${card.options[card.correctAnswer]}`;
    } else if (card.type === 'typing') {
        return Array.isArray(card.correctAnswers) ? card.correctAnswers[0] : card.correctAnswers;
    }
    return 'Answer not found';
}

function toggleAnswerVisibility() {
    const answerSection = document.getElementById('card-answer-section');
    const button = document.querySelector('.show-answer-btn');
    
    if (answerRevealed) {
        answerSection.classList.add('hidden');
        button.innerText = 'Show Answer';
        answerRevealed = false;
    } else {
        answerSection.classList.remove('hidden');
        button.innerText = 'Hide Answer';
        answerRevealed = true;
    }
}

function nextCard() {
    if (currentCardIndex < allQuestions.length - 1) {
        currentCardIndex++;
        displayFlashcard();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayFlashcard();
    }
}

// ===== QUIZ MODE =====
function displayQuizQuestion() {
    const card = allQuestions[currentQuizIndex];
    document.getElementById('quiz-question').innerText = card.question;
    document.getElementById('quiz-progress').innerText = `Question ${currentQuizIndex + 1} of ${allQuestions.length}`;
    document.getElementById('feedback-display').classList.add('hidden');
    document.getElementById('typing-answer').value = '';
    document.getElementById('quiz-answer-options').innerHTML = '';
    document.getElementById('question-display').style.display = 'block';

    if (card.type === 'multiple-choice') {
        displayMultipleChoice(card);
        document.querySelector('.typing-input-container').style.display = 'none';
    } else if (card.type === 'typing') {
        document.querySelector('.typing-input-container').style.display = 'flex';
        document.getElementById('typing-answer').focus();
    }
}

function displayMultipleChoice(card) {
    const container = document.getElementById('quiz-answer-options');
    card.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;
        btn.onclick = () => checkMultipleChoice(index, card.correctAnswer);
        container.appendChild(btn);
    });
}

function submitAnswer() {
    const card = allQuestions[currentQuizIndex];
    const userAnswer = document.getElementById('typing-answer').value.trim().toLowerCase();
    
    let isCorrect = false;
    if (Array.isArray(card.correctAnswers)) {
        isCorrect = card.correctAnswers.some(ans => userAnswer === ans.toLowerCase());
    } else {
        isCorrect = userAnswer === card.correctAnswers.toLowerCase();
    }

    showFeedback(isCorrect, card);
}

function checkMultipleChoice(selectedIndex, correctIndex) {
    const card = allQuestions[currentQuizIndex];
    const isCorrect = selectedIndex === correctIndex;
    showFeedback(isCorrect, card);
}

function showFeedback(isCorrect, card) {
    const feedbackDiv = document.getElementById('feedback-display');
    document.getElementById('question-display').style.display = 'none';
    feedbackDiv.classList.remove('hidden');
    
    if (isCorrect) {
        quizScore++;
        feedbackDiv.classList.add('correct');
        feedbackDiv.classList.remove('incorrect');
        feedbackDiv.innerHTML = `<div style="font-size: 1.5rem; margin-bottom: 10px;">✓ Correct!</div>
            <div>Correct Answer: ${formatAnswer(card)}</div>
            <button class="nav-btn" onclick="nextQuizQuestion()" style="margin-top: 20px;">Next Question →</button>`;
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.classList.remove('correct');
        feedbackDiv.innerHTML = `<div style="font-size: 1.5rem; margin-bottom: 10px;">✗ Incorrect</div>
            <div>Correct Answer: ${formatAnswer(card)}</div>
            <button class="nav-btn" onclick="nextQuizQuestion()" style="margin-top: 20px;">Next Question →</button>`;
    }
}

function nextQuizQuestion() {
    if (currentQuizIndex < allQuestions.length - 1) {
        currentQuizIndex++;
        displayQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const percentage = Math.round((quizScore / allQuestions.length) * 100);
    const feedbackDiv = document.getElementById('feedback-display');
    feedbackDiv.classList.add('correct');
    feedbackDiv.innerHTML = `
        <h2>Quiz Complete!</h2>
        <div style="font-size: 2rem; margin: 20px 0;">${quizScore} / ${allQuestions.length}</div>
        <div>${percentage}%</div>
        <button class="nav-btn" onclick="goBackToMenu()" style="margin-top: 20px;">Back to Menu</button>
    `;
}

// ===== DEBUG MODE =====
function openDebugModal() {
    document.getElementById('debug-modal').classList.remove('hidden');
    document.getElementById('debug-password').focus();
}

function verifyDebugPassword(password) {
    if (password === 'Ctrl+W') {
        document.getElementById('debug-modal').classList.add('hidden');
        document.getElementById('debug-password').value = '';
        document.getElementById('debug-error').style.display = 'none';
        isDebugMode = true;
        openDebugMode();
    } else {
        document.getElementById('debug-error').style.display = 'block';
        document.getElementById('debug-password').value = '';
        document.getElementById('debug-password').focus();
    }
}

function openDebugMode() {
    showScreen('debug');
    loadDebugQuestions();
}

function loadDebugQuestions() {
    const container = document.getElementById('debug-questions-container');
    container.innerHTML = '';

    allQuestions.forEach((question, index) => {
        const card = document.createElement('div');
        card.className = 'debug-question-card';
        card.innerHTML = `
            <h4>Q${index + 1}: ${question.question.substring(0, 50)}...</h4>
            <p><strong>Type:</strong> ${question.type}</p>
            <p><strong>Topic:</strong> ${question.topic}</p>
            <p><strong>Answer:</strong> ${formatAnswer(question)}</p>
            <div class="debug-card-buttons">
                <button class="debug-card-btn" onclick="editQuestion(${index})">Edit</button>
                <button class="debug-card-btn delete" onclick="deleteQuestion(${index})">Delete</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function addNewQuestion() {
    const newQuestion = {
        id: allQuestions.length + 1,
        question: "New Question",
        type: "typing",
        correctAnswers: ["answer"],
        difficulty: "medium",
        topic: "Custom"
    };
    allQuestions.push(newQuestion);
    loadDebugQuestions();
}

function editQuestion(index) {
    const question = allQuestions[index];
    const newQuestion = prompt('Edit Question:', question.question);
    if (newQuestion) {
        question.question = newQuestion;
        loadDebugQuestions();
    }
}

function deleteQuestion(index) {
    if (confirm('Are you sure you want to delete this question?')) {
        allQuestions.splice(index, 1);
        loadDebugQuestions();
    }
}

function downloadChanges() {
    const dataStr = JSON.stringify(allQuestions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `questions_changes_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function importChanges(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedQuestions = JSON.parse(e.target.result);
            if (Array.isArray(importedQuestions)) {
                allQuestions = importedQuestions;
                loadDebugQuestions();
                alert('Questions imported successfully!');
            } else {
                alert('Invalid file format');
            }
        } catch (err) {
            alert('Error importing file: ' + err.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function exitDebugMode() {
    isDebugMode = false;
    showScreen('menu');
}

// ===== UTILITY FUNCTIONS =====
function showScreen(screenName) {
    document.getElementById('screen-menu').style.display = screenName === 'menu' ? 'flex' : 'none';
    document.getElementById('screen-flashcard').classList.remove('active');
    document.getElementById('screen-quiz').classList.remove('active');
    document.getElementById('screen-debug').classList.remove('active');

    if (screenName === 'flashcard') {
        document.getElementById('screen-flashcard').classList.add('active');
    } else if (screenName === 'quiz') {
        document.getElementById('screen-quiz').classList.add('active');
        currentQuizIndex = 0;
        quizScore = 0;
        displayQuizQuestion();
    } else if (screenName === 'debug') {
        document.getElementById('screen-debug').classList.add('active');
    }
    
    currentScreen = screenName;
}