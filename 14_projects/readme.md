# 🎮 Tic Tac Toe Game (JavaScript Project)

### [Play](../14_projects/TicTacToe/index.html)

A simple and interactive Tic Tac Toe game built using **HTML**, **CSS**, and **Vanilla JavaScript**.

This project is perfect for beginners who want to understand how real-world JavaScript projects work using:

* DOM Manipulation
* Event Handling
* Arrays
* Loops
* Functions
* Game Logic
* State Management

---

# 📚 What is Tic Tac Toe?

Tic Tac Toe is a two-player game played on a **3 × 3 grid**.

### Rules

* Player 1 uses **O**
* Player 2 uses **X**
* Players take turns one by one.
* First player who creates a straight line wins.

The line can be:

✅ Horizontal

```
O | O | O
---------
X | X |
---------
  |   |
```

✅ Vertical

```
O | X |
---------
O | X |
---------
O |   |
```

✅ Diagonal

```
O | X |
---------
X | O |
---------
  |   | O
```

If all 9 cells are filled and nobody wins, the game becomes a **Draw**.

---

# 📁 Project Structure

```
TicTacToe/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

# 🏗️ HTML Structure

## Message Container

```html
<div class="msg-container hide">
```

This section shows:

* Winner Message
* Draw Message
* New Game Button

Initially it is hidden using:

```css
.hide {
  display: none;
}
```

---

## Game Board

```html
<div class="game">
```

Contains 9 buttons.

```html
<button class="box"></button>
```

Each button represents one cell of the Tic Tac Toe board.

Total cells:

```
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

---

## Reset Button

```html
<button id="reset-btn">
```

Used to restart the game.

---

# 🎨 CSS Explanation

## Using Flexbox

```css
display: flex;
justify-content: center;
align-items: center;
```

Used to center the game board.

---

## Responsive Units

```css
vmin
```

Example:

```css
height: 18vmin;
```

Meaning:

Use the smaller value between viewport width and height.

This keeps the board responsive on all devices.

---

## Box Styling

```css
.box {
  border-radius: 1rem;
}
```

Creates rounded corners.

---

## Shadow

```css
box-shadow
```

Adds depth effect to boxes.

---

# 🚀 JavaScript Deep Explanation

---

# Step 1: Selecting Elements

```javascript
let boxes = document.querySelectorAll(".box");
```

Selects all 9 boxes.

Returns:

```javascript
NodeList(9)
```

---

```javascript
let resetBtn = document.querySelector("#reset-btn");
```

Select Reset button.

---

```javascript
let newGameBtn = document.querySelector("#new-btn");
```

Select New Game button.

---

```javascript
let msgContainer = document.querySelector(".msg-container");
```

Select message container.

---

```javascript
let msg = document.querySelector("#msg");
```

Select message text.

---

# Step 2: Game State Variables

## Current Turn

```javascript
let turnO = true;
```

Used to track whose turn it is.

```
true  = O turn
false = X turn
```

---

## Draw Counter

```javascript
let count = 0;
```

Tracks total moves.

Example:

```
Move 1 → count = 1
Move 2 → count = 2
...
Move 9 → count = 9
```

If:

```javascript
count === 9
```

and no winner exists:

```javascript
Draw
```

---

# Step 3: Winning Patterns

```javascript
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];
```

These represent all possible winning combinations.

Example:

```javascript
[0,1,2]
```

means:

```
Top Row
```

---

```javascript
[0,4,8]
```

means:

```
Main Diagonal
```

---

# Step 4: Box Click Event

```javascript
boxes.forEach((box)=>{
```

Loop through every box.

---

```javascript
box.addEventListener("click", ()=>{
```

Runs when user clicks a box.

---

## O Turn

```javascript
if(turnO){
    box.innerText = "O";
    turnO = false;
}
```

Display O and switch turn.

---

## X Turn

```javascript
else{
    box.innerText = "X";
    turnO = true;
}
```

Display X and switch turn.

---

## Disable Clicked Box

```javascript
box.disabled = true;
```

Prevents overwriting.

Without this:

```
O → X → O → X
```

could happen on same box.

---

## Increase Move Count

