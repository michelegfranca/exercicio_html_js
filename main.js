const form = document.getElementById('form-deposito');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const reais = Number(document.getElementById("reais").value);
    const cents = Number(document.getElementById("cents").value);


    if (cents > reais) {
        alert('Confirmado!')
    } else {
        alert('O campo de centavos precisa ser maior que o de reais!')
    }
})

console.log(form);