export function createGrid(width: number, height: number) {
  const grid = [];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      grid.push({ x, y });
    }
  }
  return grid;
}
