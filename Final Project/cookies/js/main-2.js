// var name = localStorage.getItem("contactName");

// document.getElementById("userName").textContent = name;
var obj = localStorage.getItem("contactInfo");

document.getElementById("usrName").textContent = obj.userName;
document.getElementById("uEmail").textContent = obj.email;
document.getElementById("tel").textContent = obj.tel;
