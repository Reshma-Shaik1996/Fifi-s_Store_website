console.log("hi");

let animals = [
  {
    img: "./Pictures/Akita.jpg",
    type: "Dog",
    breed: " Akita",
    color: "Color: borwn",
    birthYear: "2018",
    price: "600"
  },
  {
    img: "./Pictures/chihua.jpg",
    type: "Dog",
    breed: "chihua",
    color: "Color: White",
    birthYear: "2018",
    price: "200"
  },
  {
    img: "./Pictures/Dalmatian.jpg",
    type: "Dog",
    breed: " Dalmatian",
    color: "Color: Black & White",
    birthYear: "2018",
    price: "200"
  },
  {
    img: "./Pictures/pomerian.jpg",
    type: "Dog",
    breed: " pomerian",
    color: "Color: White",
    birthYear: "2018",
    price: "200"
  },
  {
    img: "./Pictures/lion.jpg",
    type: "Dog",
    breed: " Lion",
    color: "Color: Brown",
    birthYear: "2016",
    price: "400"
  },
  {
    img: "./Pictures/Bulldog.jpg",
    type: "Dog",
    breed: " Bulldog",
    color: "Color: Yellow ",
    birthYear: "2018",
    price: "200"
  },
  {
    img: "./Pictures/German_shepord.jpg",
    type: "Dog",
    breed: " German Shepard",
    color: "Color: Black",
    birthYear: "2018",
    price: "150"
  },
  {
    img: "./Pictures/Husky.jpg",
    type: "Dog",
    breed: " Husky",
    color: "Color: White",
    birthYear: "2016",
    price: "1200"
  },
  {
    img: "./Pictures/Labrador.jpg",
    type: "Dog",
    breed: " Labrador",
    color: "Color: Black",
    birthYear: "2018",
    price: "500"
  },
  {
    img: "./Pictures/poodle.jpeg",
    type: "Dog",
    breed: " Poodle",
    color: "Color: White",
    birthYear: "2018",
    price: "200"
  },
  {
    img: "./Pictures/Pug.jpg",
    type: "Dog",
    breed: " Pug",
    color: "Color: White",
    birthYear: "2018",
    price: "800"
  },
  {
    img: "./Pictures/Chow.jpg",
    type: "Dog",
    breed: " Chow",
    color: "Color: Brown",
    birthYear: "2018",
    price: "200"
  },
  {
    img: "./Pictures/Afga.jpeg",
    type: "Dog",
    breed: " Afga",
    color: "Color: White",
    birthYear: "2016",
    price: "1600"
  },
  {
    img: "./Pictures/Argentino.jpg",
    type: "Dog",
    breed: " Argentino",
    color: "Color: White",
    birthYear: "2018",
    price: "900"
  },
  {
    img: "./Pictures/GoldenRetriver.jpeg",
    type: "Dog",
    breed: " GoldenRetriver",
    color: "Color: White",
    birthYear: "2017",
    price: "750"
  },
  {
    img: "./Pictures/GreatDane.jpg",
    type: "Dog",
    breed: " GreatDane",
    color: "Color: Black",
    birthYear: "2017",
    price: "1900"
  },
  {
    img: "./Pictures/pug2.jpg",
    type: "Dog",
    breed: " pug2",
    color: "Color: White",
    birthYear: "2018",
    price: "600"
  }
];
console.log(animals);

let main = document.getElementById("app");
var li;
for (let i = 0; i < animals.length; i++) {
  li = `
<div class="Animal">

<ul id="myUL">
<li><a href="#" >
  <img alt='Image not found' class="pet-photo" src='${
    animals[i].img
  }'></a ></li><br>
  <li><a href="#"><h3 class="pet-name">${
    animals[i].breed
  } <span class="pet-type"> (${animals[i].type})</span></h3></a ></li>
  <li><a href="#">${animals[i].color}</a></li>
  <li><a href="#">${new Date().getFullYear() -
    animals[i].birthYear}Year Old</a></li>
  <li ><a href="#"><p class="price">Price $<span class="pet-price">${
    animals[i].price
  }</span></p></a></li>
  <li> <button id="cart-botton">Add to Cart</button></li>
  </ul>
  </div>
  `;
  main.innerHTML += li;
}

//============Add to cart

var Showcart = document.getElementsByClassName("show_cart");
var CartWindow = document.getElementById("cart_window");
var CartClose = document.getElementById("cart_close");
var cartButton = document.querySelectorAll("#cart-botton");

let CartContentItems = document.querySelector(".cart_content");

cartButton.forEach(btn => {
  console.log(btn);
  btn.onclick = () => {
    let petName = btn.parentElement.parentElement.querySelector(".pet-name")
      .innerText;

    let petPrice = btn.parentElement.parentElement.querySelector(".pet-price")
      .innerText;

    const Items = `
    <tr>
      <td>${petName} </td>
      <td>${petPrice}</td>
      <td > <button class="CartDeleteBtn">Delete</button></td>
    </tr>

    `;

    CartContentItems.innerHTML += Items;
    //Total price
    var n_Price = petPrice;
    var Totalprice;
    Totalprice += n_Price;
    localStorage.Totalprice = Totalprice;
    console.log(localStorage.Totalprice);
    var totalDisplay = document.querySelector(".TotalDisplay");
    totalDisplay.innerHTML = Totalprice;
    //Delete Button
    var cartDeleteButton = document.querySelectorAll(".CartDeleteBtn");
    cartDeleteButton.forEach(function(remove_btn) {
      remove_btn.onclick = function() {
        remove_btn.parentElement.parentElement.remove();
      };
    });
  };
});

//============ cart Display
document.querySelector(".show_cart").onclick = () => {
  if (document.querySelector("#cart_window").style.display == "none") {
    document.querySelector("#cart_window").style.display = "block";
  } else {
    document.querySelector("#cart_window").style.display = "none";
  }
};

//close symbol

document.querySelector(".cart_close").onclick = () => {
  if (document.querySelector("#cart_window").style.display == "block") {
    document.querySelector("#cart_window").style.display = "none";
  } else {
    document.querySelector("#cart_window").style.display = "none";
  }
};
// =============search bar
let search = document.querySelector("#search_bar");

search.onkeyup = function() {
  search = document.querySelector("#search_bar").value.toUpperCase();
  console.log(search);

  let petNames = document.querySelectorAll(".pet-name");

  petNames.forEach(function(petName) {
    petNameValue = petName.innerText.toUpperCase();
    if (petNameValue.includes(search)) {
      petName.parentElement.parentElement.parentElement.parentElement.style.display =
        "";
    } else {
      petName.parentElement.parentElement.parentElement.parentElement.style.display =
        "none";
    }
  });
};

// Login and password

var User = document.getElementById("Login-user").value;
var Pass = document.getElementById("Login-password").value;
var Btn = document.getElementById("Login-button");
function authenticate(form) {
  if (form.User.value == "user" && form.Pass.value == "1234") {
    window.open("index.html");
  } else {
    alert("Please Enter valid Id and password");
  }
}
//payment
var payBtn = document.querySelector(".payemntbutton");
