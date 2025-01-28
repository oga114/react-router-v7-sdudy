import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
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
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        setItems(arrayMove(items, oldIndex, newIndex));
      }
    };

    return (
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items}>
          {items.map((item) => (
            <SortableItem key={item} id={item} />
          ))}
        </SortableContext>
      </DndContext>
    );
  }

  function SortableItem({ id }: { id: string }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      padding: '8px',
      margin: '4px 0',
      backgroundColor: 'lightgreen',
      border: '1px solid darkgreen',
      cursor: 'grab',
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {id}
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
