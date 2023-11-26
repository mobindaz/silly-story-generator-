function generatePersonalStory() {
    const userName = document.getElementById('name-input').value.trim();

    if (!userName) {
        alert('Please enter your name.');
        return;
    }

    const lifeElements = ["sunshine", "rain", "blossoming flowers", "laughter", "learning", "challenges", "friendship", "love", "adventure", "reflection"];
    const lifeActions = ["nurtured", "experienced", "overcame", "embraced", "discovered", "appreciated", "celebrated", "shared", "cherished", "remembered"];

    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr.splice(randomIndex, 1)[0];
    }

    const element1 = getRandomElement(lifeElements);
    const action1 = getRandomElement(lifeActions);
    const element2 = getRandomElement(lifeElements);
    const action2 = getRandomElement(lifeActions);
    const element3 = getRandomElement(lifeElements);
    const action3 = getRandomElement(lifeActions);

    // Reset the arrays to their original state for the next story
    lifeElements.push(...lifeElements);
    lifeActions.push(...lifeActions);

    const personalStory = `
        Dear ${userName},
        In the journey of life, you've encountered ${element1} that ${action1} you.
        Along the way, you've ${action2} ${element2} and faced ${element3} with resilience.
        Your life is a beautiful tapestry woven with moments of ${action3} ${element3}.
        Each step is a chapter, and the adventure continues.
        
        Sincerely,
        Story Generator`;

    document.getElementById('personal-story-container').innerText = personalStory;
}

document.getElementById('generate-btn').addEventListener('click', generatePersonalStory);
