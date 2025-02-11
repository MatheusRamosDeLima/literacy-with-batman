const divCurrentLetter = document.querySelector('.current-letter')
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const chooseType = 3 
let currentLetterIndex = 0

updateLetter(getLetter(0, chooseType))

document.querySelector('body').addEventListener('keydown', (key) => {
  if (key.keyCode == 37) goPrevious()
  else if (key.keyCode == 39) goNext()
})

function getLetter(index, type) {
  const letter = letters[index]
  switch (type) {
    case 1:
      return `${letter}`
    case 2:
      return `${letter.toLowerCase()}`
    case 3:
      return `${letter} ${letter.toLowerCase()}`
  }
}

function updateLetter(letter) {
  divCurrentLetter.innerHTML = letter
}

function goPrevious() {
  if (currentLetterIndex == 0) return;
  currentLetterIndex--;
  updateLetter(getLetter(currentLetterIndex, chooseType))
}

function goNext() {
  if (currentLetterIndex == letters.length - 1) return;
  currentLetterIndex++;
  updateLetter(getLetter(currentLetterIndex, chooseType))
}
