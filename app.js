
// let orderList = document.getElementById("order-list");
// for (let i = 0; i < arr.length; i++) {
  //   let itemList = document.createElement("li");
  //   itemList.innerHTML = arr[i];
  //   orderList.appendChild(itemList);
  // }
  
  // const searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener("click", () => {
  //   let input = document.getElementById("input").value;
  //   let result = arr.filter((elem) => elem.includes(input));
  //   if(result !== ""){
//     orderList.innerText = result
//   }
// });


// window.addEventListener("click",  (e) => {
//     if ((e.target.parentNode = "body")) {
//       window.location.reload();
//     }
//   });



var arr = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
let orderList = document.getElementById("order-list");

const renderList =(items)=> {
  orderList.innerHTML = ""; 
  items.forEach((item) => {
    let itemList = document.createElement("li");
    itemList.innerHTML = item;
    orderList.appendChild(itemList);
  });
}

renderList(arr);

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value; 
  let result = arr.filter((val) => val.includes(input));
  renderList(result.length > 0 ? result : ["Not Found"]);  
});

// window.addEventListener("click", (hal) => {
//   if (hal.target.window.location === "body") { 
//     renderList(arr);
//   }
// });


// const users = [
//   "kamlesh",
//   "bheesham",
//   "kelash",
//   "kelash",
//   "suneel",
//   "danesh",
//   "musab dal",
//   "shail",
//   "vinod",
//   "lal latif",
//   "docter mnoo",
// ];

// let container = document.getElementById("container");
// let search = document.getElementById("search");

// users.forEach((val) => {
//   let p = document.createElement("p");
//   p.innerText = val;
//   container.appendChild(p);
// });

// search.addEventListener("click", () => {
//   let input = document.getElementById("input").value;
//   let result = users.filter((items) => items.includes(input));
//   if (result.length > 0) {
//     container.innerHTML = "";
//     result.forEach((filterUsers) => {
//       let h2 = document.createElement("h2");
//       h2.innerHTML = filterUsers;
//       container.appendChild(h2);
//     });
//   } else {
//     container.innerHTML = "";

//     let h2 = document.createElement("h2");
//     h2.innerHTML = "users Not found";
//     container.appendChild(h2);
//   }
// });


