const question = document.getElementById("question");
const buttons = document.querySelectorAll(".btn");

question.innerText = "Who is the inventor of electric bulb?";

buttons[0].innerText = "Michael Faradey";
buttons[1].innerText = "Schuylar Skaats Wheeler";
buttons[2].innerText = "Thomas Eddison";
buttons[3].innerText = "Robert Anderson";

buttons[0].onclick = function () {
    alert("Wrong \u274C");
};
buttons[1].onclick = function () {
    alert("Wrong \u274C");
};
buttons[2].onclick = function () {
    alert("Correct \u2705");
};
buttons[3].onclick = function () {
    alert("Wrong \u274C");
};