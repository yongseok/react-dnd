import { ReactElement, ReactNode } from 'react';

interface SquareProps {
  black: boolean,
  children: ReactNode,
}

export default function Square({black, children}: SquareProps): ReactElement {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div 
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0
      }}
    >
      {children}
    </div>
  )
}