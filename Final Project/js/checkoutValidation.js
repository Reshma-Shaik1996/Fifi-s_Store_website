function checkNumber(string) {
  return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(string);
}

function checkCvc(string) {
  return /^[0-9]{3}$/.test(string);
}

function cName(string) {
  return /[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}$/.test(string);
}

function CheckDate(string) {
  return /[0-9]{4}-[0-9]{2}$/.test(string);
}

document.querySelector(".name").onkeyup = function() {
  if (checkNumber(document.querySelector(".name").value)) {
    document.querySelector(".name").style.border = "4px solid green";
  } else {
    document.querySelector(".name").style.border = "4px solid red";
  }
};

document.querySelector(".CVC").onkeyup = function() {
  if (checkCvc(document.querySelector(".CVC").value)) {
    document.querySelector(".CVC").style.border = "4px solid green";
  } else {
    document.querySelector(".CVC").style.border = "4px solid red";
  }
};

document.querySelector(".C-name").onkeyup = function() {
  if (cName(document.querySelector(".C-name").value)) {
    document.querySelector(".C-name").style.border = "4px solid green";
  } else {
    document.querySelector(".C-name").style.border = "4px solid red";
  }
};

// expiry date================
document.querySelector(".E-date").onkeyup = function() {
  if (CheckDate(document.querySelector(".E-date").value)) {
    document.querySelector(".E-date").style.border = "4px solid green";
  } else {
    document.querySelector(".E-date").style.border = "4px solid red";
  }
};

// shipping form=======================
function cdName(string) {
  return /[A-Z]{1}[a-z]{3,14}\s[A-Z]{1}[a-z]{1,14}$/.test(string);
}

document.querySelector(".CD-name").onkeyup = function() {
  if (cdName(document.querySelector(".CD-name").value)) {
    document.querySelector(".CD-name").style.border = "4px solid green";
  } else {
    document.querySelector(".CD-name").style.border = "4px solid red";
  }
};

function checkCity(string) {
  return /^[A-Z][a-z]+$/.test(string);
}

document.querySelector(".city").onkeyup = function() {
  if (checkCity(document.querySelector(".city").value)) {
    document.querySelector(".city").style.border = "4px solid green";
  } else {
    document.querySelector(".city").style.border = "4px solid red";
  }
};

function checkPostal(string) {
  return /^[A-Z][0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/.test(string);
}
document.querySelector(".postal").onkeyup = function() {
  if (checkPostal(document.querySelector(".postal").value)) {
    document.querySelector(".postal").style.border = "4px solid green";
  } else {
    document.querySelector(".postal").style.border = "4px solid red";
  }
};

function checkProvince(string) {
  return /^[A-Z][a-z]+$/.test(string);
}

document.querySelector(".province").onkeyup = function() {
  if (checkProvince(document.querySelector(".province").value)) {
    document.querySelector(".province").style.border = "4px solid green";
  } else {
    document.querySelector(".province").style.border = "4px solid red";
  }
};

function checkCountry(string) {
  return /^[A-Z][a-z]+$/.test(string);
}

document.querySelector(".Country").onkeyup = function() {
  if (checkCountry(document.querySelector(".Country").value)) {
    document.querySelector(".Country").style.border = "4px solid green";
  } else {
    document.querySelector(".Country").style.border = "4px solid red";
  }
};

function PlaceOrder(form2) {
  alert("The Order has been placed Sucessfully");
  window.open("index.html");
}
