function oblicz() {
    let waga = document.getElementById('waga').value
    let wzrost = document.getElementById('wzrost').value

    let bmi = (waga / (wzrost * wzrost))

    document.getElementById('1').innerHTML = 'twoje bmi:'
    document.getElementById('2').innerHTML = bmi.toFixed(2)

    if (bmi <= 18.4){
        document.getElementById('3').innerHTML = 'niedowaga'
    } else if (bmi >= 18,5 && bmi <= 24.9) {
        document.getElementById('3').innerHTML = 'poprawna waga'
    } else {
        document.getElementById('3').innerHTML = 'nadwaga'
    }

}    
    
