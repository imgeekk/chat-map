import { GeneratedOutput } from "@/types/output";
import { MindmapNode } from "@/types/mindmap";
import { normalizeLabel } from "./mindmap-utils";

export function buildMindmap(data: GeneratedOutput): MindmapNode {
    return {
        id: "root",
        label: data.title,
        children: data.sections.map((section, i) => ({
            id: `section-${i}`,
            label: normalizeLabel(section.heading),
            children: section.points.map((point, j) => ({
                id: `point-${j}`,
                label: point
            }))
        }))
    }
}