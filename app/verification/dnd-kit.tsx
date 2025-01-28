import React, { useEffect, useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';

export default function DndKit() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <h1>Loading...</h1>;
  }

  function App() {
    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;
      if (over) {
        console.log(`Moved ${active.id} to ${over.id}`);
      }
    };

    return (
      <DndContext onDragEnd={handleDragEnd}>
        <Draggable id="draggable-item">Drag me!</Draggable>
        <Droppable id="droppable-area">Drop here!</Droppable>
      </DndContext>
    );
  }

  function Draggable({ id, children }: { id: string; children: React.ReactNode }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    return (
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={{
          padding: '8px',
          backgroundColor: 'lightblue',
          cursor: 'grab',
          transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
          touchAction: 'none',
        }}
      >
        {children}
      </div>
    );
  }

  function Droppable({ id, children }: { id: string; children: React.ReactNode }) {
    const { setNodeRef } = useDroppable({ id });

    return (
      <div
        ref={setNodeRef}
        style={{
          margin: '20px',
          padding: '8px',
          backgroundColor: 'lightgray',
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <>
      <h1>DndKit</h1>
      <App />
    </>
  );
}
