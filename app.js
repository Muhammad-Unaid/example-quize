const questions = [
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText and links Markup Language",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<style>",
        b: "<script>",
        c: "<css>",
        d: "<link>",
        correct: "a"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "class",
        c: "styles",
        d: "font",
        correct: "a"
    },
    {
        question: "Which of the following is the correct syntax to link an external CSS file?",
        a: "<link rel='stylesheet' href='styles.css'>",
        b: "<style src='styles.css'>",
        c: "<css src='styles.css'>",
        d: "<link href='styles.css'>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a responsive fixed-width container?",
        a: ".container",
        b: ".container-fluid",
        c: ".container-fixed",
        d: ".container-responsive",
        correct: "a"
    },
    {
        question: "Which Bootstrap class is used to create a primary button?",
        a: ".btn-primary",
        b: ".btn-default",
        c: ".btn-main",
        d: ".btn-action",
        correct: "a"
    },
    {
        question: "Which property is used to change the font size in CSS?",
        a: "font-size",
        b: "text-size",
        c: "font-style",
        d: "text-style",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<list>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a responsive navigation bar?",
        a: ".navbar",
        b: ".nav",
        c: ".navigation",
        d: ".navbar-responsive",
        correct: "a"
    },
    {
        question: "Which property is used to change the text color in CSS?",
        a: "color",
        b: "text-color",
        c: "font-color",
        d: "text-style",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define a table?",
        a: "<table>",
        b: "<tr>",
        c: "<td>",
        d: "<th>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a grid system?",
        a: ".grid",
        b: ".container",
        c: ".row",
        d: ".column",
        correct: "c"
    },
    {
        question: "Which property is used to set the space between elements in CSS?",
        a: "margin",
        b: "padding",
        c: "spacing",
        d: "border",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<url>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a responsive image?",
        a: ".img-responsive",
        b: ".img-fluid",
        c: ".image-responsive",
        d: ".image-fluid",
        correct: "b"
    },
    {
        question: "Which property is used to set the width of an element in CSS?",
        a: "width",
        b: "size",
        c: "length",
        d: "dimension",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define a form?",
        a: "<form>",
        b: "<input>",
        c: "<textarea>",
        d: "<button>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a modal dialog?",
        a: ".modal",
        b: ".dialog",
        c: ".popup",
        d: ".window",
        correct: "a"
    },
    {
        question: "Which property is used to set the font family in CSS?",
        a: "font-family",
        b: "text-family",
        c: "font-type",
        d: "text-type",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define a paragraph?",
        a: "<p>",
        b: "<h1>",
        c: "<div>",
        d: "<span>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a badge?",
        a: ".badge",
        b: ".label",
        c: ".tag",
        d: ".marker",
        correct: "a"
    },
    {
        question: "Which property is used to set the text alignment in CSS?",
        a: "text-align",
        b: "align-text",
        c: "text-position",
        d: "align",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define a list item?",
        a: "<li>",
        b: "<ul>",
        c: "<ol>",
        d: "<list>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a carousel?",
        a: ".carousel",
        b: ".slider",
        c: ".gallery",
        d: ".slideshow",
        correct: "a"
    },
    {
        question: "Which property is used to set the border style in CSS?",
        a: "border-style",
        b: "border",
        c: "border-width",
        d: "border-color",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define a header?",
        a: "<header>",
        b: "<h1>",
        c: "<head>",
        d: "<title>",
        correct: "a"
    },
    {
        question: "Which class in Bootstrap is used to create a jumbotron?",
        a: ".jumbotron",
        b: ".hero",
        c: ".banner",
        d: ".highlight",
        correct: "a"
    },
    // Add 28 more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 180; // 3 minutes = 180 seconds
let timerInterval;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').innerText = currentQuestion.question;
        document.getElementById('option-a').innerText = currentQuestion.a;
        document.getElementById('option-b').innerText = currentQuestion.b;
        document.getElementById('option-c').innerText = currentQuestion.c;
        document.getElementById('option-d').innerText = currentQuestion.d;
    } else {
        endQuiz();
    }
}

function submitAnswer() {
    const options = document.getElementsByName('option');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption) {
        if (selectedOption === questions[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert('Please select an option.');
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('timer').innerText = `Time Remaining: ${minutes}:${seconds}`;
}

function endQuiz() {
    alert(`Quiz over! Your score: ${score} / ${questions.length}`);
    // Add more code here to restart the quiz or send results to a server
}

// Start the quiz
loadQuestion();
startTimer();
