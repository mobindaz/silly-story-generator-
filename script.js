// Arrays of silly story elements
const characters = ["The Ninja", "The Pirate", "The Unicorn", "The Robot"];
const actions = ["ate", "danced with", "flew around with", "tickled"];
const objects = ["a talking donut", "a rainbow", "a giant pickle", "a dancing chicken"];

// Function to generate a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to generate a silly story
function generateSillyStory() {
    const character = getRandomElement(characters);
    const action = getRandomElement(actions);
    const object = getRandomElement(objects);

    const sillyStory = `${character} ${action} ${object}.`;

    // Display the silly story on the page
    document.getElementById('silly-story-container').innerText = sillyStory;
}

// Event listener for the button click
document.getElementById('generate-btn').addEventListener('click', generateSillyStory);
