import { ReactElement, ReactNode} from 'react';
import { useDrop } from 'react-dnd';
import type {Game} from './Game';

interface SquareProps {
  black: boolean;
  children: ReactNode;
}

export default function Square({black, children}: SquareProps): ReactElement {
  
  const backgroundColor = black ? 'black' : 'white';
  const color = black ? 'white' : 'black';

  return (
    <div
      id='Square'
      style={{
        backgroundColor,
        color,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
}
