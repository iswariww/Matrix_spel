// Event Listeners for Pill Choices
document.getElementById("bluePillButton").addEventListener("click", () => {
  displayResult(
    "You chose the Blue Pill. You wake up safely in your bed. The story ends here. You escape the Matrix and return to your normal life."
  );
});

document.getElementById("redPillButton").addEventListener("click", () => {
  displayResult(
    "You chose the Red Pill. Welcome deeper into the Matrix. You are now in Room 1: The Code Chamber."
  );
  setTimeout(() => {
    room1();
  }, 2000);
});

// Room 1 - Code Chamber
function room1() {
  const roomMessage = `
    In Room 1, you are surrounded by lines of green code flowing across the walls. 
    You hear a voice: 'Welcome, Neo. You must choose: (1) Explore further or (2) Exit now.'
  `;
  displayResult(roomMessage);

  const choice1 = window.prompt("Press 1 to Explore further or 2 to Exit.");
  if (choice1 === "1") {
    room2();
  } else if (choice1 === "2") {
    displayResult(
      "You chose to exit. The walls close in, and you are safely returned to reality. Game over."
    );
  } else {
    displayResult(
      "Invalid choice. The Matrix collapses, and you are lost forever."
    );
  }
}

// Room 2 - Architect's Domain
function room2() {
  const roomMessage = `
    You chose to explore further. Welcome to Room 2: The Architect's Domain. 
    The Architect greets you and offers you two doors: (1) The Door of Knowledge or (2) The Door of Return.
  `;
  displayResult(roomMessage);

  const choice2 = window.prompt(
    "Press 1 to enter The Door of Knowledge or 2 to Return."
  );
  if (choice2 === "1") {
    displayResult(
      "You enter The Door of Knowledge. Your mind expands, and you gain a deep understanding of the secrets of the Matrix. Congratulations, you have reached the end of the journey."
    );
  } else if (choice2 === "2") {
    displayResult(
      "You chose to return. The Architect nods and you safely exit the Matrix. Game over."
    );
  } else {
    displayResult(
      "Invalid choice. The Architect disappears, and the room dissolves. You are lost in the void."
    );
  }
}

// Room 3 - Oracle's Garden
function room3() {
  displayResult(
    "You chose to explore further. Welcome to Room 3: The Oracle's Garden. The Oracle asks if you want to know your future or if you'd rather stay ignorant."
  );
  const choice3 = window.prompt(
    "Press 1 to Know your Future or 2 to Stay Ignorant."
  );
  if (choice3 === "1") {
    displayResult(
      "The Oracle shows you visions of both triumph and defeat. Your mind races, but you are now equipped with knowledge."
    );
  } else if (choice3 === "2") {
    displayResult(
      "You chose ignorance. The Oracle smiles and you exit the Matrix, but you'll always wonder what could have been."
    );
  } else {
    displayResult(
      "Invalid choice. The Oracle fades away, and you are left in confusion."
    );
  }
}

// Meet Morpheus
function meetMorpheus() {
  displayResult(
    "You meet Morpheus. He offers you two choices: (1) Take the Path of Knowledge, (2) Follow the Path of Power."
  );
  const choice4 = window.prompt("Press 1 for Knowledge or 2 for Power.");
  if (choice4 === "1") {
    displayResult(
      "Morpheus nods. 'You seek knowledge. Beware, the truth can be a heavy burden.'"
    );
  } else if (choice4 === "2") {
    displayResult("Morpheus warns, 'Power comes at a price. Choose wisely.'");
  } else {
    displayResult(
      "Morpheus fades away. You are left with lingering questions."
    );
  }
}

// Timed Choice Function
function timedChoice() {
  let timer = 10;
  const interval = setInterval(() => {
    displayResult(`Choose quickly! You have ${timer} seconds left.`);
    if (timer === 0) {
      clearInterval(interval);
      displayResult("Time's up! You hesitated too long.");
    }
    timer--;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    const decision = window.prompt("Choose 1 to Act or 2 to Flee.");
    if (decision === "1") {
      displayResult("You acted bravely in the face of danger!");
    } else if (decision === "2") {
      displayResult("You fled, narrowly escaping.");
    } else {
      displayResult("You did nothing, and fate took its course.");
    }
  }, 10000);
}

// Inventory Management
let inventory = [];

function addItem(item) {
  inventory.push(item);
  displayResult(`You found: ${item}.`);
}

function displayInventory() {
  alert("Your Inventory: " + inventory.join(", "));
}

// Key Choices Tracking
let keyChoices = { knowledge: false, power: false };

function finalRoom() {
  if (keyChoices.knowledge && keyChoices.power) {
    displayResult("You mastered both paths. You are the One.");
  } else if (keyChoices.knowledge) {
    displayResult(
      "You achieved great knowledge, but there is more to the Matrix."
    );
  } else if (keyChoices.power) {
    displayResult("You gained immense power, but at what cost?");
  } else {
    displayResult(
      "You wandered aimlessly, finding neither knowledge nor power."
    );
  }
}

// Display Result Function
function displayResult(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.add("fadeIn");
  resultDiv.textContent = message;
  setTimeout(() => {
    resultDiv.classList.remove("fadeIn");
  }, 1000);
}

// Play Background Sound
document.getElementById("backgroundSound").play();
