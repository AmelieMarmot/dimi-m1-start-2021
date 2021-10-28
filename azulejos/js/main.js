
const getRandomColor = () => {
  const r = Math.random()
  if (r < 0.5) {
    return 'red'
  }
  return 'blue'
}

const createType1 = () => {
  const source = document.querySelector('#library .type1')
  const clone = source.cloneNode(true)
  return clone 
}

const createTile = () => {
  const div = document.createElement('div')
  div.className = 'tile'
  document.querySelector('main').append(div)

  div.append(createType1())

  return div
}

const createGrid = (col, row) => {
  for (let y = 0; y < row; y += 1) {
    for (let x = 0; x < col; x += 1) {
      const tile = createTile()
      tile.style.left = `${x * 120}px`
      tile.style.top = `${y * 120}px`
    }
  }
}

createGrid(4, 3)