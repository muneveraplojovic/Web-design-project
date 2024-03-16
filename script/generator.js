
let isGenerated = false;

function generatePassword() {
    fetch('https://65f441cbf54db27bc0212df6.mockapi.io/password/password')
    .then(response => response.json())
    .then(data => {
        if (data.length === 0) {
            alert('Nije moguće generisati lozinku. Nema dostupnih lozinki.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPasswordObject = data[randomIndex];
        const randomPassword = randomPasswordObject.password;
        document.getElementById('passw').value = randomPassword;
        isGenerated = true;
    })
    .catch(error => console.error('Došlo je do greške:', error));
}

function copyPassword() {
    if (!isGenerated) {
        alert('Nije moguće kopirati lozinku jer nije generisana.');
        return;
    }

    const passwordInput = document.getElementById('passw');
    passwordInput.select();
    document.execCommand('copy');
    alert('Lozinka je kopirana u memoriju!');
}