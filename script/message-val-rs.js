function validnaPoruka(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[a-zA-Z.!*(){}&^#@$/_?|><%+-,;:\s]{1,255}$/) === null) {
    if (obj.value.match(/^[0-9]{1,255}$/) == null) {
      obj.style.color = "red";
      document.getElementById("messageError").innerHTML =
        "Uneli ste nedozoljene karaktere!";
      document.getElementById("messageError").style.color = "red";
      return false;
    }
    if (obj.value.length == 255) {
      obj.style.color = "red";
      document.getElementById("messageLengthError").innerHTML =
        "Ne moze vise od 255 karaktera!";
      return false;
    }
  }
  obj.style.color = "green";
  document.getElementById("messageError").innerHTML = "";
  document.getElementById("messageLengthError").innerHTML = "";
  return true;
}

// validacija imena pocetak
function validnoIme(obj) {
  var maxLength = 22;

  obj.value = obj.value.toString();
  if (!/^[A-Z][a-z]{5,22}$/.test(obj.value)) {
    if (obj.value.length > maxLength) {
      document.getElementById("nameLengthError").innerHTML =
        "Ne može više od 22 karaktera!";
      obj.style.color = "red";
    } else if (obj[0] == obj.value.match(/^[A-Z]/)) {
      obj.style.color = "red";
      document.getElementById("firstNameError").innerHTML =
        "Unesite veliko početno slovo!";
      document.getElementById("firstNameError").style.color = "red";
      document.getElementById("nameLengthError").innerHTML = "";
    } else if (obj.value.length < 5) {
      document.getElementById("firstNameError").innerHTML =
        "Unesite minimum 5 karaktera!";
      if (obj.value.match(/^[A-Z]{2,4}/)) {
        document.getElementById("firstNameError").innerHTML =
          "Unesite male karaktere karaktera!";
      }
      obj.style.color = "red";
    }
    return false;
  }
  obj.style.color = "green";
  document.getElementById("firstNameError").innerHTML = "";
  document.getElementById("nameLengthError").innerHTML = "";
  return true;
}
// validacija imena kraj

//validacija prezimena pocetak
function validnoPrezime(obj) {
  var maxLength = 20;

  obj.value = obj.value.toString();
  if (!/^[A-Z][a-z]{4,20}$/.test(obj.value)) {
    if (obj.value.length > maxLength) {
      document.getElementById("lastNameLengthError").innerHTML =
        "Ne može više od 20 karaktera!";
      document.getElementById("lastNameLengthError").style.color = "red";
      obj.style.color = "red";
    } else if (obj[0] == obj.value.match(/^[A-Z]/)) {
      document.getElementById("lastNameError").innerHTML =
        "Unesite veliko početno slovo!";
      document.getElementById("lastNameError").style.color = "red";
      document.getElementById("lastNameLengthError").innerHTML = "";
      obj.style.color = "red";
    } else if (obj.value.length < 4) {
      document.getElementById("lastNameError").innerHTML =
        "Unesite minimum 4 karaktera!";
      document.getElementById("lastNameError").style.color = "red";

      if (obj.value.match(/^[A-Z]{2,3}/)) {
        document.getElementById("lastNameError").innerHTML =
          "Unesite male karaktere!";
        document.getElementById("lastNameError").style.color = "red";
      }
      obj.style.color = "red";
    }
    return false;
  }
  obj.style.color = "green";
  document.getElementById("lastNameError").innerHTML = "";
  document.getElementById("lastNameLengthError").innerHTML = "";
  return true;
}
//validacija prezimena kraj

var phoneNumber = document.getElementById("phoneNumber").value;
var email = document.getElementById("email").value;
var phoneError = document.getElementById("phoneError");
var emailError = document.getElementById("emailError");

var isValid = true;

//validan mail pocetak

function validanMejl(obj) {
  obj.value = obj.value.toString();
  if (
    obj.value.match(
      /^[A-Z]{1}[A-Z0-9.*(){}&^#@!$/_?|><%+-]{1,}[A-Z0-9]+@[A-Z]+(?:\.[A-Z]+)*$/i
    ) === null
  ) {
    obj.style.color = "red";
    document.getElementById("emailError").style.color = "red";
    document.getElementById("emailError").innerHTML = "Proverite unos!";
    return false;
  }
  obj.style.color = "green";
  document.getElementById("emailError").innerHTML = "";
  return true;
}
//validan mail kraj

//validan br telefona pocetaak
function validanBroj(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(!/^\d{3}\/\d{3}-\d{2}-\d{2}$/)) {
    if (obj.value.match(/^[a-zA-Z.!*(){}&^#@$/_?|><%+-,;:\s]{1,11}$/)) {
      obj.style.color = "red";
      document.getElementById("phoneError").innerHTML = "";
      return false;
    }

    obj.style.color = "green";
    document.getElementById("phoneNumber").innerHTML = "";
    return true;
  }
}
