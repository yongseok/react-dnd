import Square from './Square';
import Knight from './Knight';
import { ReactElement } from 'react';
import type {Game} from './Game';

export interface BoardProps {
  knightPosition: [number, number];
}

function renderSquare(
  i: number,
  [knightX, knightY]: BoardProps['knightPosition']
) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{width: '12.5%', height: '12.5%'}}>
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function Board({game}: {game: Game}): ReactElement {
  console.log('🚀 | Board | game:', game);
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, game.knightPosition));
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