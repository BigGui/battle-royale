const allCharacters = [];
async function waitingForResponse() {
  try {
    const response = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const characters = await response.json();
    getNameAndImg(characters);
  } catch (error) {
    console.error("Unable to load character datas from the server : " + error);
  }
}

waitingForResponse();

function getNameAndImg(characters) {
  let names = [];
  let imgs = [];
  for (const c of characters) {
    imgs.push(c.images.ms);
    names.push(c.name);
    const PlayerTemplate = document.getElementById("character-choice");
    const player = document.importNode(PlayerTemplate.content, true);
    const characters = document.getElementById("characters-list");
    player.querySelector(".js-player-name").textContent = c.name;
    player.querySelector(".js-player-img").alt = c.name;
    player.querySelector(".js-player-img").src = c.images.md;
    player.querySelector(".js-player-img").dataset.idImg = c.id;
    player.querySelector(".js-player").dataset.id = c.id;

    characters.appendChild(player);
  }
}

// function ShowTemplates(
//   injectedHtmlId,
//   templeteID,
//   templeteName,
//   templeteSrc,
//   templeteAlt,
//   name,
//   imgSrc
// ) {
//   const selectedCharacter = document.getElementById(injectedHtmlId);

//   const PlayerTemplate = document.getElementById(templeteID);
//   const player = document.importNode(PlayerTemplate.content, true);
//   player.querySelector(templeteName).textContent = name;
//   player.querySelector(templeteAlt).alt = name;
//   player.querySelector(templeteSrc).src = imgSrc;

//   selectedCharacter.appendChild(player);
// }

const charactersLst = document.getElementById("characters-list");
charactersLst.addEventListener("click", function (e) {
  const PlayerTemplate = document.getElementById("selected-character");
  const player = document.importNode(PlayerTemplate.content, true);
  const selectedCharacter = document.getElementById("selected-characters-lst");
  player.querySelector(".js-player-name").textContent = e.target.alt;
  player.querySelector(".js-player-img").alt = e.target.alt;
  player.querySelector(".js-player-img").src = e.target.src;
  player.querySelector(".js-player-img").dataset.idImg = e.target.dataset.idImg;
  player.querySelector(".js-player").dataset.id = e.target.dataset.idImg;

  //   player.querySelector(".js-player").appendChild(e.target)
  console.log(e.target);
//   console.log(selectedCharacter);

  selectedCharacter.appendChild(player);
});

function getClicked() {}