```javascript
count++;
```

Track total moves.

---

# Step 5: Check Winner

```javascript
let isWinner = checkWinner();
```

Calls winner checking function.

---

# Step 6: Draw Logic

```javascript
if(count === 9 && !isWinner)
```

Meaning:

* Board full
* No winner

Then:

```javascript
gameDraw();
```

---

# Draw Function

```javascript
const gameDraw = ()=>{
```

Displays:

```javascript
Game was a Draw.
```

Shows message container.

Disables all boxes.

---

# Step 7: Disable Boxes

```javascript
const disableBoxes = ()=>{
```

Loop through all boxes.

```javascript
box.disabled = true;
```

Stops further moves.

---

# Step 8: Enable Boxes

```javascript
const enableBoxes = ()=>{
```

Used during restart.

---

Enable again:

```javascript
box.disabled = false;
```

Clear old values:

```javascript
box.innerText = "";
```

---

# Step 9: Show Winner

```javascript
const showWinner = (winner)=>{
```

Receives:

```javascript
"O"
```

or

```javascript
"X"
```

Example:

```javascript
Congratulations, Winner is O
```

Shows message container.

Disables all boxes.

---

# Step 10: Winner Checking Logic

This is the heart of the game.

```javascript
const checkWinner = ()=>{
```

---

Loop through all patterns.

```javascript
for(let pattern of winPatterns)
```

Example:

```javascript
[0,1,2]
```

---

Get values.

```javascript
let pos1Val
let pos2Val
let pos3Val
```

Example:

```
O | O | O
```

---

Check if cells are not empty.

```javascript
if(pos1Val != "" &&
   pos2Val != "" &&
   pos3Val != "")
```

---

Compare values.

```javascript
if(pos1Val === pos2Val &&
   pos2Val === pos3Val)
```

Winner found.

---

Show Winner.

```javascript
showWinner(pos1Val);
```

Return:

```javascript
true
```

---

# Step 11: Reset Game

```javascript
const resetGame = ()=>{
```

Reset everything.

---

Turn reset:

```javascript
turnO = true;
```

---

Counter reset:

```javascript
count = 0;
```

---

Enable boxes:

```javascript
enableBoxes();
```

---

Hide message:

```javascript
msgContainer.classList.add("hide");
```

---

# Step 12: Button Events

## New Game

```javascript
newGameBtn.addEventListener(
  "click",
  resetGame
);
```

Starts fresh game.

---

## Reset Game

```javascript
resetBtn.addEventListener(
  "click",
  resetGame
);
```

Also starts fresh game.

---

# 🧠 Important Concepts Learned

After completing this project, you will understand:

### DOM Selection

```javascript
querySelector()
querySelectorAll()
```

---

### Event Handling

```javascript
addEventListener()
```

---

### Loops

```javascript
for
for...of
forEach
```

---

### Arrays

```javascript
winPatterns
```

---

### Functions

```javascript
resetGame()
showWinner()
checkWinner()
```

---

### State Management

```javascript
turnO
count
```

---

### Conditional Logic

```javascript
if
else
```

---

### Dynamic UI Updates

```javascript
innerText
classList
disabled
```

---

# 🎯 Possible Improvements

You can extend this project by adding:

### 1. Score Board

```
Player O : 5
Player X : 3
```

---

### 2. Winning Animation

Highlight winning boxes.

```css
background-color: green;
```

---

### 3. Sound Effects

```javascript
new Audio()
```

---

### 4. Single Player Mode

Play against computer.

---

### 5. Minimax AI

Create an unbeatable Tic Tac Toe bot.

---

### 6. Dark Mode

Add theme switcher.

---

# 🏁 Final Summary

This project is a complete beginner-friendly JavaScript game that teaches:

* DOM Manipulation
* Event Listeners
* Loops
* Arrays
* Functions
* Game State Management
* Dynamic UI Updates

If you fully understand this project, you are already capable of building many beginner-to-intermediate JavaScript applications such as:

* Quiz Apps
* Todo Apps
* Calculator Apps
* Memory Games
* Rock Paper Scissors
* Sudoku (basic version)

Happy Coding 🚀
