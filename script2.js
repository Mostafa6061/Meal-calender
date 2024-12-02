const dishesItems = [
  {
    name: "Kashke Bademjon",
    image: "Kashke-Bademjan.png",
    textContent: "Hauptgericht",
    background: "linear-gradient(122deg, #6360e2 0%, #54fffd 100%)",
  },
  {
    name: "Qeyme",
    image: "Geyme.png",
    textContent: "Hauptgericht",
    background: "linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%)",
  },
  {
    name: "Pizza",
    image: "Pizza.png",
    textContent: "Hauptgericht",
    background: "linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%)",
  },
  {
    name: "Shiryach",
    image: "Shirjach 1.png",
    textContent: "Snaks",
    background: "linear-gradient(122deg, #7B7168 0%, #B4DBFF 100%)",
  },
  {
    name: "Pasta",
    image: "Pasta 1.png",
    textContent: "Hauptgericht",
    background: "linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%)",
  },
  {
    name: "Abghost",
    image: "abgoosht 1.png",
    textContent: "Hauptgericht",
    background: "linear-gradient(122deg, #FF007D 0%, #FFA800 100%)",
  },
];

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

function createCard({ name, image, background, textContent = "Hauptgericht" }) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.background = background;
  card.draggable = true;

  const play = document.createElement("div");
  play.className = "play";

  const main = document.createElement("div");
  main.className = "main";
  main.textContent = textContent;

  const nameElement = document.createElement("div");
  nameElement.className = "name";
  nameElement.textContent = name;

  const photo = document.createElement("div");
  photo.className = "photo";

  const img = document.createElement("img");
  img.src = image;
  img.alt = `Photo of ${name}`;

  // Struktur zusammenfügen
  photo.appendChild(img);
  play.appendChild(main);
  play.appendChild(nameElement);
  card.appendChild(play);
  card.appendChild(photo);

  return card;
}
const firstList = document.querySelector("ul.first-list");

for (let i = 0; i < dishesItems.length; i++) {
  const dish = dishesItems[i];
  const li = document.createElement("li");
  li.appendChild(createCard(dish));
  firstList.appendChild(li);
}

const secondList = document.querySelector("ul.second-list");

for (let i = 0; i < dishesNumber.length; i++) {
  const dish = dishesNumber[i];
  const li = document.createElement("li");
  li.appendChild(createCard(dish));
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
  ev.target.textContent = data;
}
const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (!inputValue) return;

  const newDish = {
    name: inputValue,
    image: "Bolani 1.png",
    background: "linear-gradient(90deg, #f0f0f0, #d0d0d0)",
    textContent: "Hauptgericht",
  };

  const card = createCard(newDish);
  const li = document.createElement("li");
  li.appendChild(card);
  firstList.appendChild(li);

  input.value = "";
});

async function getData() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

getData();

const thirdList = document.querySelector("ul.third-list");

const createThirdListCards = async () => {
  const cocktailItems = Array.from({ length: 6 }); //Erstellt ein Array mit sechs leeren Elementen. Dieses Array dient als Platzhalter, um sechs Cocktails zu generieren.
  for (const item of cocktailItems) {
    const cocktail = await getData(); // sorgt dafür dass wir cocktail-API abrufen
    const newCoctail = {
      name: cocktail.drinks[0].strDrink,
      image: cocktail.drinks[0].strDrinkThumb,
      background: dishesNumber[2].background,
      textContent: "Cocktail",
    };
    console.log(cocktail);
    const li = document.createElement("li");
    li.appendChild(createCard(newCoctail));
    thirdList.appendChild(li);
  }
};

createThirdListCards();
const reloadButton = document.querySelector(".reloadButton");
reloadButton.addEventListener("click", () => {
  if (thirdList && confirm("Ganz sicher?")) {
    while (thirdList.firstChild) {
      thirdList.removeChild(thirdList.firstChild);
    }
    createThirdListCards();
  }
});
