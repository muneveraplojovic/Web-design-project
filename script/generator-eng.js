let isGenerated = false;

function generatePassword() {
  fetch("https://65f441cbf54db27bc0212df6.mockapi.io/password/password")
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        alert("Unable to generate password.");
        return;
      }

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomPasswordObject = data[randomIndex];
      const randomPassword = randomPasswordObject.password;
      document.getElementById("passw").value = randomPassword;
      isGenerated = true;
    })
    .catch((error) => console.error("An error occurred:", error));
}

function copyPassword() {
  if (!isGenerated) {
    alert("Cannot copy password because it has not been generated.");
    return;
  }

  const passwordInput = document.getElementById("passw");
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
