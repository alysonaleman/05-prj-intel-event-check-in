//Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track attendance
let count = 0;
const maxcount = 50;

//Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Get form values
  const name = nameInput.ariaValueMax;
  const team = teamSelect.ariaValueMax;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team);

  //Increment count
  count++
  console.log("Total check-ins: ", count);

  //Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log('Progress: ${percentage}');

  //Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Show welcome message
  const message = 'Welcome, ${name} from ${teamName}';
  console.log(message);

  form.reset();
});
