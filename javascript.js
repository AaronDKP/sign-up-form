const init = document.querySelector("#initPassword");
const conf = document.querySelector("#confPassword");

conf.addEventListener('input', matchPassword);

function matchPassword() {
    const pw1 = document.querySelector("#initPassword").value;
    const pw2 = document.querySelector("#confPassword").value;

    if (pw1 != pw2) {
        init.classList.remove("success");
        init.classList.add("error");
        conf.classList.remove("success");
        conf.classList.add("error");
    } else {
        init.classList.remove("error");
        init.classList.add("success");
        conf.classList.remove("error");
        conf.classList.add("success");
    }
}