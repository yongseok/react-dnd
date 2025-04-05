import {DndProvider} from 'react-dnd';
import './App.css';
import {HTML5Backend} from 'react-dnd-html5-backend';
import Example from './Example';

function App() {
  return (
    <div id='App'>
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}

export default App;
