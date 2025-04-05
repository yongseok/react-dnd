import { useMemo } from 'react';
import Board from './components/Board';
import { Game } from './components/Game'


export const TutorialApp = () => {
  const game = useMemo(() => new Game(), [])

  return (
    <div id='TotorialApp'>
      <Board game={game} />
    </div>
  );
}