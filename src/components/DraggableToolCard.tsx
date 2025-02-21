import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Tool } from "../types/tool";
import { ToolCard } from "./ToolCard";

interface DraggableToolCardProps {
  tool: Tool;
  index: number;
}

export const DraggableToolCard: React.FC<DraggableToolCardProps> = ({
  tool,
  index,
}) => {
  return (
    <Draggable draggableId={tool.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${snapshot.isDragging ? "opacity-50" : ""}`}
        >
          <ToolCard {...tool} />
        </div>
      )}
    </Draggable>
  );
};
