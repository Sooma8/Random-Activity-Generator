
// Selecting elements
const generateBtn = document.getElementById("generate-btn")
const indoorCheckbox = document.getElementById('indoorCheckbox')
const outdoorCheckbox = document.getElementById('outdoorCheckbox')
const activityContainer = document.getElementById('activity')

// Define arrays for indoor and outdoor activities
const indoorArr = [
  "Watch a movie",
  "Read a book",
  "Cook a new recipe",
  "Play board games",
  "Do a puzzle",
  "Paint or draw",
  "Indoor gardening",
  "Play truth or dare",
  "Make birthday cards",
  "Make a friendship bracelet",
  "Learn to do Origami",
  "Decorate a box",
  "Learn to sew",
  "Make clothes for dolls",
  "Write a poem",
  "Change your usaual hairstyle",
  "Paint with coffee",
  "Tidy up you closet"

]

  const outdoorArr = [
  "Go for a hike",
  "Picnic in the park",
  "Visit a zoo",
  "Play sports",
  "Go for a bike ride",
  "Visit a beach",
  "Take a walk in nature",
  "Go to a gym",
  "Do sports",
  "Pet an animal"
]


// Event listener for generate button click
generateBtn.addEventListener('click', (e) => {
  e.preventDefault()

  // Check if at least one checkbox is checked
  if (!indoorCheckbox.checked && !outdoorCheckbox.checked) {
    activityContainer.innerText = "Select at least one type of activity."
    return
  }

  // Generate random activity based on selected checkbox
  let randomActivity
  if (indoorCheckbox.checked && outdoorCheckbox.checked) {
    randomActivity = getRandomActivity([...indoorArr, ...outdoorArr])
  } else if (outdoorCheckbox.checked) {
    randomActivity = getRandomActivity(outdoorArr)
  } else if (indoorCheckbox.checked) {
    randomActivity = getRandomActivity(indoorArr)
  }

  // Display the random activity
  activityContainer.innerText = randomActivity
})

// Function to get a random activity from the given array
function getRandomActivity(activityArr) {
  const randomIndex = Math.floor(Math.random() * activityArr.length)
  return activityArr[randomIndex]
}

