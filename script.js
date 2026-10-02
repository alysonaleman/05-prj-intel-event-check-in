// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementByID("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values (FIXED: use .value instead of .ariaValueMax)
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team);

  // Increment count
  count++;
  console.log("Total check-ins: ", count);

  // Update progress bar (FIXED: use backticks `` instead of single quotes '')
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  if (teamCounter) {
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;}

  // Show welcome message (FIXED: use backticks `` instead of single quotes '')
  const message = `Welcome, ${name} from ${teamName}`;
  console.log(message);

  form.reset();
});