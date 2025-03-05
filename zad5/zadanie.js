const passwd = document.getElementById("passwd");
const stan = document.getElementById("stan");

let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

passwd.addEventListener("input", () => {
if (re.test(passwd.value)) {
passwd.style.backgroundColor = "green";
stan.textContent = "ok";
} else {
    passwd.style.backgroundColor = "red";
    stan.textContent = "zle haslo";
}


});