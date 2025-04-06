import { ReactElement, useEffect, useState } from 'react';
import type {Game} from './Game';
import { BoardSquare } from './BoardSquare';
import Square from './Square';
import Knight from './Knight';

export default function Board({game}: {game: Game}): ReactElement {
  const [[knightX, knightY], setKnightPos] = useState(game.knightPosition);
  
  useEffect(() => game.observe(setKnightPos), [game]);

  const squares = [];
  for (let i = 0; i < 64; i++) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 0;

    squares.push(
      <BoardSquare x={x} y={y} game={game}>
        <Square black={black}>
          {x === knightX && y === knightY ? <Knight /> : <></>}
        </Square>
      </BoardSquare>
    );
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