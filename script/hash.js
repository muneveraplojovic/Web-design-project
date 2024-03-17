{
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <script>
     */
}

function handleSubmit(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("passwordd").value;
  login(username, password);
}

function login(username, password) {
  var hashedPass = CryptoJS.MD5(password).toString();

  fetch("/json/users.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((users) => {
      let exist = false;

      for (let i = 0; i < users.data.length; i++) {
        if (
          users.data[i].username == username &&
          users.data[i].password == hashedPass
        ) {
          alert("You are logged in");
          localStorage.setItem("logged_in", true);

          window.location.href =
            "https://password-inator.netlify.app/pages/generator";
          exist = true;
          break;
        }
      }

      if (!exist) {
        alert("Invalid login credentials");
      }
    })
    .catch((error) => console.error("Unable to fetch data:", error));
console.log(localStorage.getItem("logged_in", false));
}



document.getElementById("login-form").addEventListener("submit", handleSubmit);
 
// </script>
