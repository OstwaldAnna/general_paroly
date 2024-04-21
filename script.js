const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function copyPassword() {
    const passwordDisplay = document.getElementById("passwordDisplay");
    const password = passwordDisplay.textContent;
    
    // Создаем временный элемент input для копирования пароля в буфер обмена
    const tempInput = document.createElement("input");
    tempInput.value = password;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Пароль скопирован в буфер обмена!");
}

// Добавляем функцию для генерации пароля при загрузке страницы
window.onload = function() {
    generatePassword();
}

// Добавляем функцию для изменения сложности пароля
function changePasswordStrength() {
    const lengthInput = document.getElementById("lengthInput").value;
    const uppercaseCheckbox = document.getElementById("uppercaseCheckbox").checked;
    const numbersCheckbox = document.getElementById("numbersCheckbox").checked;
    const symbolsCheckbox = document.getElementById("symbolsCheckbox").checked;

    // Обновляем сложность пароля
    generatePassword(lengthInput, uppercaseCheckbox, numbersCheckbox, symbolsCheckbox);
}

// Обновляем функцию generatePassword для учета новых параметров
function generatePassword(length = 8, uppercase = true, numbers = true, symbols = true) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = lowercaseChars;
    let password = "";

    if (uppercase) chars += uppercaseChars;
    if (numbers) chars += numberChars;
    if (symbols) chars += symbolChars;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("passwordDisplay").textContent = password;
}
