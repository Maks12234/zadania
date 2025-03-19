const imie = document.getElementById("imie");
const nazwisko = document.getElementById("nazwisko");

const imie_value = document.getElementById("podglad")
const nazwisko_value = document.getElementById("podglad2")



function wyswietlanie() {
    let vimie = imie.value;
    let vnazwisko = nazwisko.value;
    
    imie_value.innerHTML = vimie ;
    nazwisko_value.innerHTML = vnazwisko;
}