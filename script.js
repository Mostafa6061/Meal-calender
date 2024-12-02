// document.getElementById("myBtn").addEventListener("click", myFunction);
document.querySelector("ul").addEventListener("click", myFunction);

// document.addEventListener("click", (event) => {
// console.log(event);
// });

// document.addEventListener("mousemove", function (event) {
//   console.log(event);
//   event.preventDefault();
// });

function myFunction(event) {
  const targetHTMLELement = event.target;
  const card = targetHTMLELement.closest(".card");
  const name = card.querySelector(".name");

  // const name = event.target.closest(".card").querySelector(".name");
  document.getElementById("demo").innerHTML = name.textContent;
}

const dishesItems = [
  {
    name: "Kashke Bademjon",
    image: "Kashke-Bademjan.png",
    textContent: "Hauptgericht",
    background:
      "var(--Blau, linear-gradient(122deg, #6360e2 0%, #54fffd 100%))",
  },
  {
    name: "Qeyme",
    image: "Geyme.png",
    textContent: "Hauptgericht",
    background: "linear-gradient(122deg, #FF6B95 0%, #FFC796 100%)",
  },
  {
    name: "Pizza",
    image: "Pizza.png",
    textContent: "Hauptgericht",
    background:
      "var(--Green, linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%))",
  },
  {
    name: "Shiryach",
    image: "Shirjach 1.png",
    textContent: "Snaks",
    background:
      "var(--Black, linear-gradient(122deg, #7B7168 0%, #B4DBFF 100%))",
  },
  {
    name: "Pasta",
    image: "Pasta 1.png",
    textContent: "Hauptgericht",
    background:
      "var(--Green, linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%))",
  },
  {
    name: "Abghost",
    image: "abgoosht 1.png",
    textContent: "Hauptgericht",
    background: "var(--Red, linear-gradient(122deg, #FF007D 0%, #FFA800 100%))",
  },
];

function createCardElement(name, image, background) {
  // TODO
  // Hier kommt die Erstellung des Card-Elements hinein (inkl. Name, Photo).
}

const firstList = document.querySelector("ul.first-list");

for (var l = 0; l < dishesItems.length; l++) {
  // Hier musst du die Funktion mit den richtigen dynamischen Parametern aufrufen.
  // const card = createCardElement()

  const card = document.createElement("div");
  card.className = "card";
  card.style.background = dishesItems[l].background;
  card.draggable = "true";

  const play = document.createElement("div");
  play.className = "play";

  card.appendChild(play);

  const main = document.createElement("div");
  main.className = "main";
  main.textContent = dishesItems[l].textContent;

  play.appendChild(main);

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = dishesItems[l].name;

  play.appendChild(name);

  const photo = document.createElement("div");
  photo.className = "photo";
  card.appendChild(photo);

  const img = document.createElement("img");
  img.alt = "Photo of " + dishesItems[l].name;
  img.src = dishesItems[l].image;
  photo.appendChild(img);

  const li = document.createElement("li");
  li.appendChild(card);

  firstList.appendChild(li);
}

const dishesNumber = [
  {
    name: "Qorme sabsi",
    image: "ghormeh-sabzi 1.png",

    background:
      "var(--Brown, linear-gradient(122deg, #797979 0%, #E3A973 100%))",
  },
  {
    name: "Qaboli",
    image: "Kabuli-Pulao 1.png",

    background:
      "var(--Violet, linear-gradient(122deg, #EF32D9 0%, #89FFFD 100%))",
  },
  {
    name: "Manto",
    image: "Manto 1.png",

    background: "linear-gradient(122deg, #FF6B95 0%, #FFC796 100%)",
  },
  {
    name: "Ashak",
    image: "Ashak 1.png",

    background: "var(--Colors-Green, #34C759)",
  },
  {
    name: "Zereshk polo",
    image: "Zereshk polo 1.png",
    background:
      "var(--Blau, linear-gradient(122deg, #6360E2 0%, #54FFFD 100%))",
  },
  {
    name: "Bolani",
    image: "Bolani 1.png",
    background:
      "var(--Black, linear-gradient(122deg, #7B7168 0%, #B4DBFF 100%))",
  },
];

const secondList = document.querySelector("ul.second-list");

for (var m = 0; m < dishesNumber.length; m++) {
  // Hier musst du die Funktion mit den richtigen dynamischen Parametern aufrufen.
  // const card = createCardElement()

  const card = document.createElement("div");
  card.className = "card";
  card.style.background = dishesNumber[m].background;
  card.draggable = "true";

  const li = document.createElement("li");
  li.appendChild(card);

  const play = document.createElement("div");
  play.className = "play";

  card.appendChild(play);

  const main = document.createElement("div");
  main.className = "main";
  main.textContent = "Hauptgericht";

  play.appendChild(main);

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = dishesNumber[m].name;

  play.appendChild(name);

  const photo = document.createElement("div");
  photo.className = "photo";
  card.appendChild(photo);

  const img = document.createElement("img");
  img.alt = "Photo of " + dishesNumber[m].name;
  img.src = dishesNumber[m].image;
  photo.appendChild(img);

  secondList.appendChild(li);
}

document.addEventListener("dragstart", drag);

function drag(ev) {
  const nameHTMLElement = ev.target.querySelector(".name");
  const name = nameHTMLElement.textContent;
  ev.dataTransfer.setData("text/plain", name);
  ev.dataTransfer.setData("text/html", nameHTMLElement);
}

document.querySelectorAll("td").forEach(function (element) {
  element.addEventListener("dragover", allowDrop);
  element.addEventListener("drop", drop);
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain");
  var data2 = ev.dataTransfer.getData("text/html");
  // console.log("drop", ev);
  // console.log(ev.target.outerHTML);
  ev.target.textContent = data;
  // ev.target.appendChild(document.getElementById(data));
}

// const myButton = document.querySelector("button");
// myButton.addEventListener("click", myNewFunction);
// function myNewFunction() {
//   alert("Button was clicked!");
// }

// const inputElement = document.querySelector("input");
// // inputElement.value = type;
// // console.log(inputElement.value);

// const ulElement = document.querySelector("ul");
// const card = document.createElement("div");
// card.className = "card";

const input = document.querySelector("#input");
const newElement = document.querySelector(".card");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (!inputValue) return;

  // Hier musst du die Funktion mit den richtigen dynamischen Parametern aufrufen.
  // const card = createCardElement()

  const card = document.createElement("div");
  card.className = "card";
  card.style.background = dishesItems[3].background;
  card.draggable = "true";

  const li = document.createElement("li");
  li.appendChild(card);

  const play = document.createElement("div");
  play.className = "play";

  card.appendChild(play);

  const main = document.createElement("div");
  main.className = "main";
  main.textContent = "Hauptgericht";

  play.appendChild(main);

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = inputValue;

  play.appendChild(name);

  const photo = document.createElement("div");
  photo.className = "photo";
  card.appendChild(photo);

  const img = document.createElement("img");
  img.alt = "Photo of ";
  img.src = dishesItems[5].image;
  photo.appendChild(img);

  firstList.appendChild(li);

  input.value = "";
});

// Ob man die Liste die wir in Javascript erstellt haben hier wieder abrufen kann
