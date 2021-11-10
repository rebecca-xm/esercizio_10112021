function sendCredentials(username) {
    change.textContent = `${username}`;                         // id span per mantenere 'buongiorno' solo in html e cambiare [NOME]
}

function saveCredentials(user, pass) {
    window.localStorage.setItem("username", user);
    window.localStorage.setItem("password", pass);
}

function loadCredentials(key) {
    return window.localStorage.getItem(key);
}

const userPage = document.querySelector(".userPage");
const modalEl = document.querySelector(".modal");
const userInputEl = document.querySelector("#user");
const passInputEl = document.querySelector("#pass");
const btnSendEl = document.querySelector("#btnSend");
const change = document.querySelector("#change");               // id span per mantenere 'buongiorno' solo in html e cambiare [NOME]

const user = {
    username: "",
    password: "",
};

btnSendEl.addEventListener("click", (evt) => {
    user.username = userInputEl.value;
    user.password = passInputEl.value;

    userPage.style.display = "block";
    document.body.removeChild(modalEl);

    sendCredentials(user.username);
});

setTimeout(() => {
    modalEl.style.transform = "translateY(0px)";
}, 2000);