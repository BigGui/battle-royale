async function waitingForResponse() {
    try {
    const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    const characters = await response.json();
    console.table(characters);
    }
    catch(error) {
    console.error("Unable to load todolist datas from the server : " + error);
    }
    }