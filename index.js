// Create your game here!

// Alert
alert("\n Let's play a game!!!");

// Prompt
prompt(
  "A square is going to appear before you. \n Can you guess what color it will be?"
);

// *******************************This is not working!!!******************************************

function newColors(div1) {

const colors = ["pink", "red", "orange", "blue", "purple", "yellow", "green"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

div1.style.backgroundColor = randomColor;
}

function handleClick(div1) {

newColors(div1);

}

console.log(div1)
