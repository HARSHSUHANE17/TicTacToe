import './App.css'
import React from 'react'

const Help = () => {
  return (
   
<div class="help-section">
  <h2>How to Play</h2>
  <p>
    This is a custom version of Tic Tac Toe! Here’s how it works:
  </p>
  <ul>
    <li>Two players take turns placing emojis on a 3×3 grid.</li>
    <li>Each player can choose a category (like Animals, Food, etc.).</li>
    <li>Only 3 emojis per player can exist on the board at a time.</li>
    <li>When a 4th emoji is placed, the oldest one disappears (FIFO logic).</li>
    <li>First player to align 3 emojis in a row (horizontally, vertically, or diagonally) wins!</li>
  </ul>
</div>

  )
}

export default Help
