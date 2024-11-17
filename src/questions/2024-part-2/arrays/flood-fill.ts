/**
 * https://leetcode.com/problems/flood-fill/description/
 * 
 * We flood the pic recursively starting at initial spot.
 * We exit early if out of bounds or it's already colored.
 * If the spot is initial color, we fill and call function again for the nearby pixels.
 */
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const initialColor = image[sr][sc]

  function flood(x: number, y: number) {
    if (x < 0 || x === image.length || y < 0 || y === image[0].length || image[x][y] === color) {
      return
    }

    if (image[x][y] === initialColor) {
      image[x][y] = color

      flood(x + 1, y)
      flood(x, y - 1)
      flood(x, y + 1)
      flood(x - 1, y)
    }
  }

  flood(sr, sc)

  return image
}

export {floodFill}
