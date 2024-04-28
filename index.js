// Create your game here!

// Alert
alert("\n Let's play a game!!!");

// Prompt
prompt(
  "A square is going to appear before you. \n Can you guess what color it will be?"
);

for (let i = 0; i <= 10; i++) {
let sqDiv = document.createElement("div")

}

function newColors(sqDiv) {

const colors = ["pink", "red", "orange", "blue", "purple", "yellow", "green"];
sqDiv.style.backgroundColor = `rgba(${Math.round(
  Math.random() * 255
)} ${Math.round(Math.random() * 255)}, ${Math.round(
  Math.random() * 255
)}, 255)`;


const randomColor = colors[Math.floor(Math.random() * colors.length)];

sqDiv.style.backgroundColor = randomColor;

}

function handleClick() {

newColors();

}