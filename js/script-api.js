const allCharacters = [];
async function waitingForResponse() {
  try {
    const response = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const characters = await response.json();

    const names = getName(characters);
    displayNames(names);
    console.log(names)
    //console.table(characters);
  } catch (error) {
    console.error("Unable to load character datas from the server : " + error);
  }
}

waitingForResponse();

function getName(characters) {
let names = []
  for (const c of characters) {
    c.name;
    names.push(c.name)
  }
  return names

}

function displayNames(names) {
    for (const name of names) {

        const PlayerTemplate = document.getElementById("character-choice");
        const player = document.importNode(PlayerTemplate.content, true);
        player.querySelector(".js-player-name").textContent = name
        document.body.appendChild(player);
    }
}


