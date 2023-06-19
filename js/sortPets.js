const selectElement = document.getElementById('sorting-method');
if (selectElement) {
  selectElement.addEventListener('change', (event) => {
    sortPets()
  });
}

const selectElement2 = document.getElementById('category');
if (selectElement2) {
  selectElement2.addEventListener('change', (event) => {
    categoryPets()
  });
}

const selectElement3 = document.getElementById('strength');
if (selectElement3) {
  selectElement3.addEventListener('change', (event) => {
    strengthPets()
  });
}


function sortPets() {
  var Container = document.querySelector(".container");
  var Table = Container.querySelector(".table");
  var petsContainer = Table.querySelector("#table-content");
  var pets = Array.from(petsContainer.children);
  var sortingMethod = document.querySelector("#sorting-method").value;
  if (!sortingMethod) sortingMethod = "bottom-to-top"

  switch (sortingMethod) {
    case "top-to-bottom":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("order"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("order"));
        return petValueB - petValueA;
      });
      break;

    case "bottom-to-top":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("order"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("order"));
        return petValueA - petValueB;
      });
      break;

    case "biggest-golden-value":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("valuesort"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("valuesort"));
        return petValueB - petValueA;
      });
      break;

    case "smallest-golden-value":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("valuesort"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("valuesort"));
        return petValueA - petValueB;
      });
      break;

    default:
      console.log("Invalid sorting method selected.");
      return;
  }

  pets.forEach(function(pet) {
    petsContainer.appendChild(pet);
  });
}

function sortPets() {
  var Container = document.querySelector(".container");
  var Table = Container.querySelector(".table");
  var petsContainer = Table.querySelector("#table-content");
  var pets = Array.from(petsContainer.children);
  var sortingMethod = document.querySelector("#sorting-method").value;

  switch (sortingMethod) {
    case "top-to-bottom":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("order"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("order"));
        return petValueB - petValueA;
      });
      break;

    case "bottom-to-top":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("order"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("order"));
        return petValueA - petValueB;
      });
      break;

    case "biggest-golden-value":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("value"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("value"));
        return petValueB - petValueA;
      });
      break;

    case "smallest-golden-value":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[sortable=true]").getAttribute("value"));
        var petValueB = parseInt(b.querySelector("[sortable=true]").getAttribute("value"));
        return petValueA - petValueB;
      });
      break;

    default:
      console.log("Invalid sorting method selected.");
      return;
  }

  pets.forEach(function(pet) {
    petsContainer.appendChild(pet);
  });
}

function categoryPets() {
  var Container = document.querySelector(".container");
  var Table = Container.querySelector(".table");
  var petsContainer = Table.querySelector("#table-content");
  var pets = Array.from(petsContainer.children);
  var category = document.querySelector("#category").value;
  if (!category) category = "all"

  pets.forEach(function(pet) {
    var petCategory = pet.getAttribute('category');
    if (category === "all" || petCategory === category) {
      pet.style.display = "block";
    } else {
      pet.style.display = "none";
    }
  });
}

function popularPets() {
  var Container = document.querySelector(".container");
  var Table = Container.querySelector(".table");
  var petsContainer = Table.querySelector("#table-content");
  var pets = Array.from(petsContainer.children);
  pets.forEach(function(pet) {
    var petPopular = pet.getAttribute('main');
    if (petPopular == "ye") {
      pet.style.display = "block";
    } else {
      pet.style.display = "none";
    }
  });
}

function petOfTheDay() {
  var Container = document.querySelector(".container-potd");
  var Table = Container.querySelector(".table");
  var petsContainer = Table.querySelector("#table-content");
  var pets = Array.from(petsContainer.children);
  pets.forEach(function(pet) {
    var petPopular = pet.getAttribute('main');
    if (petPopular == "potd") {
      pet.style.display = "block";
    } else {
      pet.style.display = "none";
    }
  });
}

function strengthPets() {
  var Container = document.querySelector(".container");
  var Table = Container.querySelector(".table");
  var petsContainer = Table.querySelector("#table-content");
  var strengths = petsContainer.querySelectorAll(".strength");
  var category = document.querySelector("#strength").value;
  if (!category) category = "on"

  strengths.forEach(function(strengthtext) {
    if (category == "on") {
      strengthtext.style.visibility = "visible";

    } else {
      strengthtext.style.visibility = "hidden";
    }
  });
}