function drawHand (deck,handsize) {
  let hand = [];
  for (let i=0;i<handsize;i++) {
    hand.push(deck.pop());
  }
  // console.log(hand);
  return hand;
  // console.log('handdrawn');
}

function drawTile (hand,deck) {
  console.log('tiledrawn');
}

export {drawHand,drawTile}
