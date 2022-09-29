// Assigning variables
const correctAnswers = ["B", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector("div.result");

// On submit:
form.addEventListener("submit", e => {
    e.preventDefault(); // Prevent default action

    // Get user answers
    let userAnswers = [];
    for (i = 1; i < 5; i++) {
        userAnswers.push(eval(`form.q${i}.value`));
    }
    
    // Check answers
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Show and animate score
    scrollTo(0, 0);
    const resultValue = result.querySelector("span");
    let interval = 0;
    const showScore = setInterval(() => {
        resultValue.textContent = `${interval}%`;
        if (interval >= score) {
            clearInterval(showScore);
        } else {
            interval++;
        }
    }, 10);
    result.classList.remove("d-none");
});