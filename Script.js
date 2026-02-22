const input = document.querySelector(".textInput");
const button = document.querySelector(".convertBtn");
const output = document.querySelector(".output");

function asciiToBinary(str) {
    return str.split('')
              .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
              .join(' ');
}

button.addEventListener('click', () => {
    const text = input.value;
    if(text.trim() === "") {
        output.textContent = "Bitte Text eingeben!";
    } else {
        output.textContent = asciiToBinary(text);
    }
});