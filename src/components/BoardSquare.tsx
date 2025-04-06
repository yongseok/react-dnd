import {ReactNode} from 'react';
import type {Game} from './Game';
import {useDrop} from 'react-dnd';

interface BoardSquareProps {
  children: ReactNode;
  x: number;
  y: number;
  game: Game;
}

// Drop 컴포넌트
export const BoardSquare = ({children, x, y, game}: BoardSquareProps) => {
  const [, drop] = useDrop(() => ({
    accept: 'knight',
    drop: () => {
      game.moveKnight(x, y);
      game.emitChange();
    },
  }));
  return (
    <div
      ref={drop}
      id='BoardSquare'
      style={{
        width: '12.5%',
        height: '12.5%',
      }}
    >
      {children}
    </div>
  );
};
