export function normalizeLabel(text: string){
    return text.replace(/\.$/, "").slice(0, 60);  // this is for not allowing longer text inside a node
}