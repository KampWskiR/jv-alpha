  const selectElement = document.getElementById('sorting-method');

  selectElement.addEventListener('change', (event) => {
    sortPets()
  });



function sortPets() {
  var petsContainer = document.querySelector(".petcontainer");
  var pets = Array.from(petsContainer.children);
  var sortingMethod = document.querySelector("#sorting-method").value;

  switch (sortingMethod) {
    case "top-to-bottom":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[type=Value]").getAttribute("order"));
        var petValueB = parseInt(b.querySelector("[type=Value]").getAttribute("order"));
        return petValueB - petValueA;
      });
      break;

    case "bottom-to-top":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[type=Value]").getAttribute("order"));
        var petValueB = parseInt(b.querySelector("[type=Value]").getAttribute("order"));
        return petValueA - petValueB;
      });
      break;

    case "biggest-golden-value":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[type=Value]").getAttribute("value"));
        var petValueB = parseInt(b.querySelector("[type=Value]").getAttribute("value"));
        return petValueB - petValueA;
      });
      break;

    case "smallest-golden-value":
      pets.sort(function(a, b) {
        var petValueA = parseInt(a.querySelector("[type=Value]").getAttribute("value"));
        var petValueB = parseInt(b.querySelector("[type=Value]").getAttribute("value"));
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
  var petsContainer = document.querySelector(".petcontainer");
  var pets = Array.from(petsContainer.children);
  var category = document.querySelector("#category").value;
}