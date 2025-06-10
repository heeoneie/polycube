type Edge = [string, string];

interface AdjacencyListItem {
    target: string;
    visited: boolean;
}

export function findEulerianPath(edges: Edge[]): string[] | null {
    const graph: Map<string, AdjacencyListItem[]> = new Map();
    const degree: Map<string, number> = new Map();
    const nodes: Set<string> = new Set();
    let totalEdges = 0;

    for (const [u, v] of edges) {
        nodes.add(u);
        nodes.add(v);

        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);

        graph.get(u)!.push({ target: v, visited: false });
        graph.get(v)!.push({ target: u, visited: false });

        degree.set(u, (degree.get(u) || 0) + 1);
        degree.set(v, (degree.get(v) || 0) + 1);
        totalEdges++;
    }

    if (totalEdges === 0) {
        return [];
    }

    const oddDegreeNodes: string[] = [];
    for (const [node, deg] of degree) {
        if (deg % 2 !== 0) {
            oddDegreeNodes.push(node);
        }
    }

    if (oddDegreeNodes.length > 2) {
        return null;
    }

    let startNode: string;
    if (oddDegreeNodes.length === 2) {
        startNode = oddDegreeNodes[0];
    } else {
        startNode = nodes.values().next().value!;
    }
    const path: string[] = [];
    const currentPathStack: string[] = [startNode];

    while (currentPathStack.length > 0) {
        const u = currentPathStack[currentPathStack.length - 1];
        let foundUnvisitedEdge = false;

        const neighbors = graph.get(u);
        if (neighbors) {
            for (let i = 0; i < neighbors.length; i++) {
                const edge = neighbors[i];
                if (!edge.visited) {
                    foundUnvisitedEdge = true;
                    edge.visited = true;

                    const vNeighbors = graph.get(edge.target);
                    if (vNeighbors) {
                        for (let j = 0; j < vNeighbors.length; j++) {
                            if (vNeighbors[j].target === u && !vNeighbors[j].visited) {
                                vNeighbors[j].visited = true;
                                break;
                            }
                        }
                    }
                    currentPathStack.push(edge.target);
                    break;
                }
            }
        }

        if (!foundUnvisitedEdge) {
            path.push(currentPathStack.pop()!);
        }
    }

    path.reverse();

    if (path.length === totalEdges + 1) {
        return path;
    } else {
        return null;
    }
}

