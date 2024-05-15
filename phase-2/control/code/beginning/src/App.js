/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";

// To be able to initialize a state, we need the useState library.
import { useState } from "react";

export default function App() {
  // 1. Make a state that manages the current card.
  // 2. Make arrays of suits and ranks.
  // 3. Make a function that randomly chooses from the arrays to change the card state
  // 4. [Inside Card] Add a 'click' event listener to the button that triggers the function.
  // 5. [Inside Card] Replace the static card text with the state value.

  const [card, setCard] = useState("Ace of Spades");

  const suits = ["Spades", "Clubs", "Diamond", "Hearts"];

  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

  /**randomize integer number to access random suit and rank and string them. */
  const randomizeCard = () => {
    let rank = ranks[Math.floor(Math.random() * ranks.length)].toString();
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let newCard = `${rank} of ${suit}`;
    setCard(newCard);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Is This Your Card?</h1>
      <Card card={card} randomize={randomizeCard} />
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}
