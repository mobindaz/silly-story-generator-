const characters = ["The Ninja", "The Pirate", "The Unicorn", "The Robot"];
const actions = ["ate", "danced with", "flew around with", "tickled"];
const objects = ["a talking donut", "a rainbow", "a giant pickle", "a dancing chicken"];
const locations = ["in a magical forest", "on top of a mountain", "underwater", "in outer space"];
const emotions = ["laughing uncontrollably", "crying tears of joy", "doing a happy dance", "singing a silly song"];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateSillyStory() {
    const character = getRandomElement(characters);
    const action = getRandomElement(actions);
    const object = getRandomElement(objects);
    const location = getRandomElement(locations);
    const emotion = getRandomElement(emotions);

    const sillyStory = `
        Once upon a time, ${character} ${action} ${object}.
        They were located ${location}, and they couldn't stop ${emotion}.
        It was a sight to behold as ${character} and ${object} became best friends.
        But suddenly, a wild ${getRandomElement(characters)} appeared and joined the party!
        Now, they were all ${action} ${getRandomElement(objects)} together.
        The end – or is it?`;

    document.getElementById('silly-story-container').innerText = sillyStory;
}

document.getElementById('generate-btn').addEventListener('click', generateSillyStory);
