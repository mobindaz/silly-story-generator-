const lifeElements = ["sunshine", "rain", "blossoming flowers", "laughter", "learning", "challenges", "friendship", "love", "adventure", "reflection"];
const lifeActions = ["nurtured", "experienced", "overcame", "embraced", "discovered", "appreciated", "celebrated", "shared", "cherished", "remembered"];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1)[0];
}

function generateLifeStory() {
    const element1 = getRandomElement(lifeElements);
    const action1 = getRandomElement(lifeActions);
    const element2 = getRandomElement(lifeElements);
    const action2 = getRandomElement(lifeActions);
    const element3 = getRandomElement(lifeElements);
    const action3 = getRandomElement(lifeActions);

    // Reset the arrays to their original state for the next story
    lifeElements.push(...lifeElements);
    lifeActions.push(...lifeActions);

    const lifeStory = `
        In the journey of life, we've encountered ${element1} that ${action1} us.
        Along the way, we've ${action2} ${element2} and faced ${element3} with resilience.
        Life is a beautiful tapestry woven with moments of ${action3} ${element3}.
        Each step is a chapter, and the adventure continues.`;

    document.getElementById('life-story-container').innerText = lifeStory;
}

document.getElementById('generate-btn').addEventListener('click', generateLifeStory);
