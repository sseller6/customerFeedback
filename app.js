const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})

document.getElementById("calculate-average").addEventListener("click", function() {
    var questions = ["overall-experience", "value", "expectations", "ease-of-use", "recommend"];
    var total = 0;
    var count = 0;

    questions.forEach(function(question) {
        var answers = document.getElementsByName(question);
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                total += parseInt(answers[i].value);
                count++;
            }
        }
    });

    if (count > 0) {
        var average = total / count;
        alert("The average rating is: " + average.toFixed(2));
    } else {
        alert("Please answer all the questions.");
    }
})