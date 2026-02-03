import { MindmapNode } from "@/types/mindmap";

function Node({ node }: { node: MindmapNode }) {
  return (
    <div className="ml-4 mt-2">
      <div className="rounded-md border px-3 py-1 inline-block">
        {node.label}
      </div>

      {node.children && (
        <div className="ml-4">
          {node.children.map(child => (
            <Node key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export function MindmapView({ root }: { root: MindmapNode }) {
  return <Node node={root} />;
}
