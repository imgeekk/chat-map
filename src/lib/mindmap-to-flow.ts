import { MindmapNode } from "@/types/mindmap";

let y = 0;

export function mindmapToFlow(root: MindmapNode) {
  const nodes: any[] = [];
  const edges: any[] = [];

  function walk(node: MindmapNode, parentId?: string, depth = 0) {
    const id = node.id;

    nodes.push({
      id,
      data: { label: node.label },
      position: { x: depth * 250, y: y++ * 80 },
      type: "default"
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${id}`,
        source: parentId,
        target: id
      });
    }

    node.children?.forEach(child => walk(child, id, depth + 1));
  }

  walk(root);
  return { nodes, edges };
}
