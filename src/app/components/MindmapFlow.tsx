"use client";

import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export function MindmapFlow({ nodes, edges }: { nodes: any[]; edges: any[] }) {
  return (
    <div className="h-150 w-full lg:w-250 border rounded-xl">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
