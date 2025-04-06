import {useDrag} from 'react-dnd';
import type {DragSourceMonitor} from 'react-dnd';

export default function Knight() {
  const [{isDragging}, dragRef] = useDrag(() => ({
    type: 'knight',
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  // console.log('🚀 | const[{isDragging},dragRef]=useDrag | isDragging:', isDragging);

  return (
    <div
      id='Knight'
      ref={dragRef as any}
      role='button'
      style={{
        fontSize: '40px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      ♘
    </div>
  );
}
