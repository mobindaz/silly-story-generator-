function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1)[0];
}

function generateSillyStory() {
    // Make copies of the original arrays to avoid modifying the originals
    const charactersCopy = characters.slice();
    const actionsCopy = actions.slice();
    const objectsCopy = objects.slice();
    const locationsCopy = locations.slice();
    const emotionsCopy = emotions.slice();

    const character = getRandomElement(charactersCopy);
    const action = getRandomElement(actionsCopy);
    const object = getRandomElement(objectsCopy);
    const location = getRandomElement(locationsCopy);
    const emotion = getRandomElement(emotionsCopy);

    // Reset the arrays to their original state for the next story
    charactersCopy.push(...characters);
    actionsCopy.push(...actions);
    objectsCopy.push(...objects);
    locationsCopy.push(...locations);
    emotionsCopy.push(...emotions);

    const sillyStory = `
        Once upon a time, ${character} ${action} ${object}.
        They were located ${location}, and they couldn't stop ${emotion}.
        It was a sight to behold as ${character} and ${object} became best friends.
        But suddenly, a wild ${getRandomElement(charactersCopy)} appeared and joined the party!
        Now, they were all ${action} ${getRandomElement(objectsCopy)} together.
        The end – or is it?`;

    document.getElementById('silly-story-container').innerText = sillyStory;
}

document.getElementById('generate-btn').addEventListener('click', generateSillyStory);
