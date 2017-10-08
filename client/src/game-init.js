
let tiles = ["straight", "cross", "opposite-corners", "one-corner", "two-corners-same-side",
"left-hook", "right-hook"];

let codes = ["1010","1212","1122","1100","0111","1011","1110"];


let profiles = tiles.map((tile,i) => {
  return {type: i,code:codes[i],name:tiles[i]};
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

function drawHand (deck,handsize) {
  let hand = [];
  for (let i=0;i<handsize;i++) {
    hand.push(deck.pop());
  }
  // console.log(hand);
  return hand;
  // console.log('handdrawn');
}

function buildPlayer() {
  let player = {};
  player.deck = buildDeck();
  player.hand = drawHand(player.deck,4);
  player.bases = [];
  return player;
}

////////////////////

function randMax(max) {
  return Math.floor(Math.random()*(max+1));
}

function gridBoarders (bSize) {
  let boarderArray = [];
  // horizontal boarders
  for (let i = 0; i < bSize-1; i++) {
    for (let j = 0; j < bSize+1; j++) {
      boarderArray.push(`${i+0.5}-${j}`);
    }
  }
  // vertical boarders
  for (let i = 0; i < bSize+1; i++) {
    for (let j = 0; j < bSize-1; j++) {
      boarderArray.push(`${i}-${j+0.5}`);
    }
  }
  return boarderArray;
}

function placeBases (num, bSize) {
  let possibleLocations = gridBoarders(bSize);
  let bases = [];
  for (let i = 0; i < num; i++) {
    let ran = randMax(possibleLocations.length-1);
    let base = possibleLocations.splice(ran, 1)[0];
    bases.push(base);
  }
  return bases;
}

function buildBoard(bsize) {
  let board = {};
  board.p1occupied = [];
  board.p2occupied = [];
  board.bases = placeBases(15,15);
  return board;
}

export { buildPlayer , buildBoard }
