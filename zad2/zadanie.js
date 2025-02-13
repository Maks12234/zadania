const l = document.getElementById("l1");
const wiek = document.getElementById("wiek");


dodaj.addEventListener("click", () => {

    if (l.value >= 18) {
        wiek.innerHTML = ("jestes pelnoletni");
    }
    else {
        wiek.innerHTML = ("nie jestes pelnoletni");
    }
});
