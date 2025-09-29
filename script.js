function Calculate() {
    let firstForm = document.getElementById('firstForm').value.trim();
    let secondForm = document.getElementById('secondForm').value.trim();
    let answer = document.getElementById('answer');

    let errors = [];

    // Проверка первого поля
    if (isNaN(firstForm) || firstForm === "") {
        errors.push("Ошибка в первом поле");
    }

    // Проверка второго поля
    if (isNaN(secondForm) || secondForm === "") {
        errors.push("Ошибка во втором поле");
    }

    // Ошибка в обоих полях 
    if (errors.length > 0) {
        answer.textContent = errors.join(" и ");
        answer.style.color = "red";
        return;
    }

    // Приведение к числу и расчет
    let result = parseFloat(firstForm) + parseFloat(secondForm);
    answer.textContent = "Результат: " + result;
    answer.style.color = "green";
}