//Local storage - will be dead whenever we clear the cache in the browser

//and session storage- whenever the session is closed-storage will be dead
//setItem(nameof the local storage, the content -value)
// window.localStorage.setItem("name", "james");
// window.localStorage.setItem("email", "james.com");

// var name = localStorage.getItem("name");
// document.getElementById("H1").textContent = name;

// //localStorage.removeItem("name");
// localStorage.clear();

myForm = document.forms[0];
console.log(myForm);
myForm.addEventListener("submit", e => {
  var uname = document.getElementById("uname").value;
  var uEmail = document.getElementById("uEmail").value;
  var tel = document.getElementById("tel").value;
  console.log(uname);
  console.log(uEmail);

  console.log(tel);
  localStorage.setItem("contactName", uname);

  var contactObj = {
    //propertName: property Value
    userName: uname,
    email: uEmail,
    tel: tel
  };
  localStorage.setItem("contactInfo", JSON.stringify(contactObj));
});
