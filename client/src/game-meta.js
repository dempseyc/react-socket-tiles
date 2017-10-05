
let tiles = ["straight", "cross", "opposite corners", "one corner", "two corners same side",
"hook left", "hook right"];

let codes = ["1010","1212","1122","1100","0111","1011","1110"];


let profiles = tiles.map((tile,i) => {
  return {[tiles[i]]: codes[i]};
});

let ranNum = function () {
  return Math.floor(Math.random()*tiles.length);
}

function buildDeck() {
  let decksize = 20; //135
  let deck = [];
  for (let i=0;i<decksize;i++) {
    let num = ranNum();
    deck.push(profiles[num]);
  }
  return deck;
}

// console.log(buildDeck());

export { buildDeck }
