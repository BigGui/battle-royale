/**
 * Display all characters available
 * @param {object} characters
 */
function displayCharacters(characters) {
  for (const c of characters) {
    showTemplates("character-choice", "characters-list", c);
  }
}

/**
 * Show a template
 * @param {string} templeteId - id of the template
 * @param {String} injectedId - id of the injected element
 * @param {object} object - an object with name, image, id
 */
function showTemplates(templeteId, injectedId, object) {
  const playerTemplate = document.getElementById(templeteId);
  const player = document.importNode(playerTemplate.content, true);
  const charactersLst = document.getElementById(injectedId);
  player.querySelector(".js-player-name").textContent = object.name;
  player.querySelector(".js-player-img").alt = object.name;
  player.querySelector(".js-player-img").src = object.images.md;
  player.querySelector(".js-player-img").dataset.idImg = object.id;
  player.querySelector(".js-player").dataset.id = object.id;
  charactersLst.appendChild(player);
}

function showTemplatesFromHtml(templeteId, injectedId, object, characters) {
  const PlayerTemplate = document.getElementById(templeteId);
  const player = document.importNode(PlayerTemplate.content, true);
  const selectedCharacter = document.getElementById(injectedId);
  player.querySelector(".js-player-name").textContent = object.alt;
  player.querySelector(".js-player-img").alt = object.alt;
  player.querySelector(".js-player-img").src = object.src;
  player.querySelector(".js-player-img").dataset.idImg = object.dataset.idImg;
  player.querySelector(".js-player").dataset.id = object.dataset.idImg;
  player.querySelector(".js-player-features").textContent =
    characters[object.dataset.idImg].appearance.gender;
  console.log(object.dataset.idImg);
  selectedCharacter.appendChild(player);
  return characters[object.dataset.idImg];
}

const allCharacters = [];
async function waitingForResponse() {
  try {
    const response = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const characters = await response.json();
    console.table(characters);
    // console.log(characters[0].appearance.gender);
    displayCharacters(characters);

    const clickedCharactersList = [];

    const charactersLst = document.getElementById("characters-list");
    charactersLst.addEventListener("click", function (e) {
      const clickedCharacter = showTemplatesFromHtml(
        "selected-character",
        "selected-characters-lst",
        e.target,
        characters
      );

      console.log(clickedCharacter);
    });
  } catch (error) {
    console.error("Unable to load character datas from the server : " + error);
  }
}

waitingForResponse();
