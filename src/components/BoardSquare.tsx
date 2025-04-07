import {ReactNode, Ref} from 'react';
import type {Game} from './Game';
import {useDrop} from 'react-dnd';
import {Overlay} from './Overlay';

interface BoardSquareProps {
  children: ReactNode;
  x: number;
  y: number;
  game: Game;
}

// Drop 컴포넌트
export const BoardSquare = ({children, x, y, game}: BoardSquareProps) => {
  const [{isOver, canDrop}, drop] = useDrop(() => ({
    accept: 'knight',
    drop: () => {
      game.moveKnight(x, y);
    },
    canDrop: () => game.canMoveKnight(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <>
      <div
        ref={drop as unknown as Ref<HTMLDivElement>}
        id='BoardSquare'
        style={{
          position: 'relative',
          width: '12.5%',
          height: '12.5%',
        }}
      >
        {children}
        {isOver && !canDrop && <Overlay backgroundColor='skyblue' />}
        {!isOver && canDrop && <Overlay backgroundColor='yellow' />}
        {isOver && canDrop && <Overlay backgroundColor='green' />}
      </div>
    </>
  );
};
