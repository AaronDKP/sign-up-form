function matchPassword() {
    let pw1 = document.getElementById("initPassword");
    let pw2 = document.getElementById("confPassword");
    let msg = document.getElementById("confPasswordMsg");

    if (pw1 != pw2) {
        msg.textContent = 'Passwords do not match';
    } else {
        msg.textContent = 'Password created successfully';
    }
}

