const cards = [...document.getElementsByClassName("card-inner")];

cards.forEach((card) => {
  card.onclick = function () {
    card.classList.toggle("is-flipped");
    console.log("1", card);
  };
  console.log("2", card);
});

/* game rules
  3 cards appear on screen one of them is a bee card, the other 2 cards are 
  ogre cards.

  User should pick a card from the screen.
  
  Card flips and shows if its content.

  Rest of the cards flip. 

  Winner or Loser appears as the H1.

  Game restarts.

  Optional: have a counter with wins/loses.
  Optional: 8-bit music and effects.
*/
