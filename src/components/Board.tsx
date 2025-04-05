import Square from './Square';
import Knight from './Knight';
import { ReactElement, useEffect, useState } from 'react';
import type {Game, Position} from './Game';

export interface BoardProps {
  knightPosition: [number, number];
}

function renderSquare(
  i: number,
  [knightX, knightY]: BoardProps['knightPosition'],
  handleClick
) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      id='renderSquare'
      key={i}
      style={{width: '12.5%', height: '12.5%'}}
      onClick={() => handleClick([x, y])}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function Board({game}: {game: Game}): ReactElement {
  const [[knightX, knightY], setKnightPos] = useState(game.knightPosition);
  
  useEffect(() => game.observe(setKnightPos), []);
  
  function handleClick(pos: BoardProps['knightPosition']) {  
    game.moveKnight(pos[0], pos[1]);
    game.emitChange();
  }

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, [knightX, knightY], handleClick));
  }

  return (
    <div
      id='Board'
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  );
}